const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const config = require("config");


const userRoutes = require('./routes/userRoutes');
const contestRoutes = require('./routes/contestRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const userRequestRoutes = require('./routes/userRequestRoutes');
const adminRoutes = require('./routes/adminRoutes');
const auth = require('./routes/auth');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 3010;
// CPCMS_jwtPrivateKey=process.env.CPCMS_jwtPrivateKey

// if(!config.get('jwtPrivateKey')){
//   console.error("Fatal error: jwtPrivateKey is not defined!");
//   process.exit(1);
// }

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admins', adminRoutes);
app.use('/api/v1/auth', auth);
app.use('/api/v1/contests', contestRoutes);
app.use('/api/v1/announcements', announcementRoutes);
app.use('/api/v1/userRequests', userRequestRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Backend!');
});
app.all('*', (req, res) => {
  res.status(404).send({ message: 'API not found.' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});