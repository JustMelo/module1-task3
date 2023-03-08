import React from "react";

export default class DaysRows extends React.Component {

  render() {
    const { daysInRow } = this.props;

    const row = [];

    daysInRow.forEach(elem => {
      row.push( 
        <td key={elem.day} className={(elem.monthStatus && elem.isTodayDate)? "ui-datepicker-today" : elem.monthStatus? '' : "ui-datepicker-other-month"}>{elem.day}</td>
      )
    });
   
      return (
        <>
          {row}
        </>
      )
  }
}