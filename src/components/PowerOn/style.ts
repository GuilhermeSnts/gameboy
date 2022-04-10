import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  width: "100%",
  height: "32px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Separator = styled("hr", {
  width: '100%',
  height: "4px",
  boxShadow: " inset 0 -3px 2px rgba(255,255,255,0.6)",
  border: "none",
  marginBlock: 0,
  borderRadius: '2px',
});

export const Container = styled("div", {
  width: "80%",
  height: "100%",
  position: "relative",
  borderRadius: "0 3px 3px 0",
  boxShadow: "2px 2px 2px rgba(0,0,0,0.2), -2px 2px 2px rgba(0,0,0,0.2)",
  "&::after": {
    position: "absolute",
    content: " ",
    width: "32px",
    height: "100%",
    top: "0",
    left: "-35px",
    borderRadius: "16px 2px 2px 2px",
    boxShadow: `1px 0 1px rgba(0,0,0,0.2),
      0 2px 2px rgba(0,0,0,0.2),
      0 2px 1px rgba(0,0,0,0.2)`,
  },
  "&::before": {
    position: "absolute",
    content: " ",
    width: "32px",
    height: "100%",
    top: "0",
    right: "-35px",
    borderRadius: " 2px 16px 2px 2px",
    boxShadow: `1px 0 1px rgba(0,0,0,0.2),
      0 2px 2px rgba(0,0,0,0.2),
      0 2px 1px rgba(0,0,0,0.2)`,
  },
});

export const PowerPill = styled("div", {
  width: "fit-content",
  padding: "2px",
  borderRadius: "10px",
  boxShadow: `inset 1px 0 1px rgba(0,0,0,0.2),
      inset 0 2px 2px rgba(0,0,0,0.2),
      inset 0 2px 1px rgba(255,255,255,0.6)`,
  margin: '4px 10px',
});

