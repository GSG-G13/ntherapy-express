import { findTherapistById, getAllTherapists, updateTherapistProfile } from './therapists';
import { getAppointments, updateAvailable, addAppointment } from './appointment';
import createSessionController from './session';

export {
  findTherapistById, getAllTherapists, getAppointments, updateAvailable,
  addAppointment, updateTherapistProfile, createSessionController,
};
