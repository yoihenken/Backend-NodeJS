const auth = require("./auth.controller");

const router = require("express").Router();
const authRouter = require("express").Router();

router.post("/register", auth.register);
//router.post("/login", auth.register);

authRouter.use("/auth", router);

module.exports = authRouter;