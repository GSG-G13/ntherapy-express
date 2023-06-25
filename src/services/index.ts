import { getTherapistById, getAllTherapist, updateTherapist } from './therapists';
import {
  getAppointmentsPerDateService, getAppointmentById, updateIsAvailable,
  addAppointment,
} from './appointment';
import bookAppointment from './session';

export {
  getTherapistById, getAllTherapist, getAppointmentsPerDateService, getAppointmentById
  , updateIsAvailable, addAppointment, updateTherapist, bookAppointment,
};
