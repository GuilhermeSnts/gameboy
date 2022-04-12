export type ColorVariants = 'offWhite'

export type Status = "on" | "off";

export interface BaseComponentProps {
  onClick?: () => void;
  variant: ColorVariants;
  status?: Status
}
