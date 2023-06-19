interface Payload {
  [key: string] : string | number | undefined
  fullName?: string;
  phoneNumber?: string;
  major?: string;
  bio?: string;
  cvLink?: string;
  hourlyRate?: number;
}

export default Payload;
