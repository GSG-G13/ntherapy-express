import { getTherapistById, getAllTherapist, updateTherapist } from './therapists';
import {
  getAppointmentsPerDateService, getAppointmentById, updateIsAvailable, addAppointment,
} from './appointment';
import loginByEmail from './auth';

export {
  getTherapistById, getAllTherapist, getAppointmentsPerDateService, getAppointmentById
  , updateIsAvailable, addAppointment, updateTherapist, loginByEmail,
};
