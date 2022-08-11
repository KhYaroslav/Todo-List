require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const path = require('path')

const authUser = require("./middleware/middleware");
const toDoRouter = require("./routes/todoRouter");
const apiRouter = require("./routes/apiRouter");

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(cors({
  credentials: true,
  origin: true,
}));


const sessionConfig = {
  name: process.env.SESSION_NAME ?? "yeah",
  secret: process.env.SESSION_SECRET ?? "test",
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(authUser);

app.use("/todo", toDoRouter);
app.use("/api/v1", apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });

app.listen(PORT, () => {
  console.log(`App has started on port ${PORT}`);
});
