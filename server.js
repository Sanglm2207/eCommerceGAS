const app = require("./src/app");

const server = app.listen(1999, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});

process.on('SIGINT', (err, promise) => {
    server.close(() => console.log("Exit server express!")); 
    // notify.send("Server is down");
});