"use strict";

const mongoose = require("mongoose");

const connectString = "mongodb+srv://sanglm2207:78LpH1LHh3nHIGPo@cluster0.nvvppa2.mongodb.net/";

class Datebase {
    constructor() {
        this.connect();
    }

    // connect to database
    connect(type = "mongodb") {
        if (1 === 1) {
            mongoose.set("debug", true);
            mongoose.set("debug", {color: true});
        }

        mongoose
            .connect(connectString, {
                maxPoolSize: 100,
            })
            .then((_) => {
                console.log("Connected to MongoDB");
            })
            .catch((err) => {
                console.log("Error connecting to MongoDB", err);
        });
    }

    static getInstance() {
        if (!Datebase.instance) {
            Datebase.instance = new Datebase();
        }
        return Datebase.instance;
    }
}

const instanceMongodb = Datebase.getInstance(); 
module.exports = instanceMongodb;