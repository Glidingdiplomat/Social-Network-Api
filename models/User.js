// This is importing the required dependencies from the mongoose library
const { Schema, model, Type } = require("mongoose");
// defines the user schema with the required fields and their data types
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // using a regular expression to validate email format
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-zA-Z0-0_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            v
          );
        },
      },
    },

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//this is defining a virtual property of the 'friendcount
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// This is suppose to create the user model from the userSchema
const User = model("User", userSchema);
// Exporting the user model
module.exports = User;
