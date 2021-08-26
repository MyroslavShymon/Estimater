import React from "react";
import { default as classes } from "./Page.module.scss";
import { useHistory } from "react-router-dom";

// export interface EstimateProps {

// }

// const About: React.FC<EstimateProps> = () => {
//     return ( <div>About</div> );
// }

const About: React.FC = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className={classes.page}>
      <button onClick={() => history.push("/gdfggfh")}>
        Push to not correct route
      </button>
    </div>
  );
};

export default About;
