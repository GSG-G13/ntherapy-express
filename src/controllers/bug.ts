import { NextFunction, Response, Request } from 'express';
import { ValidationError } from 'yup';
import { getAllBugs as BugsService, createBug, updateBug } from '../services/bug';
import { addBugSchema, updateBugSchema } from '../helpers/validation/bug';
import { templateErrors } from '../helpers';

const getAllBugs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status, priority, assignedTo } = req.body;
    const bugs = await BugsService({ status, priority, assignedTo });
    res.json({
      message: 'success',
      data: bugs,
    });
  } catch (error) {
    next(error);
  }
};
const createNewBug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, priority } = req.body;
    await addBugSchema.validate({ title, description, priority });
    const bug = await createBug({ title, description, priority });
    res.json({
      message: 'success',
      data: bug,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return next(templateErrors.BAD_REQUEST(error.message));
    }
    next(error);
  }
};

const editBug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      id, priority, status, assignedTo,
    } = req.body;
    await updateBugSchema.validate({
      id, priority, status, assignedTo,
    });
    const bug = await updateBug(id, { priority, status, assignedTo });
    res.json({
      message: 'success',
      data: bug,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return next(templateErrors.BAD_REQUEST(error.message));
    }
    return next(error);
  }
};

export { getAllBugs, createNewBug, editBug };
