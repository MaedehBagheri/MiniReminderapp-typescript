import { useState } from "react";


interface NewReminderProps{
    onAddReminder:(title:string)=>void;
}

function NewReminder({onAddReminder}:NewReminderProps):JSX.Element{

const[newReminder,setNewReminder]=useState("")

const formSubmision =(e: React.FormEvent)=>{
    e.preventDefault();
    onAddReminder(newReminder)
}
return(
    <form onSubmit={formSubmision}>
        <label htmlFor="title">Title :</label>
        <input value={newReminder}
        onChange={e=> setNewReminder(e.target.value)}
        id="title" type="text" className="form-control"/>
        <button type="submit" className="btn btn-primary my-3 rounded-pill">add reminder</button>
    </form>
)
}

export default NewReminder;