import express, { Router } from 'express';
import therapists from './therapists';

const app = express();

app.use(Router);

export default therapists;
