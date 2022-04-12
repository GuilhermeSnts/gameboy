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

export const ScreenMainContent = styled("div", {
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
});
export const BatteryAllert = styled("div", {
  position: "absolute",
  textTransform: "uppercase",
  fontFamily: "sans-serif",
  fontSize: "8px",
  left: '-1px',
  top: '40px'
});
export const BatteryLED = styled("div", {
  width: "9px",
  height: "9px",
  borderRadius: "10px",
  margin: "10px 8px",
  variants: {
    status: {
      on: {
        backgroundColor: "#EA361D",
        boxShadow: `0 0 4px rgb(232, 127, 113, 0.8),
          0 0 2px rgb(255, 187, 178, 0.8),
          inset 0 0 1px rgb(255, 187, 178, 0.4)
        `,
      },
      off: {
        backgroundColor: "#3d0909",
        boxShadow: `0 0 1px rgb(0, 0, 0, 0.4),
          inset 0 0 2px rgb(0, 0, 0, 0.4)
        `,
      },
    },
  },
});
export const Canvas = styled("div", {
  height: "140px",
  marginTop: "4px",
  width: "200px",
  backgroundColor: "#9CA04C",
  boxShadow: `inset 0px 2px 4px rgba(0,0,0,0.4),
    inset 1px 1px 4px rgba(0,0,0,0.4),
    inset -1px 1px 4px rgba(0,0,0,0.4),
    0 0 2px rgba(255,255,255, 0.3)
  `,
});
