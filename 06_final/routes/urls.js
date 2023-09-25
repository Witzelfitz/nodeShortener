import express from 'express';
import { Url, validateUrl } from '../models/url.js';

const router = express.Router();
router.use(express.json());

router.get('/test', (req, res) => {
    res.send('Test URL successful')
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



export {router as urlsRouter};