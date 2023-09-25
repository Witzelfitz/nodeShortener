import express from 'express';

const router = express.Router();
router.use(express.json());

router.get('/test', (req, res) => {
    res.send('Test URL successful')
}
);

export {router as urlsRouter};