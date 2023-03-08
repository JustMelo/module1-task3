import './App.css';
import { DateToday, stepDate} from './model/dateModel';
import Calendar from './components/calendar/Calendar';

function App() {
  return (
    <Calendar date={DateToday} stepDate={stepDate}/>
  );
}

export default App;
