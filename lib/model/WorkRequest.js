const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkRequestSchema = new Schema(
  {
    contrakuId: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    employeeId: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    workSiteId: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "WorkSite",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WorkRequest", WorkRequestSchema);
