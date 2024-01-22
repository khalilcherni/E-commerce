const express = require('express');
const cors = require('cors');
const IphonesRoute = require('./routes/iphones');
const Garoute = require('./routes/galaxy');
const opporoutes=require('./routes/oppo')
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(express.json());

// Use the routers correctly
app.use('/api/iphones', IphonesRoute);
app.use('/api/galaxy', Garoute);
app.use('/api/oppo', opporoutes);

app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

// Your database connection code goes here

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
