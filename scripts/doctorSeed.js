const mongoose = require('mongoose');
const db = require('../models');
const passwordHash = require('password-hash');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vetclinic';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const doctorsSeed = [{
  name: 'doctor name',
  phone: '949-123-1234',
  mobilePhone: '949-123-4567',
  email: 'doctor@doctor.com',
  doctorCreated: Date.now()
},
{
  name: 'Bob Joe',
  phone: '949-876-8755',
  mobilePhone: '714-123-4567',
  email: 'armando@pensadotech.com',
  doctorCreated: Date.now()
}
];

db.Doctor
  .remove({})
  .then(() => db.Doctor.collection.insertMany(doctorsSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
