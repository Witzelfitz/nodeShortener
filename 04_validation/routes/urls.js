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

    res.send(url);
});


export {router as urlsRouter};