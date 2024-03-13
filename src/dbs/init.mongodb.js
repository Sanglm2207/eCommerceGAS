"use strict";

const mongoose = require("mongoose");
const { db } = require("../configs/mongo");
const connectString = db.connectURI;

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