import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  width: "100%",
  height: "30px",
  padding: "0 26px",
  boxSizing: "border-box",
  textTransform: "capitalize",
  fontFamily: "pretendo, sans",
  fontSize: "14px",
  color: "#312E65",
  span: {
    textTransform: "uppercase",
    fontFamily: "gill-sans, sans",
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: "20px",
  },
});

export const Trademark = styled("div", {
  width: "100%",
  height: "30px",
  display: 'inline',
  textTransform: "uppercase",
  fontSize: "10px",
  marginLeft: '2px',
});

