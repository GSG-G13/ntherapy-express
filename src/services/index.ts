import { getTherapistById, getAllTherapist, updateTherapist } from './therapists';
import {
  getAppointmentsPerDateService, getAppointmentById, updateIsAvailable,
  addAppointment,
} from './appointment';
import { loginByEmail, registerTherapist, registerUser } from './auth';
import getClientSecret from './payment';
import bookAppointment from './session';
import getAdmin from './admin';
import createPresignedUrl from './S3Service';
import mailer from './nodemailer';

export {
  getTherapistById, getAllTherapist, getAppointmentsPerDateService, getAppointmentById
  , updateIsAvailable, addAppointment, updateTherapist, getClientSecret, bookAppointment, getAdmin,
  createPresignedUrl, mailer,
  loginByEmail, registerTherapist, registerUser,
};
