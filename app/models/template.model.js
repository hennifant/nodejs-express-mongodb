module.exports = (mongoose) => {
  const Template = mongoose.model(
    "template",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
    )
  );

  return Template;
};
