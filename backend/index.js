const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const contact_usRoute = require('./routes/contact_usRoute')
const newsRoutes = require('./routes/newsRoutes')
const announcementRoute = require('./routes/announcementRoute');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Routes
app.use('/api/announcements', announcementRoute);
app.use('/api/contact', contact_usRoute);
app.use('/api/news', newsRoutes);






// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
