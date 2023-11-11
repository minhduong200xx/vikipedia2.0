export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
};
type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };
export default AuthAction;
export interface PageTypes {
  id: string;
  title: string;
  shortDesc: string[];
  images: {
    src: string;
    title: string;
  }[];
  subtitle: {
    key: string;
    href: string;
    title: string;
  }[];
  paragraph: {
    id: string;
    segment: {
      content: string;
    }[];
  }[];

  description: {
    items: {
      key: string;
      label: string;
      children: {
        name: string;
        link: string;
      }[];
    }[];
  };
}
