const db = require("./db");
const express = require("express");
const hiringMeeting = require("./routes/hiringMeeting-router");
const hiringFestival = require("./routes/hiringFestival-router");
const donation = require("./routes/donation-router");
const holiday = require("./routes/holiday-router");

const app = express();

app.use(express.json());

app.use("/hiring-meetings", hiringMeeting);
app.use("/hiring-festivals", hiringFestival);
app.use("/donations", donation);
app.use("/holidays", holiday);

db.sync({ force: true })
    .then(() => {
        console.log("DB established");
    })
    .catch((err) => console.log(err));

app.listen(8080, () => {
    console.log("Server is running at 8080");
});
