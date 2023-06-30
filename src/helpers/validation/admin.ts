import * as Yup from 'yup';

const adminLoginSchema = Yup.object().shape({
  username: Yup.string().min(5).required('user name required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters long'),
});

export default adminLoginSchema;
