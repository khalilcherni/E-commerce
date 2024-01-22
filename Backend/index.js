const express = require('express');
const cors=require('cors')
const PORT = 3000;

const app = express();

const IphonesRoute= require('./routes/Iphones')


app.use(express.static(__dirname + '/../client/dist'));
app.use(cors())
app.use(express.json());


app.use('/api', IphonesRoute);
app.get('/api', (req, res) => {
  res.send('Hello from the server!');
})


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
