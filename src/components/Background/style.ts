import { styled } from "@stitches/react";

export const Background = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    color: {
      day: {
        backgroundColor: "#E0F8D0",
      },
      noon: {
        backgroundColor: "#88C070",
      },
      night: {
        backgroundColor: "#081820",
      },
    },
  },
});
