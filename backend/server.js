import 'dotenv/config';
import express from "express";
import reportRouter from './routes/reportRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', reportRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});