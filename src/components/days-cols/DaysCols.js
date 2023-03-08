import React from "react";
import DaysRows from "../days-rows/DaysRows";
import { DaysParams } from "../../const";

export default class DaysCols extends React.Component {

  render() {
    const { allDays } = this.props;
    
    const cols = [];
    
    let i = 0

    while (i < DaysParams.COLUMNS_COUNT) {
    const week = allDays.splice(0, DaysParams.DAYS_IN_ROW);
    cols.push( <tr key={i}><DaysRows daysInRow={week}/></tr> );
    i++;
    }

      return (
        <>
            {cols}
        </>
      )
  }
}