const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
  
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
      type: String,
      required: true,
      trim: true
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },

    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);



ThoughtSchema.virtual('reactionCount').get(function() {
  return this.replies.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
