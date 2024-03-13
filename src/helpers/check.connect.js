"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECOND = 5000;

// check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCPU = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        // Example maxium number of connections based on CPU and memory
        const maxConnection = numCPU * 5;

        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage / 1014 / 1024} MB`);

        if (numConnection > maxConnection) {
            console.log("Connect overload!");
        }

    }, _SECOND); // monitor every 5 seconds
}


module.exports = checkOverload;