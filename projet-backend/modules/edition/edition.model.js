(function() {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;
    var userSchema = new Schema({
      date: { type: date, required: true },
      numero: { type: String, required: true },
      tab: { type: Array, required: true },
        sections: { type: [Schema.Types.ObjectId], default: []}
    });
  
    module.exports = {
      userModel: mongoose.model("Edition", editionSchema)
    };
  })();
  