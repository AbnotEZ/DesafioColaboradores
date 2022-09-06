import './App.css';
import UserList from './UserList';
import { BaseColaboradores } from "./data/db.js";

function App() {
  const dataInfo= BaseColaboradores;
console.log(dataInfo)
  return (
    <>
      <UserList data={dataInfo}/> 
    </>
  )
}
export default App;