import express from 'express';
import { Url } from '../models/url.js';

const router = express.Router();
router.use(express.json());

router.get('/test', (req, res) => {
    res.send('Test URL successful')
}
);

router.post('/shorten', async (req, res) => {
    const url = new Url({
        originalUrl: req.body.originalUrl,
    });

    await url.save();

    res.send(url);
});


export {router as urlsRouter};