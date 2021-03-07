import app from "./app";

const dotenv = require('dotenv')

dotenv.config();
const PORT = process.env.PORT || 8000;



app.listen(PORT, () => console.log(`push notif service listening on port ${PORT}!`))