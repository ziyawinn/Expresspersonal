const express = require("express")
const app= express()

app.listen(8000,function(){
    console.log('8000')

})
app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")


})
app.use(express.static("public"))