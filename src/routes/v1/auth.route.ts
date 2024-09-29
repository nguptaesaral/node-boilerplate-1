import { Router } from "express";
import { asyncHandler, validate } from "../../middlewares/helper.middleware";
import { loginSchema, userRegistrationSchema } from "../../validations/user.validation";
import { login, register } from "../../controllers/auth.controller";

const router = Router();

router.post('/register', validate(userRegistrationSchema), asyncHandler(register));
router.post('/login', validate(loginSchema), asyncHandler(login));



export default router;