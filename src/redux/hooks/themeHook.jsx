import { useAppDispatch, useAppSelector } from "./reduxHook";

import { changeTheme } from "../slices/toggleTheme/Theme";

export const useTheme = () => {
  const theme = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(changeTheme());
  };

  return { theme, toggleTheme };
};
