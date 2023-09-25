import mongoose from 'mongoose';
import {nanoid} from 'nanoid';

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, default: () => nanoid(5) },
    createdAt: { type: Date, default: Date.now },
    validDays: { type: Number, default: 7 },
    clicks: { type: Number, default: 0 }
});

const Url = mongoose.model('Url', urlSchema);



export { Url, urlSchema };
