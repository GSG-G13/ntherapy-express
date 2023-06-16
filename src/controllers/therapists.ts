import { NextFunction, Request, Response } from 'express';
import getAllTherapist from '../services';
import { THERAPISTS_LIMIT } from '../db/connection';

const getAllTherapists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { q, page } = req.query;
    const pageNumber = Number(page) || 1;

    const therapists = await getAllTherapist(q as string || ' ', pageNumber, THERAPISTS_LIMIT);

    if (therapists.length === 0) {
      return res.status(204).json({ message: 'No therapists found' });
    }

    res.json({
      message: 'Success',
      data: therapists,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllTherapists;
