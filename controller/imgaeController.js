const ImageService = require("../service/imagesService")
const Image = require("../dto/image")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'upload')
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+ "-" + file.originalname)
    }
})

const upload = multer({storage}).single('file')
const ImagesController = {
    addImage(req,res){
            upload(req,res,(err)=>{
                let imageName = req.file.filename
                // console.log(imageName)
                const name  = new Image(imageName)
                const promise = ImageService.addImage(name)
                promise.then((data)=>{
                    res.json({
                        message:"Image Upload Successfully"
                    })
                }).catch((err)=>{
                    console.log(err.message)
                })

                
            })
        },
        getAllImages(req,res){
            const promise = ImageService.fetchAllImages()
            promise.then((data)=>{
                res.send(data)
            }).catch((err)=>{
                console.log(err.message)
            })
        }   
    
}

module.exports = ImagesController