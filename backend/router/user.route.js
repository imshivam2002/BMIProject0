// import express from "express";
// const router = express.Router();
// import { signupUser , signinUser } from "../controller/User.controller.js";
// import authMiddleware from "../middleware/auth.js";

// router.post("/signup", signupUser);
// router.post('/signin',authMiddleware, signinUser);

// export default router



import express from "express";
import { signUpAction, signInAction, verifyAccount } from "../controller/User.controller.js";
import { body } from "express-validator";
const router = express.Router();

// http://localhost:3000/user/sign-up
router.post("/signup",
    body("email","email id is required").notEmpty(),
    body("email","invalid email id").isEmail(),signUpAction);
router.post("/sign-in",signInAction);
router.post("/verify",verifyAccount);
export default router;