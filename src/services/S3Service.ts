import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import {
  getSignedUrl,
} from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';
import { promisify } from 'util';
import config from '../config';

const randomBytes = promisify(crypto.randomBytes);

const region = config.REGION as string;
const bucketName = config.BUCKET_NAME as string;

const createPresignedUrl = async (key?:string) => {
  const generatedKey = (!key) ? (await randomBytes(16)).toString('hex') : key;

  const client = new S3Client({
    region,
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  const command = new PutObjectCommand({ Bucket: bucketName, Key: generatedKey });
  return getSignedUrl(client, command, { expiresIn: 60 });
};

createPresignedUrl('13e5effa4e3ac6c386490413185b7286').then((url) => console.log(url));

export default createPresignedUrl;
