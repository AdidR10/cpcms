const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//const userRoutes = require('./routes/userRoutes');
const contestRoutes = require('./routes/contestRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
//const userRequestRoutes = require('./routes/userRequestRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(cors());


//app.use('/api/v1/users', userRoutes);
app.use('/api/v1/contests', contestRoutes);
app.use('/api/v1/announcements', announcementRoutes);
//app.use('/api/v1/userRequests', userRequestRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the Backend!');
});
app.all('*', (req, res) => {
  res.status(404).send({ message: 'API not found.' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});