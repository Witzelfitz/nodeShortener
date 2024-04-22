import express from 'express';
import { Url, validateUrl } from '../models/url.js';

const router = express.Router();
router.use(express.json());

router.get('/all', async (req, res) => {
    const urls = await Url.find().sort('-createdAt'); //sort by date
    res.send(urls);
}
);

router.post('/shorten', async (req, res) => {
    const { error } = validateUrl(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const url = new Url({
        originalUrl: req.body.originalUrl,
    });

    await url.save();

    const fullShortenedUrl = `localhost:3000/${url.shortUrl}`;
    res.render('index', { shortUrl: fullShortenedUrl});

});

router.get('/:shortUrl', async (req, res) => {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (!url) return res.status(404).send('The url with the given shortUrl was not found.');

    // Increment the click count (optional)
    url.clicks += 1;
    await url.save();

    // Redirect to the originalUrl
    res.redirect(url.originalUrl);
});

router.delete('/:shortUrl', async (req, res) => {
    try {
        const result = await Url.deleteOne({ shortUrl: req.params.shortUrl });
        if (result.deletedCount === 0) {
            return res.status(404).send('The URL with the given shortUrl was not found.');
        }
        res.send({ message: 'URL successfully deleted' });
    } catch (error) {
        res.status(500).send('Error deleting the URL: ' + error.message);
    }
});



export {router as urlsRouter};