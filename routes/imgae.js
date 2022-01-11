const express = require("express")
const ImagesController = require("../controller/imgaeController")
const routes = express.Router()
// const ImageController = require("../controller/imgaeController")
routes.post("/upload",ImagesController.addImage)
routes.get("/getallimages",ImagesController.getAllImages)

module.exports = routes