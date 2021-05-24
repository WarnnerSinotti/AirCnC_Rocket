const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  // name: String, aqui vai adicionando os dados que queremos ,
  //       String caracteres, Number Numeros, Boolean True ou False, entre outros
  // age: Number,
  // active: Boolean,
});

module.exports = mongoose.model("Spot", SpotSchema);
