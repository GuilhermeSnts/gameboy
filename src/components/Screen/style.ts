import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  width: "100%",
  height: "200px",
  display: "flex",
  justifyContent: "center",
});

export const ScreenFrame = styled("div", {
  width: "85%",
  height: "200px",
  backgroundColor: "#787586",
  borderRadius: "8px 8px 42px 8px",
  color: "#ffffff",
  boxSizing: "border-box",
  padding: "8px",
  boxShadow: `inset 0 2px 1px rgba(0,0,0,0.2),
    0 -4px 2px rgba(255,255,255,0.8)
  `,
});

export const ScreenFrameHeader = styled("div", {
  width: "100%",
  height: "20px",
  display: "flex",
  flexDirection: "row",
});

export const Text = styled("div", {
  boxSizing: "border-box",
  width: "auto",
  margin: "auto 0",
  textTransform: "uppercase",
  fontFamily: "sans-serif",
  fontSize: "8px",
});

export const Stack = styled("div", {
  display: "flex",
  variants: {
    size: {
      long: {
        width: "85px",
      },
      small: {
        width: "40px",
      },
    },
  },
  height: "100%",
  flexDirection: "column",
  margin: "3px 4px",
});

export const Stripe = styled("div", {
  height: "2px",
  backgroundColor: "#200A3B",
  margin: "2px 0",
  width: "100%",
  variants: {
    color: {
      blue: {
        backgroundColor: "#200A3B",
      },
      red: {
        backgroundColor: "#65153C",
      },
    },
  },
});
