const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  data: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot",
  },
  // name: String, aqui vai adicionando os dados que queremos ,
  //       String caracteres, Number Numeros, Boolean True ou False, entre outros
  // age: Number,
  // active: Boolean,
});

module.exports = mongoose.model("Booking", BookingSchema);
