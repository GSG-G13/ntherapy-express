import * as yup from 'yup';

const therapistInfoSchema = yup.object().noUnknown().shape({
  fullName: yup.string().min(10).optional(),
  phoneNumber: yup.string().min(8).optional(),
  major: yup.string().min(30).max(100).optional(),
  bio: yup.string().min(100).max(300).optional(),
  cvLink: yup.string().min(30).max(200).optional(),
  hourlyRate: yup.number().optional(),
});

export default therapistInfoSchema;
