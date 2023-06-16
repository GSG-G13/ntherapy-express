import express from 'express';
import getAllTherapists from '../controllers';

const therapists = express.Router();

therapists.get('/therapists', getAllTherapists);
export default therapists;
