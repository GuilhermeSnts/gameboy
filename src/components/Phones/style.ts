import { styled } from "@stitches/react";

export const PhonePill = styled("div", {
  width: "70px",
  height: "18px",
  margin: "4px 10px 10px 10px",
  cursor: "pointer",
  borderRadius: "10px",
  position: "relative",
  boxShadow: `inset 0 1px 1px rgba(0,0,0,0.2),
      inset 0 2px 2px rgba(0,0,0,0.2),
      0 2px 1px rgba(255,255,255,0.6),
      0 1px 1px rgba(255,255,255,0.8)`,
  fontFamily: "sans-serif",
  textTransform: "uppercase",
  fontSize: "10px",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to top,rgba(0,0,0,0.01), rgba(255,255,255,0.2))",
  textShadow: `0 2px 2px rgba(0,0,0,0.2),
    0 1px 1px rgba(0,0,0,0.2),
    0 -1px 1px rgba(255,255,255,0.8)`,
  svg: {
    filter: `drop-shadow(0 1px 1px rgba(0,0,0,0.4))`,
    margin: "0 4px",
  },
  "&::before": {
    position: "absolute",
    content: " ",
    width: "4px",
    height: "10px",
    bottom: "-10px",
    right: "14px",
    boxShadow: `inset 1px 0 1px rgba(0,0,0,0.2),
      inset -1px 0 1px rgba(0,0,0,0.2)`,
  },
  "&::after": {
    position: "absolute",
    content: " ",
    width: "4px",
    height: "10px",
    bottom: "-10px",
    right: "24px",
    boxShadow: `inset 1px 0 1px rgba(0,0,0,0.2),
      inset -1px 0 1px rgba(0,0,0,0.2)`,
  },
  variants: {
    color: {
      offWhite: {
        color: "#eeeeee",
        path: {
          fill: "#eeeeee",
        },
      },
    },
  },
});
