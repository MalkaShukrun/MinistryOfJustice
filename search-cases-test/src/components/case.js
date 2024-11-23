import React from "react";

export default function Case(props) {
  return (
    <div className="flex flex-col border-4 rounded-md m-2">
      <div className=" m-2 flex justify-items-end ">
        <div className="m-3">מספר תיק: {props.case.caseNumber}</div>
        <div className="m-3">עוסק: {props.case.businessOwner}</div>
        <div className="m-3">סוג התיק: {props.case.caseType}</div>
      </div>
      <div className=" m-2 flex justify-items-end ">
        <div className="m-3">תקופת זכאות: {props.case.eligibilityPeriod}</div>
        <div className="m-3">תאריך פתיחת תיק: {props.case.caseOpeningDate}</div>
        <div className="m-3">דיון קרוב: {props.case.nextDiscussionDate}</div>
      </div>
      <div className=" m-2 flex justify-items-end">
        <div className="m-3">מגיש הערר: {props.case.appealSubmitter}</div>
        <div className="m-3">
          ב"כ משיבה: {props.case.respondentRepresentative}
        </div>
        <div className="m-3">יו"ר ועדה: {props.case.committeeChairman}</div>
        <div className="m-3">נציג ציבור: {props.case.publicRepresentative}</div>
      </div>
    </div>
  );
}
