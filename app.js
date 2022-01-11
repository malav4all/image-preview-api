
// const express = require('express');
// const upload = require('express-fileupload');
// const {exec} = require('child_process');
// const path = require('path');
// const app = express();
// app.use(upload());
// app.use('/upload',require("./"));



// app.listen(9000,()=>{
//     console.log('Server Started....')
// });



const express = require("express")
const app = express()
// const upload = require('express-fileupload');
const cors = require("cors")
const multer = require("multer")
// app.use(multer())
app.use(express.static("upload"))
app.use(cors())
// app.use(upload())
app.use(express.json())
// app.use(upload({
//     createParentPath:true,
//     parseNested:true
// }));

app.use("/",require("./routes/imgae"))
const server = app.listen(5000,()=>{
    console.log("server started",server.address().family)
})