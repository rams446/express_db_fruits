const {Schema, model} = require("mongoose")
 const vegetableSchema= new Schema({
      name: {type:"string", required :"true" },
      color:{type:"string", required: "true"}
 });

 const Vegetable= model('Vegetable', vegetableSchema)

 module.exports = Vegetable;