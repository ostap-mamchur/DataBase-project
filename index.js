const db = require("./db");
const express = require("express");
const hiringMeeting = require("./routes/hiringMeeting-router");
const hiringFestival = require("./routes/hiringFestival-router");
const donation = require("./routes/donation-router");
const holiday = require("./routes/holiday-router");
const client = require("./routes/client-router");
const hiredFriend = require("./routes/hiredFriend-router");
const meeting = require("./routes/meeting-router");

const app = express();

const PORT = process.env.APP_PORT || 8080;

app.use(express.json());

app.use("/hiring-meetings", hiringMeeting);
app.use("/hiring-festivals", hiringFestival);
app.use("/donations", donation);
app.use("/holidays", holiday);
app.use("/clients", client);
app.use("/hired-friends", hiredFriend);
app.use("/meetings", meeting);

db.sync()
  .then(() => {
    console.log("DB established");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
