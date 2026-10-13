// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const { message, statusCode } = err;
  res.status(statusCode || 500).json({
    message,
    status: statusCode || 500,
  });
};

export default errorHandler;
