/* eslint-disable @typescript-eslint/no-unused-vars */

// password: 12345678
// rounds = 12

const Users = [
  {

    fullName: 'yasser Amro',
    email: 'yasser@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '05988822228',
    role: 'client',
    isActive: true,
  },
  {

    fullName: 'ali Ahmed',
    email: 'ali@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '0598877228',
    role: 'therapist',
    isActive: false,
  },
  {

    fullName: 'Mohammed Alaaa',
    email: 'Mohammed@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '05988855228',
    role: 'client',
    isActive: true,
  },
  {

    fullName: 'Ahmed Al-hesssen',
    email: 'Ahmed@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '05922225228',
    role: 'client',
    isActive: true,
  },
  {

    fullName: 'wassem Al-eeee',
    email: 'wassem@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {

    fullName: 'wassem Al-eeee',
    email: 'wassem5555@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {

    fullName: 'aya Al-eeee',
    email: 'aya@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '05922005228',
    role: 'therapist',
    isActive: true,
  },
  {

    fullName: 'Waleed Al-Yass',
    email: 'Waleedaaa@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '05922555228',
    role: 'therapist',
    isActive: true,
  },
  {

    fullName: 'Mohammmed Al-Agha ',
    email: 'mo.alagha@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '0591234567',
    role: 'client',
    isActive: true,
  },
  {

    fullName: 'foad Abu-Swada',
    email: 'foad@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '05912121212',
    role: 'client',
    isActive: false,
  },
  {

    fullName: 'Ahmed Al-hesssen',
    email: 'wassemaaa@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {

    fullName: 'wassem Al-eeee',
    email: 'wassemsmk@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {

    fullName: 'Abd Abu-Swada',
    email: 'Abdsqsq@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '05911110422',
    role: 'client',
    isActive: false,
  },
  {

    fullName: 'Ahmed izz Al-deen',
    email: 'ahmedizz@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '0591231231',
    role: 'client',
    isActive: true,
  },
  {

    fullName: 'Mohammed al shawwa',
    email: 'moshawwa@gmail.com',
    password: '$2a$12$41IN/lwDh2kzQZ.3xyc7rOq4A9EoxyZFYpb/x3Km7//6p/ap6tLUK',
    phoneNumber: '0592146028',
    role: 'client',
    isActive: true,
  },
];

const Admins = [
  {
    username: 'admin',
    password: '$2a$12$.4gCFbhK7VUUAED3n8GKsOZy/1qyNdi3Fhjm7frapQaxbzRyWzvBa',
  },
];
const Therapists = [
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Mental Health Counselor',
    bio: "A counselor with a master's degree and several years of supervised clinical work experience. Trained to diagnose and provide individual and group counseling. ",
    hourlyRate: 10,
    userId: 2,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Licensed Professional Counselor',
    bio: " A counselor with a master's degree in psychology, counseling or a related field. Trained to diagnose and provide individual and group counseling ",
    hourlyRate: 20,
    userId: 5,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Nurse Psychotherapist ',
    bio: ' registered nurse who is trained in the practice of psychiatric and mental health nursing. Trained to diagnose and provide individual and group counseling. ',
    hourlyRate: 30,
    userId: 6,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Marital and Family Therapist ',
    bio: " counselor with a master's degree, with special education and training in marital and family therapy. Trained to diagnose and provide individual and group counseling.  ",
    hourlyRate: 40,
    userId: 7,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Pastoral Counselor  ',
    bio: ' clergy with training in clinical pastoral education. Trained to diagnose and provide individual and group counseling.   ',
    hourlyRate: 50,
    userId: 8,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Clinical Social Worker  ',
    bio: "  A counselor with a master's degree in social work from an accredited graduate program. Trained to make diagnoses A counselor with a master's degree in social work from an accredited graduate program. Trained to make diagnoses,   ",
    hourlyRate: 60,
    userId: 11,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Pastoral Counselor  ',
    bio: ' clergy with training in clinical pastoral education. Trained to diagnose and provide individual and group counseling.   ',
    hourlyRate: 70,
    userId: 12,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Psychiatrist  ',
    bio: ' A medical doctor with special training in the diagnosis and treatment of mental and emotional illnesses.  A psychiatrist can prescribe medication, but they often do not counsel patients.   ',
    hourlyRate: 71,
    userId: 8,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Psychiatric or Mental Health Nurse Practitioner  ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 71,
    userId: 9,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Clinical Psychologist  ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 69,
    userId: 10,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Nurse Psychotherapist ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 68,
    userId: 11,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Psychiatrist ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 65,
    userId: 12,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Mental Health Counselor ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 65,
    userId: 13,
  },
  {
    cvLink:
      'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg:
      'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Mental Health Counselor ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 85,
    userId: 14,
  },
];

const Appointments = [
  {
    therapistId: 1,
    datetime: new Date('2023-06-18T12:00:00'),
    isBooked: true,
    isAvailable: true,
  },
  {
    therapistId: 1,
    datetime: new Date('2023-06-18T12:30:00'),
    isBooked: true,
    isAvailable: true,
  },
  {
    therapistId: 1,
    datetime: new Date('2023-06-18T13:00:00'),
    isBooked: true,
    isAvailable: true,
  },
  {
    therapistId: 1,
    datetime: new Date('2023-06-18T14:00:00'),
    isBooked: true,
    isAvailable: true,
  },
  {
    therapistId: 1,
    datetime: new Date('2023-06-18T15:00:00'),
    isBooked: true,
    isAvailable: true,
  },
  {
    therapistId: 2,
    datetime: new Date('2023-06-18T12:00:00'),
    isBooked: true,
    isAvailable: true,
  },
  {
    therapistId: 2,
    datetime: new Date('2023-06-18T12:30:00'),
    isBooked: false,
    isAvailable: true,
  },
  {
    therapistId: 2,
    datetime: new Date('2023-06-18T13:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {
    therapistId: 2,
    datetime: new Date('2023-06-18T14:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 2,
    datetime: new Date('2023-06-18T15:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 3,
    datetime: new Date('2023-06-18T11:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 3,
    datetime: new Date('2023-06-18T12:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 3,
    datetime: new Date('2023-06-18T13:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 3,
    datetime: new Date('2023-06-18T14:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 3,
    datetime: new Date('2023-06-18T15:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 4,
    datetime: new Date('2023-06-18T11:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 4,
    datetime: new Date('2023-06-18T12:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 4,
    datetime: new Date('2023-06-18T13:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 4,
    datetime: new Date('2023-06-18T14:00:00'),
    isBooked: false,
    isAvailable: true,
  },
  {

    therapistId: 4,
    datetime: new Date('2023-06-18T15:00:00'),
    isBooked: false,
    isAvailable: true,
  },
];

const Sessions = [
  {
    appointmentId: 1,
    userId: 1,
  },
  {
    appointmentId: 2,
    userId: 3,
  },
  {
    appointmentId: 3,
    userId: 3,
  },
  {
    appointmentId: 4,
    userId: 3,
  },
  {
    appointmentId: 5,
    userId: 4,
  },
  {
    appointmentId: 6,
    userId: 4,
  },
];

export {
  Users, Therapists, Appointments, Sessions, Admins,
};
