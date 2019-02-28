const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/persons', require('./routes/crud.routes'))

app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});