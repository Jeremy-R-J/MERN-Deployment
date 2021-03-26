const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to the database is being made!"))
    .catch(err => console.log("You went wrong somewhere connecting to the database", err));
