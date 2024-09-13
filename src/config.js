// src/config.js

const dev = {
    API_URL: 'http://192.168.1.5:5000',
};

const prod = {
    API_URL: 'https://api.yourdomain.com',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default config;
