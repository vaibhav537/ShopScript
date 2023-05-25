import { AiFillAndroid } from "react-icons/ai";
export const toastConfig = {
  duration: 3000,

  //icon config
  iconTheme: {
    primary: "white",
    secondary: "black",
  },

  //ARIA config
  role: "status",
  ariaLive: "polite",

  //toast styles
  style: {
    background: "lightblue",
    color: "darkblue",
    icon: <AiFillAndroid />,
  },
};
