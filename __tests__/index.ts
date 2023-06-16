
import connection from '../src/db/connection'
import buildb from '../src/db/build'

import therapistTest from './therapist';
import appointmentRouteTest from './appointment';
beforeAll(buildb);
afterAll(() => connection.close())

describe('Therapist Route', therapistTest);
describe('Appointment Route', appointmentRouteTest)

