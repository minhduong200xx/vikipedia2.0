const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortDesc: [
    {
      type: String,
      required: true,
    },
  ],
  images: [
    {
      src: { type: String, required: true },
      title: { type: String, required: true },
    },
  ],
  subtitle: [
    {
      key: { type: String, required: true },
      href: { type: String, required: true },
      title: { type: String, required: true },
    },
  ],
  paragraph: [
    {
      id: { type: String, required: true },
      segment: [
        {
          content: { type: String, required: true },
        },
      ],
    },
  ],
  description: {
    items: [
      {
        key: { type: String, required: true },
        label: { type: String, required: true },
        children: [
          {
            name: { type: String, required: true },
            link: { type: String, required: true },
          },
        ],
      },
    ],
  },
});

export const PageModel = mongoose.model("Pages", PageSchema);
export const getPages = () => PageModel.find();
export const getPageByTitle = (title: string) => PageModel.find({ title });
export const getPageById = (id: string) => PageModel.findOne({ id });
export const createPage = async (values: Record<string, any>) => {
  const page = await new PageModel(values).save();
  return page.toObject();
};

export const deletePageById = (id: string) =>
  PageModel.findOneAndDelete({ id: id });

export const updatePageById = (id: string, values: Record<string, any>) =>
  PageModel.findOneAndReplace({ id: id }, values);
