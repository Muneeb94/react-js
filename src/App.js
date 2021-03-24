
import Header from './components/Header';
import { useState } from 'react';
import Tasks from './components/Tasks';

const App = () => {
 
  const [ tasks , setTasks ] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'feb 5th at 2:30pm',
      reminder: true,  
    },
    {
      id: 2,
      text: 'Meeting At school',
      day: 'feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'feb 5th at 2:30pm',
      reminder: false,
    }
])
  return (
    <div className="App">
       {/* <h1>Hello React </h1> */}
        <Header/>
        <Tasks  tasks = {tasks} />

    </div>
  );
}

export default App;
