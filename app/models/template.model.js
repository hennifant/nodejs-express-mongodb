module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    title: String,
    description: String,
    published: Boolean,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Template = mongoose.model("template", schema);

  return Template;
};
