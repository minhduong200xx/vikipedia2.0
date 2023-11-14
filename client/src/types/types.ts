import { UploadFile } from "antd";

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
};
type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };
export default AuthAction;
export interface PageTypes {
  id?: string;
  title?: string;
  lang?: string;
  category?: string;
  shortDesc?: string[];
  images?: UploadFile[];
  imgName?: string[];
  subtitle?: {
    key: string;
    href: string;
    title: string;
  }[];
  paragraph?: {
    id?: string;
    title: string;
    segment: {
      content: string;
    }[];
  }[];
  items?: {
    label?: string;
    children?: {
      value: string;
    }[];
  }[];
  description?: {
    items?: {
      key?: string;
      label?: string;
      children?: {
        name?: string;
        link?: string;
      }[];
    }[];
  };
}
export interface FactType {
  id?: string;
  desc?: string;
  keyword?: string;
}
