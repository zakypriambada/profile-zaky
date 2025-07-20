import React from "react";
import "./StarBorder.css";
type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties["animationDuration"];
  thickness?: number;
  accentColor?: string; // Properti accentColor
  alignContent?: React.CSSProperties["alignContent"]; 
  alignItems?: React.CSSProperties["alignItems"];
};

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 5,
  children,
  accentColor,
  alignContent,
  alignItems,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button"; 

  const customStyles: React.CSSProperties = {
    padding: `${thickness}px 0`,
    ...(alignContent ? { alignContent } : {}),
    ...(alignItems ? { alignItems } : {}),
    ...(rest as React.HTMLProps<T>).style, 
  };

  return (
    <Component
      className={`star-border-container ${className}`}
      {...rest} 
      style={customStyles} 
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${accentColor || color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${accentColor || color}, transparent 10%)`,
          animationDuration: speed,
        }} 
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
