// server.js
import express from 'express';
import './config/db.js'; // This will set up the connection and bind it to Objection
import subscriptionsRouter from './routes/index.js';

const app = express();
app.use(express.json());

// Base route for subscription module
app.use('/subscriptions', subscriptionsRouter);

// Root ping
app.get('/', (req, res) => res.send('API is running'));

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
