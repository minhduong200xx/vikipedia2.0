import { values } from "lodash";

const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: false,
  },
  category: { type: String, required: true },
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
      uid: {
        type: String,
        required: false,
      },
      size: {
        type: Number,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      fileName: {
        type: String,
        require: false,
      },
      lastModified: {
        type: Number,
        required: false,
      },
      lastModifiedDate: {
        type: Date,
        required: false,
      },
      url: {
        type: Number,
        required: false,
      },

      percent: {
        type: Number,
        required: false,
      },
      thumbUrl: {
        type: String,
        required: false,
      },
      crossOrigin: {
        type: String,
        required: false,
      },
    },
  ],
  subtitle: [
    {
      key: { type: String, required: false },
      href: { type: String, required: false },
      title: { type: String, required: false },
    },
  ],
  paragraph: [
    {
      id: { type: String, required: false },
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
        key: { type: String, required: false },
        label: { type: String, required: false },
        children: [
          {
            name: { type: String, required: false },
            link: { type: String, required: false },
          },
        ],
      },
    ],
  },
  imgName: [
    {
      type: String,
      required: false,
    },
  ],
  items: [
    {
      label: {
        type: String,
        required: false,
      },
      children: [
        {
          value: {
            type: String,
            required: false,
          },
        },
      ],
    },
  ],
});

export const PageModel = mongoose.model("Pages", PageSchema);
export const getPages = () => PageModel.find().exec();
export const getPageByTitle = (title: string) => PageModel.find({ title });
export const getPageById = (id: string) => PageModel.findOne({ id });
export const getPageByCategory = (category: string) =>
  PageModel.find({ category });
export const searchPages = async (search: string) => {
  const result = await PageModel.find({
    title: { $regex: new RegExp(search, "i") },
  });
  return result;
};

export const createPage = async (values: Record<string, any>) => {
  const page = await new PageModel(values).save();
  return page.toObject();
};

export const deletePageById = (id: string) =>
  PageModel.findOneAndDelete({ id: id });

export const updatePageById = (id: string, values: Record<string, any>) =>
  PageModel.findOneAndReplace({ id: id }, values);
