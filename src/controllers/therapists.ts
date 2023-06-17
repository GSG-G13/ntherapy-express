import { NextFunction, Request, Response } from 'express';
import { getTherapistById, getAllTherapist } from '../services';
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
    const pageNumber = Number(page);

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(pageNumber)) {
      throw templateErrors.BAD_REQUEST('Page number should be a valid number');
    }

    const therapists = await getAllTherapist(q as string || '', pageNumber);

    res.json({
      message: 'Success',
      data: therapists,
    });
  } catch (error) {
    next(error);
  }
};

export { findTherapistById, getAllTherapists };
