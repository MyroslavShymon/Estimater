import * as React from "react";

export interface MyErrorProps {
  children: string;
}

const MyError: React.FC<MyErrorProps> = ({ children }) => {
  return <div style={{ color: "red" }}>{children}</div>;
};

export default MyError;
