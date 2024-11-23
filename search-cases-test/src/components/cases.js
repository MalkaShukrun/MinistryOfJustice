import cases_data from "../lib/mockes/cases_data.json";
import stakeolders_data from "../lib/mockes/stakeholders_data.json";
import current_judges_data from "../lib/mockes/current_judges_data.json";
import Case from "./case";
import React, { useState } from "react";

function isValueInBothArrays(value, judgeCases) {
  return judgeCases.some(
    (judgeCase) => judgeCase.caseNumber === value.caseNumber
  );
}

export default function Cases() {
  const [casesData, setCasesData] = useState(cases_data.cases);
  const onClickActive = (e) => {
    const activeCases = [
      ...cases_data.cases.filter((value) => value.caseStatus === "1"),
    ];
    console.log(activeCases);
    setCasesData(activeCases);
  };

  const onClickClosed = (e) => {
    const closedCases = [
      ...cases_data.cases.filter((value) => value.caseStatus === "2"),
    ];
    console.log(closedCases);
    setCasesData(closedCases);
  };

  const onClickAll = (e) => {
    console.log(cases_data.cases);
    setCasesData(cases_data.cases);
  };

  const onClickMyCases = (e) => {
    //מציאת התיקים שלי מתוך אוביקט stakeolders_data
    //וגם מדובר בדיין קוד 1
    const judgeCases = stakeolders_data.stakeholders.filter(
      (value) =>
        value.stakeholderIdNumber === current_judges_data.idNumber &&
        value.role === 1
    );
    //מציאת התיקים שלי לפי נתוני התיקים ונתוני התיקים שלי
    //בהיסתמך על מספר תז של דיין שמגיע מהיזדהות בכניסה לאתר
    const myCases = [
      ...cases_data.cases.filter((value) =>
        isValueInBothArrays(value, judgeCases)
      ),
    ];
    console.log(myCases);
    setCasesData(myCases);
  };

  const onClickSortByCaseNumber = (e) => {
    // פונקציית מיון
    const sortedCaseNumber = [
      ...casesData.sort((a, b) => {
        const strA = String(a.caseNumber);
        const strB = String(b.caseNumber);
        // פיצול הנתונים לשנה ומספר תיק
        const [caseNumberA, yearA] = strA.split("/").map(Number);
        const [caseNumberB, yearB] = strB.split("/").map(Number);

        // מיון לפי שנה תחילה, ואם שווה - לפי מספר תיק
        return yearA - yearB || caseNumberA - caseNumberB;
      }),
    ];

    setCasesData(sortedCaseNumber);
    console.log(sortedCaseNumber);
  };

  const onClickSortByCaseOpeningDate = (e) => {
    const caseOpeningDate = [
      ...casesData.sort(
        (a, b) =>
          new Date(a.caseOpeningDate.replace(".", "-")) -
          new Date(b.caseOpeningDate.replace(".", "-"))
      ),
    ];
    console.log(caseOpeningDate);
    setCasesData(caseOpeningDate);
  };

  return (
    <div className="place-items-center">
      <div className="">
        <input
          className="my-7 rounded-lg border border-gray-500 bg-white-500 px-6 py-3 m-3"
          type="button"
          value="הכל"
          onClick={onClickAll}
        ></input>
        <input
          className="my-7 rounded-lg border border-gray-500 bg-white-500 px-6 py-3 m-3"
          type="button"
          value="תיקים שלי"
          onClick={onClickMyCases}
        ></input>
        <input
          className="my-7 rounded-lg border border-gray-500 bg-white-500 px-6 py-3 m-3"
          type="button"
          value="תיקים פעילים"
          onClick={onClickActive}
        ></input>
        <input
          className="my-7 rounded-lg border border-gray-500 bg-white-500 px-6 py-3 m-3"
          type="button"
          value="תיקים סגורים"
          onClick={onClickClosed}
        ></input>
        <div>
          <input
            className="my-7 rounded-lg border border-gray-500 bg-white-500 px-6 py-3 m-3"
            type="button"
            value="מיין לפי מספר תיק"
            onClick={onClickSortByCaseNumber}
          ></input>
          <input
            className="my-7 rounded-lg border border-gray-500 bg-white-500 px-6 py-3 m-3"
            type="button"
            value="מיין לפי תאריך"
            onClick={onClickSortByCaseOpeningDate}
          ></input>
        </div>
      </div>
      <h4 className="my-5 text-3xl font-bold leading-5 text-indigo-900 text-center">
        תוצאות חיפוש
      </h4>
      <div className="">
        {casesData?.map((c, index) => {
          return <Case key={index} case={c} />;
        })}
      </div>
    </div>
  );
}
