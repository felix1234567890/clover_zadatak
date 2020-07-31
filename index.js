const express = require("express");

const app = express();

app.use("/tracks", require("./routes/trackRoutes"));

app.use((err, req, res, next) => {
  const { name, message, statusCode } = err;
  res.status(statusCode || 500).json({
    message,
    status: statusCode || 500,
  });
});

app.listen(3000);
