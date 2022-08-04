/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
