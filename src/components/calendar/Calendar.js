import moment from "moment-with-locales-es6";
import React from "react";
import DaysCols from "../days-cols/DaysCols";
import { DaysParams } from "../../const";

export default class Calendar extends React.Component {

  render() {
    const { stepDate, date } = this.props;

    const monthCheck = (checkDay) => moment(date.dateNow).format('MM') === moment(checkDay).format('MM')? true : false;

    const isToday = (checkDay) => moment(date.dateNow).format('MM D') === moment(checkDay).format('MM D')? true : false;

    const daysToDisplay = [];
    
    let i = 0;

    while (i < DaysParams.DAYS_TOTAL) {
      let currentDay = moment(stepDate).add(i, 'days');
      daysToDisplay.push( {
        day: moment(currentDay).format('D'),
        monthStatus: monthCheck(currentDay),
        isTodayDate: isToday(currentDay)
      } );
      i++;
    }

    return (
      <>
        <div className="ui-datepicker">
          <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{date.dayName}</div>
            <div className="ui-datepicker-material-date">
              <div className="ui-datepicker-material-day-num">{date.dayNumber}</div>
              <div className="ui-datepicker-material-month">{date.monthFixedName}</div>
              <div className="ui-datepicker-material-year">{date.yearNumber}</div>
            </div>
          </div>
          <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
              <span className="ui-datepicker-month">{date.monthName}</span>&nbsp;<span className="ui-datepicker-year">{date.yearNumber}</span>
            </div>
          </div>
          <table className="ui-datepicker-calendar">
            <colgroup>
              <col></col>
              <col></col>
              <col></col>
              <col></col>
              <col></col>
              <col className="ui-datepicker-week-end"></col>
              <col className="ui-datepicker-week-end"></col>
            </colgroup>
            <thead>
              <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
              </tr>
            </thead>
            <tbody>
              <DaysCols allDays={daysToDisplay} date={this.props.date}/>
            </tbody>
          </table>
        </div>
      </>
    )
  }
};