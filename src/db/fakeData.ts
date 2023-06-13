/* eslint-disable @typescript-eslint/no-unused-vars */

const Users = [
  {
    id: 1,
    fullName: 'yasser Amro',
    email: 'yasser@gmail.com',
    password: '12345678',
    phoneNumber: '05988822228',
    role: 'client',
    isActive: false,
  },
  {
    id: 2,
    fullName: 'ali Ahmed',
    email: 'ali@gmail.com',
    password: '12345678',
    phoneNumber: '0598877228',
    role: 'therapist',
    isActive: false,
  },
  {
    id: 3,
    fullName: 'Mohammed Alaaa',
    email: 'Mohammed@gmail.com',
    password: '12345678',
    phoneNumber: '05988855228',
    role: 'client',
    isActive: true,
  },
  {
    id: 4,
    fullName: 'Ahmed Al-hesssen',
    email: 'Ahmed@gmail.com',
    password: '12345678',
    phoneNumber: '05922225228',
    role: 'client',
    isActive: true,
  },
  {
    id: 5,
    fullName: 'wassem Al-eeee',
    email: 'wassem@gmail.com',
    password: '12345678',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {
    id: 6,
    fullName: 'wassem Al-eeee',
    email: 'wassem@gmail.com',
    password: '12345678',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {
    id: 7,
    fullName: 'aya Al-eeee',
    email: 'aya@gmail.com',
    password: '12345678',
    phoneNumber: '05922005228',
    role: 'therapist',
    isActive: true,
  },
  {
    id: 8,
    fullName: 'Waleed Al-Yass',
    email: 'Waleed@gmail.com',
    password: '12345678',
    phoneNumber: '05922555228',
    role: 'therapist',
    isActive: true,
  },
  {
    id: 9,
    fullName: 'Mohammmed Al-Agha ',
    email: 'mo.alagha@gmail.com',
    password: '12345678',
    phoneNumber: '0591234567',
    role: 'client',
    isActive: true,
  },
  {
    id: 10,
    fullName: 'foad Abu-Swada',
    email: 'foad@gmail.com',
    password: '12345678',
    phoneNumber: '05912121212',
    role: 'client',
    isActive: false,
  },
  {
    id: 11,
    fullName: 'Ahmed Al-hesssen',
    email: 'wassem@gmail.com',
    password: '12345678',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {
    id: 12,
    fullName: 'wassem Al-eeee',
    email: 'wassem@gmail.com',
    password: '12345678',
    phoneNumber: '059223125228',
    role: 'therapist',
    isActive: true,
  },
  {
    id: 13,
    fullName: 'Abd Abu-Swada',
    email: 'Abd@gmail.com',
    password: '12345678',
    phoneNumber: '05911110422',
    role: 'client',
    isActive: false,
  },
  {
    id: 14,
    fullName: 'Ahmed izz Al-deen',
    email: 'ahmedizz@gmail.com',
    password: '12345678',
    phoneNumber: '0591231231',
    role: 'client',
    isActive: true,
  },
  {
    id: 15,
    fullName: 'Mohammed al shawwa',
    email: 'moshawwa@gmail.com',
    password: '12345678',
    phoneNumber: '0592146028',
    role: 'client',
    isActive: true,
  },
];

const Admins = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
  },
];
const Therapists = [
  {
    id: 1,
    cvLink: 's3://bucket-name/cv_12132132454516.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Mental Health Counselor',
    bio: "A counselor with a master's degree and several years of supervised clinical work experience. Trained to diagnose and provide individual and group counseling. ",
    hourlyRate: 10,
    userId: 1,
  },
  {
    id: 2,
    cvLink: 's3://bucket-name/cv_11111111111111.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Licensed Professional Counselor',
    bio: " A counselor with a master's degree in psychology, counseling or a related field. Trained to diagnose and provide individual and group counseling ",
    hourlyRate: 20,
    userId: 2,
  },
  {
    id: 3,
    cvLink: 's3://bucket-name/cv_222222222222.pdf',
    profileImg: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Nurse Psychotherapist ',
    bio: ' registered nurse who is trained in the practice of psychiatric and mental health nursing. Trained to diagnose and provide individual and group counseling. ',
    hourlyRate: 30,
    userId: 3,
  },
  {
    id: 4,
    cvLink: 's3://bucket-name/cv_33333333333333.pdf',
    profileImg: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Marital and Family Therapist ',
    bio: " counselor with a master's degree, with special education and training in marital and family therapy. Trained to diagnose and provide individual and group counseling.  ",
    hourlyRate: 40,
    userId: 4,
  },
  {
    id: 5,
    cvLink: 's3://bucket-name/cv_455555555555.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Pastoral Counselor  ',
    bio: ' clergy with training in clinical pastoral education. Trained to diagnose and provide individual and group counseling.   ',
    hourlyRate: 50,
    userId: 5,
  },
  {
    id: 6,
    cvLink: 's3://bucket-name/cv_4666666666666.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Clinical Social Worker  ',
    bio: "  A counselor with a master's degree in social work from an accredited graduate program. Trained to make diagnoses A counselor with a master's degree in social work from an accredited graduate program. Trained to make diagnoses,   ",
    hourlyRate: 60,
    userId: 6,
  },
  {
    id: 7,
    cvLink: 's3://bucket-name/cv_4555557777555.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Pastoral Counselor  ',
    bio: ' clergy with training in clinical pastoral education. Trained to diagnose and provide individual and group counseling.   ',
    hourlyRate: 70,
    userId: 7,
  },
  {
    id: 8,
    cvLink: 's3://bucket-name/cv_452323227777555.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Psychiatrist  ',
    bio: ' A medical doctor with special training in the diagnosis and treatment of mental and emotional illnesses.  A psychiatrist can prescribe medication, but they often do not counsel patients.   ',
    hourlyRate: 71,
    userId: 8,
  },
  {
    id: 9,
    cvLink: 's3://bucket-name/cv_45232323423423555.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Psychiatric or Mental Health Nurse Practitioner  ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 71,
    userId: 9,
  },
  {
    id: 10,
    cvLink: 's3://bucket-name/cv_45232323423423222.pdf',
    profileImg: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Clinical Psychologist  ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 69,
    userId: 10,
  },
  {
    id: 11,
    cvLink: 'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Nurse Psychotherapist ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 68,
    userId: 11,
  },
  {
    id: 12,
    cvLink: 'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Psychiatrist ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 65,
    userId: 12,
  },
  {
    id: 13,
    cvLink: 'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Mental Health Counselor ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 65,
    userId: 13,
  },
  {
    id: 14,
    cvLink: 'https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing',
    profileImg: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Mental Health Counselor ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourlyRate: 85,
    userId: 14,
  },
];

const appointments = [
  {
    id: 1,
    therapist_id: 1,
    datetime: '6/2/2023 11:00',
    isBooked: 'false',
    isAvailable: 'true',
  },
  {
    id: 2,
    therapist_id: 1,
    datetime: '6/2/2023 12:00',
    isBooked: 'false',
    isAvailable: 'true',
  },
  {
    id: 3,
    therapist_id: 1,
    datetime: '6/2/2023 13:00',
    isBooked: 'false',
    isAvailable: 'true',
  },
  {
    id: 4,
    therapist_id: 1,
    datetime: '6/2/2023 14:00',
    isBooked: 'false',
    isAvailable: 'true',
  },
  {
    id: 5,
    therapist_id: 1,
    datetime: '6/2/2023 15:00',
    isBooked: 'false',
    isAvailable: 'true',
  },
];

const Sessions = [
  {
    id: 1,
    appointment_id: 1,
    userId: 1,
  },
  {
    id: 2,
    appointment_id: 2,
    userId: 2,
  },
  {
    id: 3,
    appointment_id: 3,
    userId: 3,
  },
  {
    id: 4,
    appointment_id: 4,
    userId: 4,
  },

];