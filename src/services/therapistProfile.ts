import therapist from '../models/therapist';

const getTherapistData = async (id: string) => {
  const therapistdata = await therapist.findByPk(id);
  const data = therapistdata?.toJSON();
  return data;
};

export default getTherapistData;
