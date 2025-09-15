import express from "express"
import userRoute from "./routes/userRoute.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Backend running")
})

app.use('/api',userRoute)

app.listen(PORT,()=>{
    console.log(`Server listening on PORT no ${PORT}`)
})