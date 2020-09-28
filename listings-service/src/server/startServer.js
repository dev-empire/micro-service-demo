import cors from 'cors';
import express from 'express';

import accessEnv from '../helpers/accessEnv';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: (origin, cb) => cd(null, true),
    credential: true,
  })
);

app.listen(7100, () =>
  console.log('listings services listening on port 7100')
);