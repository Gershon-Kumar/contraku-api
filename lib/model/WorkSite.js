const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSite = new Schema(
  {
    contrakuId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    siteLocation: {
      type: String,
      required: true,
    },
    siteLatitude: {
      type: String,
      required: true,
    },
    siteLongitude: {
      type: String,
      required: true,
    },
    workStartDate: {
      type: Date,
      required: true,
    },
    workEndDate: {
      type: Date,
      required: true,
    },
    siteImageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WorkSite", WorkRequestSchema);
