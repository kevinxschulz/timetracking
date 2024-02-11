import logo from './logo.svg';
import { 
  Sidebar, 
  TimeEntryForm, 
  TimeEntryList, 
  CustomerList, 
  ActivityList 
} from './components';
import './App.css';

function App() {
  return (
    <div>
      <Sidebar />
      <TimeEntryForm />
      <TimeEntryList />
      <CustomerList />
      <ActivityList />
    </div>
  );
}


export default App;
