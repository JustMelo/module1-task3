import { dateNow } from "../mock/date-now";
import moment from "moment-with-locales-es6";

moment.locale('ru');

const DateToday = {
  date: moment(dateNow),
  dayName: moment(dateNow).format('dddd'),
  dayNumber: moment(dateNow).format('D'),
  monthName: moment(dateNow).format('MMM'),
  monthFixedName: moment(dateNow).format('D MMMM').toUpperCase().substring(1),
  yearNumber: moment(dateNow).format('YYYY'),
}

const monthStartDay = moment(dateNow).subtract(DateToday.dayNumber - 1, 'days').format('e');

const stepDate = moment(dateNow).subtract(Number(DateToday.dayNumber) + Number(monthStartDay) - 1, 'days');

export {DateToday, monthStartDay, stepDate}