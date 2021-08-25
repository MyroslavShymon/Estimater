import React from "react";
import { useHistory } from "react-router-dom";

// export interface EstimateProps {

// }

// const About: React.FC<EstimateProps> = () => {
//     return ( <div>About</div> );
// }

const About: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/gdfggfh")}>
        Push to not correct route
      </button>
    </div>
  );
};

export default About;
