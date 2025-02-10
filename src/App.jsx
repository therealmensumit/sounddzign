import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useEffect } from "react";
import WebFont from "webfontloader";

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Alegreya: 100,200,300,400,500,600,700,800,900",
          "Inter: 100,200,300,400,500,600,700,800,900",
        ],
      },
    });
  }, []);

  return <RouterProvider router={router} />;
};
