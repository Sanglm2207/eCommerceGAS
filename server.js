const app = require("./src/app");

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});

process.on('SIGINT', (err, promise) => {
    server.close(() => console.log("Exit server express!")); 
    // notify.send("Server is down");
});