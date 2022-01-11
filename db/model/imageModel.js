/**
 * Maintain User Schema
 * @author Malav Naagar
 * @copyright ABC
 * @version 1.0 
 * @summary User Schema File
 */


 const connection  = require('../connect');
 const {Schema} = require('mongoose');
 const ImageSchema = new Schema({
     proImage:{type:Schema.Types.String},
 },{timestamps:true});
 
 const ImageModel = connection.model('allImages',ImageSchema);
 module.exports = ImageModel;
 