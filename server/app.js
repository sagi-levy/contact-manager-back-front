const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/contacts");

const app = express();
app.use(cors());
app.use(morgan("dev"), express.json());
app.use("/", contactsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
