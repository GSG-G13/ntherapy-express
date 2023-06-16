import buildDB from "../src/db/build";
import dbConnection from "../src/db/connection";
import therapistTest from './therapist';


beforeAll(buildDB);
afterAll(() => dbConnection.close());

describe('Therapist Route', therapistTest);

