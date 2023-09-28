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

    // get the ID of the url to be deleted
    const urlObject = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (!urlObject) return res.status(404).send('The Url with the given shortUrl was not found.');

    // get the ID of the document
    const urlId = urlObject._id;

    // delete the document

    const url = await Url.findByIdAndRemove(urlId);
    if (!url) return res.status(404).send('The Url with the given ID was not found.');

    // Return the updated costumer
    res.send(url);
});



export {router as urlsRouter};