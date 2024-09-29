import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev'
dotenv.config({ path: envFile })

import app from "./config/express";
import constants from "./config/constants";
const { PORT, ENVIRONMENT } = constants;

app.listen(PORT, () => console.log(`Server listning on http://localhost:${PORT} ${ENVIRONMENT}`))
