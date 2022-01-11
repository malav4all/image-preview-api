const ImageModel = require("../db/model/imageModel");
const imageSerives = {
   async addImage(ImageObject){
        const promise = await ImageModel.create(ImageObject);
        return promise
    },
    async fetchAllImages(){
        const promise = await ImageModel.find()
        return promise
    }
}
module.exports = imageSerives;