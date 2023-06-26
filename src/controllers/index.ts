import { findTherapistById, getAllTherapists, updateTherapistProfile } from './therapists';
import { getAppointments, updateAvailable, addAppointment } from './appointment';
import login from './auth';
import createSessionController from './session';
import findClientSecret from './payment';
import adminLogin from './admin';

export {
  findTherapistById, getAllTherapists, updateTherapistProfile, getAppointments, updateAvailable,
  addAppointment, findClientSecret, createSessionController,
  login, adminLogin,
};
