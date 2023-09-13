import Reminder from "../models/Reminder";
import axios from "axios"
export async function postReminder (title:string){
    const response = 
    await axios.post<Reminder>("https://jsonplaceholder.typicode.com/todos",{title});
 return response.data;
    }