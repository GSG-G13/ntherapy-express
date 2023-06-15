import { NextFunction, Request, Response } from 'express';
import getAllTherapist from '../services';

const getAllTherapists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { q, page } = req.query;
    const pageNumber = parseInt(page as string, 2) || 1;
    const limit = 8;

    const therapists = await getAllTherapist(q as string, pageNumber, limit);

    if (!therapists.length) {
      res.status(204).json({});
    }

    res.status(200).json(therapists);
  } catch (error) {
    next(error);
  }
};

export default getAllTherapists;
