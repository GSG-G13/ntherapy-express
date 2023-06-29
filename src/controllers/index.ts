import { findTherapistById, getAllTherapists, updateTherapistProfile } from './therapists';
import { getAppointments, updateAvailable, addAppointment } from './appointment';
import { login, getAuth } from './auth';
import createSessionController from './session';
import findClientSecret from './payment';

export {
  findTherapistById, getAllTherapists, updateTherapistProfile, getAppointments, updateAvailable,
  addAppointment, findClientSecret, createSessionController,
  login, getAuth,
};
