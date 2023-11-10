export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
};
type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };
export default AuthAction;
