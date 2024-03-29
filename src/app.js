const express = require("express");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/error.controller");

const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const sanitizer = require("perfect-express-sanitizer");

const userRouter = require("./routes/user.routes");
const roleRouter = require("./routes/rol.routes");
const permissionRouter = require("./routes/permiso.routes");
const rolePermissionRouter = require("./routes/rolPermiso.routes");

const app = express();

// Set security HTTP headers
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100000,
  windowMs: 60 * 60 * 1000,

  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api/v1", limiter);

// Body parser, reading data from body into req.body
app.use(express.json());

// Data sanitization against NoSQL query injection
app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Prevent parameter pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/roles", roleRouter);
app.use("/api/v1/permissions", permissionRouter);
app.use("/api/v1/roles-permissions", rolePermissionRouter);
// Error handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

module.exports = app;
