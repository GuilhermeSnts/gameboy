import { styled } from "@stitches/react";

export const Frame = styled("main", {
  width: "350px",
  height: "580px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "16px 16px 72px 16px",
  boxShadow: `0 4px 8px rgba(0,0,0,0.2),
    0 8px 16px rgba(0,0,0,0.2),
    inset 6px 0 1px rgba(0, 0, 0, 0.1),
    inset -6px 0 1px rgba(255, 255, 255, 0.4),
    inset 0px 4px 1px rgba(255, 255, 255, 0.4),
    inset 0 -6px 2px rgba(0, 0, 0, 0.1)
    `,
  variants: {
    color: {
      offWhite: {
        backgroundColor: "#eeeeee",
      },
    },
  },
  "&::after": {
    content: " ",
    width: "140px",
    height: "95px",
    zIndex: "2",
    position: "absolute",
    bottom: "0",
    right: "0",
    borderRadius: "0 0 72px 0",
    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
    background: "linear-gradient(135deg, rgba(0,0,0,0.12), transparent)",
  },
});
