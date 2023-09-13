import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/reminderList';
import Reminder from './models/Reminder';
import axios from 'axios';
import NewReminder from './components/newReminder';
import { postReminder } from './services/postReminder';



function App() {
  
const [reminders,setReminders]=useState<Reminder[]>([]);


useEffect(()=>{
  loadReminder();
},[]);


const loadReminder = async ()=>{

    const response= await axios.get<Reminder[]>
  ("https://jsonplaceholder.typicode.com/todos");
    setReminders(response.data)
 
}


const removeRminder =(id:number)=>{
  const filteredReminder= reminders.filter(reminder => reminder.id !== id);
  setReminders(filteredReminder)
}


const addReminder =async (title:string)=>{
const newReminder =await postReminder(title);
setReminders([newReminder,...reminders])
}

  return (
    <div className="App">
     <NewReminder onAddReminder={addReminder}/>
     <ReminderList items={reminders}   onRemoveReminder={removeRminder}/>
    </div>
  );
}

export default App;
