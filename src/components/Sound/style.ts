import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  width: "100px",
  height: "70px",
  padding: "8px",
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  transform: "rotate(-32deg)",
  position: "absolute",
  bottom: "24px",
  right: "12px",
});

export const AudioHole = styled("div", {
  width: "8px",
  height: "100%",
  borderRadius: "6px",
  position: 'relative',
  boxShadow: `
    inset 1px 0 1px rgba(255,255,255,0.6),
    inset 1px 0 2px rgba(255,255,255,0.6),
    inset -2px 0 1px rgba(0,0,0,0.2)
    `,
  background: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.2))",
  '&::after': {
    content: ' ',
    width: '1px',
    height: '65%',
    backgroundColor: '#333333',
    position: 'absolute',
    top: '4px',
    left: '2px'
  }
});
