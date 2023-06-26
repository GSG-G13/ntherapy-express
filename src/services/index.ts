import { getTherapistById, getAllTherapist, updateTherapist } from './therapists';
import {
  getAppointmentsPerDateService, getAppointmentById, updateIsAvailable,
  addAppointment,
} from './appointment';
import loginByEmail from './auth';
import getClientSecret from './payment';
import bookAppointment from './session';
import getAdmin from './admin';

export {
  getTherapistById, getAllTherapist, getAppointmentsPerDateService, getAppointmentById
  , updateIsAvailable, addAppointment, updateTherapist, getClientSecret, bookAppointment,
  loginByEmail, getAdmin,
};
