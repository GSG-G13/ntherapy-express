import { NextFunction, Request, Response } from 'express';
import { getTherapistById, getAllTherapist } from '../services';
import { THERAPISTS_LIMIT } from '../db/connection';
import { templateErrors } from '../helpers';
import { TherapistWithUserOptional } from '../types';

const findTherapistById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    if (!parseInt(id, 10)) {
      throw templateErrors.BAD_REQUEST('id should be number');
    }
    const data: TherapistWithUserOptional | null = await getTherapistById(id);
    if (!data?.user?.isActive) {
      throw templateErrors.NOT_FOUND('therapist not found');
    }
    if (data) {
      res.json({ data, message: 'success therapist data' });
    } else {
      throw templateErrors.NOT_FOUND('Therapist not found');
    }
  } catch (error) {
    next(error);
  }
};

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

export { findTherapistById, getAllTherapists };
