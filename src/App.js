import './App.css';
import { DateToday, stepDate, monthStartDay } from './model/dateModel';
import Calendar from './components/calendar/Calendar';

function App() {
  return (
    <Calendar date={DateToday} stepDate={stepDate} monthStartDay={monthStartDay}/>
  );
}

export default App;
