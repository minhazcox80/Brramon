const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParse = require('body-parser');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());



app.get('/api/customers',(req, res)=>{
  const customers = [
    {id: 1, firstName:'Minhaz', lastName:'Uddin'},
    {id: 2, firstName:'Sabbir', lastName:'Ahmed'},
    {id: 3, firstName:'Jamal', lastName:'Uddin'},
    {id: 4, firstName:'Kamal', lastName:'Uddin'},
    {id: 5, firstName:'Sazij', lastName:'Mozumdar'}
  ];
  res.json(customers);
});

const port = 4000;
app.listen(port, () => console.log(`SERVER is RUNNING ON PORT ${port}`));

