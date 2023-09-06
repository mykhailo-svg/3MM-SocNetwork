import { fetchUsers } from "../redux/slices/People/people_slice.slice";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/slices/Messages/chat_slice.slice";
import * as themeActions from "../redux/slices/Settings/settings_slice.slice";
import { fetchUserById } from "../redux/slices/Profile/user_slice.slice";
import {
  login,
  logout,
  registration,
} from "../redux/slices/Authorization/signup_slice.slice";

const rootActions = {
  ...actions,
  fetchUsers,
  fetchUserById,
  toggleTheme: themeActions.actions.toggleTheme,
  login,
  registration,
  logout,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
