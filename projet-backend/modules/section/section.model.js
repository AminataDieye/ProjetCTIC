(function() {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;
    var userSchema = new Schema({
      id: { type: Integer, required: true },
      titre: { type: String, required: true },
      description: { type: String, required: true }

    });
  
    module.exports = {
      userModel: mongoose.model("Section", sectionSchema)
    };
  })();
  