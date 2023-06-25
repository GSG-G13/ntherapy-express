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

const createPresignedUrl = async () => {
  const rawBytes = await randomBytes(16);
  const key = rawBytes.toString('hex');
  const client = new S3Client({
    region,
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY as string,
    },
  });
  const command = new PutObjectCommand({ Bucket: bucketName, Key: key });
  return getSignedUrl(client, command, { expiresIn: 60 });
};

export default createPresignedUrl;
