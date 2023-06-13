// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Users = [
  {
    id: 1,
    full_name: 'yasser Amro',
    email: 'yasser@gmail.com',
    phone_number: '05988822228',
    role: 'user',
    is_active: false,
  },
  {
    id: 2,
    full_name: 'ali Ahmed',
    email: 'ali@gmail.com',
    phone_number: '0598877228',
    role: 'therapist',
    is_active: false,
  },
  {
    id: 3,
    full_name: 'Mohammed Alaaa',
    email: 'Mohammed@gmail.com',
    phone_number: '05988855228',
    role: 'user',
    is_active: true,
  },
  {
    id: 4,
    full_name: 'Ahmed Al-hesssen',
    email: 'Ahmed@gmail.com',
    phone_number: '05922225228',
    role: 'user',
    is_active: true,
  },
  {
    id: 5,
    full_name: 'wassem Al-eeee',
    email: 'wassem@gmail.com',
    phone_number: '059223125228',
    role: 'therapist',
    is_active: true,
  },
  {
    id: 6,
    full_name: 'wassem Al-eeee',
    email: 'wassem@gmail.com',
    phone_number: '059223125228',
    role: 'therapist',
    is_active: true,
  },
  {
    id: 7,
    full_name: 'aya Al-eeee',
    email: 'aya@gmail.com',
    phone_number: '05922005228',
    role: 'therapist',
    is_active: true,
  },
  {
    id: 8,
    full_name: 'Waleed Al-Yass',
    email: 'Waleed@gmail.com',
    phone_number: '05922555228',
    role: 'therapist',
    is_active: true,
  },
  {
    id: 9,
    full_name: 'Mohammmed Al-Agha ',
    email: 'mo.alagha@gmail.com',
    phone_number: '0591234567',
    role: 'user',
    is_active: true,
  },
  {
    id: 10,
    full_name: 'foad Abu-Swada',
    email: 'foad@gmail.com',
    phone_number: '05912121212',
    role: 'user',
    is_active: false,
  },
  {
    id: 11,
    full_name: 'Ahmed Al-hesssen',
    email: 'wassem@gmail.com',
    phone_number: '059223125228',
    role: 'therapist',
    is_active: true,
  },
  {
    id: 12,
    full_name: 'wassem Al-eeee',
    email: 'wassem@gmail.com',
    phone_number: '059223125228',
    role: 'therapist',
    is_active: true,
  },
  {
    id: 13,
    full_name: 'Abd Abu-Swada',
    email: 'Abd@gmail.com',
    phone_number: '05911110422',
    role: 'user',
    is_active: false,
  },
  {
    id: 14,
    full_name: 'Ahmed izz Al-deen',
    email: 'ahmedizz@gmail.com',
    phone_number: '0591231231',
    role: 'user',
    is_active: true,
  },
  {
    id: 15,
    full_name: 'Mohammed al shawwa',
    email: 'moshawwa@gmail.com',
    phone_number: '0592146028',
    role: 'user',
    is_active: true,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Therapists = [
  {
    id: 1,
    cv_path: 's3://bucket-name/cv_12132132454516.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Mental Health Counselor',
    bio: "A counselor with a master's degree and several years of supervised clinical work experience. Trained to diagnose and provide individual and group counseling. ",
    hourly_rate: 10,
    user_id: 1,
  },
  {
    id: 2,
    cv_path: 's3://bucket-name/cv_11111111111111.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Licensed Professional Counselor',
    bio: " A counselor with a master's degree in psychology, counseling or a related field. Trained to diagnose and provide individual and group counseling ",
    hourly_rate: 20,
    user_id: 2,
  },
  {
    id: 3,
    cv_path: 's3://bucket-name/cv_222222222222.pdf',
    img: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Nurse Psychotherapist ',
    bio: ' registered nurse who is trained in the practice of psychiatric and mental health nursing. Trained to diagnose and provide individual and group counseling. ',
    hourly_rate: 30,
    user_id: 3,
  },
  {
    id: 4,
    cv_path: 's3://bucket-name/cv_33333333333333.pdf',
    img: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Marital and Family Therapist ',
    bio: " counselor with a master's degree, with special education and training in marital and family therapy. Trained to diagnose and provide individual and group counseling.  ",
    hourly_rate: 40,
    user_id: 4,
  },
  {
    id: 5,
    cv_path: 's3://bucket-name/cv_455555555555.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Pastoral Counselor  ',
    bio: ' clergy with training in clinical pastoral education. Trained to diagnose and provide individual and group counseling.   ',
    hourly_rate: 50,
    user_id: 5,
  },
  {
    id: 6,
    cv_path: 's3://bucket-name/cv_4666666666666.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Clinical Social Worker  ',
    bio: "  A counselor with a master's degree in social work from an accredited graduate program. Trained to make diagnoses A counselor with a master's degree in social work from an accredited graduate program. Trained to make diagnoses,   ",
    hourly_rate: 60,
    user_id: 6,
  },
  {
    id: 7,
    cv_path: 's3://bucket-name/cv_4555557777555.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Pastoral Counselor  ',
    bio: ' clergy with training in clinical pastoral education. Trained to diagnose and provide individual and group counseling.   ',
    hourly_rate: 70,
    user_id: 7,
  },
  {
    id: 8,
    cv_path: 's3://bucket-name/cv_452323227777555.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Psychiatrist  ',
    bio: ' A medical doctor with special training in the diagnosis and treatment of mental and emotional illnesses.  A psychiatrist can prescribe medication, but they often do not counsel patients.   ',
    hourly_rate: 71,
    user_id: 8,
  },
  {
    id: 9,
    cv_path: 's3://bucket-name/cv_45232323423423555.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Psychiatric or Mental Health Nurse Practitioner  ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourly_rate: 71,
    user_id: 9,
  },
  {
    id: 10,
    cv_path: 's3://bucket-name/cv_45232323423423222.pdf',
    img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    major: 'Clinical Psychologist  ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourly_rate: 69,
    user_id: 10,
  },
  {
    id: 11,
    cv_path: 's3://bucket-name/cv_4544111111123222.pdf',
    img: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Nurse Psychotherapist ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourly_rate: 68,
    user_id: 11,
  },
  {
    id: 12,
    cv_path: 's3://bucket-name/cv_454446666664234232.pdf',
    img: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    major: 'Psychiatrist ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourly_rate: 65,
    user_id: 12,
  },
  {
    id: 13,
    cv_path: 's3://bucket-name/cv_454446666664234232.pdf',
    img: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    major: 'Mental Health Counselor ',
    bio: ' A registered nurse practitioner with a graduate degree and specialized training in the diagnosis and treatment of mental and emotional illness.    ',
    hourly_rate: 65,
    user_id: 13,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Availability = [
  {
    id: 1,
    therapist_id: 1,
    datetime: '6/2/2023 11:00',
    isbooked: 'false',
  },
  {
    id: 2,
    therapist_id: 1,
    datetime: '6/2/2023 12:00',
    isbooked: 'false',
  },
  {
    id: 3,
    therapist_id: 1,
    datetime: '6/2/2023 13:00',
    isbooked: 'false',
  },
  {
    id: 4,
    therapist_id: 1,
    datetime: '6/2/2023 14:00',
    isbooked: 'false',
  },
  {
    id: 5,
    therapist_id: 1,
    datetime: '6/2/2023 15:00',
    isbooked: 'false',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sessions = [
  {
    id: 1,
    appointment_id: 1,
    user_id: 1,
  },
];
