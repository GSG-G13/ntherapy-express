import * as yup from 'yup';
import moment from 'moment';

const getAppointmentSchema = yup.object({
  therapistId: yup.number().required(),
  date: yup.string().test({
    test: (value) => {
      if (moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD') === value) {
        return true;
      }
    },
  }),
});

export default getAppointmentSchema;
