const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const redirect = require('./utilities/redirect');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const DIST = path.join(__dirname, 'public');

app.use(compression());
if (process.env.NODE_ENV === 'production') {
    app.use(redirect);
}
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(DIST));

app.listen(PORT, () => { console.log('Server listening on port: ' + PORT) });