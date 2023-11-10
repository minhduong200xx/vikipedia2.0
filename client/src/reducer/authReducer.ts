import AuthAction, { User } from "../types/types";

const authReducer: Reducer<
  { isAuthenticated: boolean; user: User | null },
  AuthAction
> = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.user };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};
export default authReducer;
