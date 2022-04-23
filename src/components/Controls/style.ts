import { styled } from "@stitches/react";

export const Wrapper = styled("div", {
  width: "100%",
  height: "220px",
});

export const DirectionalControls = styled("div", {
  height: "100%",
  width: "175px",
});

export const ActionControls = styled("div", {
  height: "100%",
  width: "175px",
});

export const MainArea = styled("div", {
  height: 'calc(100% - 90px)',
  display: 'flex',
  flexDirection: 'row'
});

export const ConfigControls = styled("div", {
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
