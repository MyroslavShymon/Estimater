import React from "react";
import { default as classes } from "./Page.module.scss";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import MyTable from "../components/UI/Table/MyTable";
import MyHead from "../components/UI/Table/Head/MyHead";
import MyHeadRow from "../components/UI/Table/Head/Row/MyHeadRow";
import MyHeadCell from "../components/UI/Table/Head/Cell/MyHeadCell";
import MyBody from "../components/UI/Table/Body/MyBody";
import MyRow from "../components/UI/Table/Body/Row/MyRow";
import MyCell from "../components/UI/Table/Body/Cell/MyCell";

// export interface EstimateProps {

// }

// const About: React.FC<EstimateProps> = () => {
//     return ( <div>About</div> );
// }
const tableData = [
  {
    desc: "- Create cache module",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
];

const About: React.FC = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className={classes.page}>
      {/* <button onClick={() => history.push("/gdfggfh")}>
        Push to not correct route
      </button> */}
      <Header />
      <MyTable>
        <MyHead>
          <MyHeadRow>
            <MyHeadCell>Description</MyHeadCell>
            <MyHeadCell>Estimate (Hour) min</MyHeadCell>
            <MyHeadCell>Estimate max</MyHeadCell>
            <MyHeadCell>Unit</MyHeadCell>
            <MyHeadCell>Unit price</MyHeadCell>
            <MyHeadCell>Cost USD</MyHeadCell>
            <MyHeadCell>Comments</MyHeadCell>
          </MyHeadRow>
        </MyHead>
        <MyBody>
          {tableData.map((row) => (
            <MyRow>
              <MyCell>{row.desc}</MyCell>
              <MyCell>{row.min}</MyCell>
              <MyCell>{row.max}</MyCell>
              <MyCell>{row.unit}</MyCell>
              <MyCell> {row.unitPrice}</MyCell>
              <MyCell>{row.costUsd}</MyCell>
              <MyCell>{row.comments}</MyCell>
            </MyRow>
          ))}
        </MyBody>
      </MyTable>
    </div>
  );
};

export default About;
