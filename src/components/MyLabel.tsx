import "./myLabel.css";

export interface MyLabelProps {
  /**
   * Is this the label that will be display
   */
  label: string;
  /**
   * Is this the size of the label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Is this the color of the label
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * All letters are in capital
   */
  allCaps: boolean;
  /**
   * All letters are in capital
   */
  fontColor: string;
}

export const MyLabel = ({
  label = "no label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
