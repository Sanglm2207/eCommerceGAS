"use strict";

const development = {
    app: {
        port: process.env.PORT
    },
    db: {
        connectURI: process.env.MONGO_URI
    }
};


const staging = {
    app: {
        port: process.env.PORT
    },
    db: {
        connectURI: process.env.MONGO_URI
    }
};

const production = {
    app: {
        port: process.env.PORT
    },
    db: {
        connectURI: process.env.MONGO_URI
    }
};

const config = { development, staging, production };
const env = process.env.NODE_ENV;
module.exports = config[env];