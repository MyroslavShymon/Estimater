import * as React from "react";
import MyTable from "../../../components/UI/Table/MyTable";
import MyTableColumn from "../../../components/UI/Table/Column/MyColumn";
import MyTableRow from "../../../components/UI/Table/Row/MyRow";
import MyTableBody from "../../../components/UI/Table/TableBody/MyTableBody";
import MyTableHead from "../../../components/UI/Table/TableHead/MyTableHead";
import MyHeadColumn from "../../../components/UI/Table/HeadColumn/MyHeadColumn";
import MyTHeadRow from "../../../components/UI/Table/HeadRow/MyHeadRow";
import { numberToFixed } from "../../../components/UI/TextInput/MyTextInput";
import { useState } from "react";
import { IEvaluationPoint } from "../../Estimate/Estimates";

export interface EvaluationPointsTableProps {
  evaluationPoints: IEvaluationPoint[];
}

const EvaluationPointsTable: React.FC<EvaluationPointsTableProps> = ({
  evaluationPoints,
}) => {
  const [columnNames, setColumnNames] = useState([
    { id: 1, title: "Index" },
    { id: 2, title: "Description" },
    { id: 3, title: "Estimate (Hour) min" },
    { id: 4, title: "Estimate hourMax" },
    { id: 5, title: "Unit" },
    { id: 6, title: "Unit price" },
    { id: 7, title: "Cost USD" },
    { id: 8, title: "Comments" },
  ] as { id: number; title: string }[]);

  return (
    <MyTable>
      <MyTableHead>
        <MyTHeadRow>
          {columnNames.map((columnName: { id: number; title: string }) => (
            <MyHeadColumn key={columnName.id}>{columnName.title}</MyHeadColumn>
          ))}
        </MyTHeadRow>
      </MyTableHead>
      <MyTableBody>
        {evaluationPoints.map(
          (evaluationPoint: IEvaluationPoint, index: number) => (
            <MyTableRow key={evaluationPoint.id}>
              <MyTableColumn>{index + 1} </MyTableColumn>
              <MyTableColumn>{evaluationPoint.description}</MyTableColumn>
              <MyTableColumn>{evaluationPoint.hourMin}</MyTableColumn>
              <MyTableColumn>{evaluationPoint.hourMax}</MyTableColumn>
              <MyTableColumn>{evaluationPoint.unit}</MyTableColumn>
              <MyTableColumn>
                {numberToFixed(evaluationPoint.unitPrice)}
              </MyTableColumn>
              <MyTableColumn>
                {numberToFixed(
                  Number(evaluationPoint.unitPrice) * evaluationPoint.hourMin
                ) + "$"}
              </MyTableColumn>
              <MyTableColumn>{evaluationPoint.comments}</MyTableColumn>
            </MyTableRow>
          )
        )}
      </MyTableBody>
    </MyTable>
  );
};

export default EvaluationPointsTable;
