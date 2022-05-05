import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  transform: "rotate(-20deg)",
  margin: "2px",
});

export const Pill = styled("button", {
  width: "40px",
  height: "10px",
  borderRadius: "10px",
  backgroundColor: "#9CA69F",
  boxShadow: `inset 0 4px 3px rgba(0,0,0,0.4),
      0 1px 1px rgba(0,0,0, 0.6),
      1px 0 2px rgba(0,0,0,0.2)`,
  border: "none",
  margin: "4px",
  cursor: "pointer",
  "&:active": {
    height: "9px",
    borderTop: "2px solid rgba(0,0,0,0.4)",
    boxShadow: `inset 0 5px 5px rgba(0,0,0,0.4),
      0 1px 1px rgba(0,0,0, 0.8),
      1px 0 2px rgba(0,0,0,0.2)`,
  },
});

export const Notch = styled("div", {
  width: "52px",
  height: "22px",
  borderRadius: "20px",
  boxShadow: `inset 0 -4px 3px rgba(0,0,0,0.1),
  inset 0 4px 3px rgba(255,255,255,0.6)`,
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Text = styled("div", {
  height: "20px",
  textAlign: "center",
  fontFamily: "eurostile",
  color: "#312E65",
  textTransform: 'uppercase',
  fontSize: '12px',
  letterSpacing: '2px',
  fontWeight: 'bold'
});
