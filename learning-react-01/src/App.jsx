import { useState } from "react"
import { users } from "./data/data"
import Users from "./components/users"
import IncButton from "./components/increment"
import DecButton from "./components/decrement"
function App() {
  const [fullName, setFullName]=useState("Gunay")
  const [first, setfirst] = useState(true)
  // console.log(fullName);
  const [data, setData] = useState(users)
  let [count, setCount] = useState(0)
  const incCount=()=>{
   return setCount(count=count+1)
  }
  const decCount=()=>{
    setCount(count=count-1)
  }

  return (
    <div className="App">
      <h1>Full Name: "{fullName}"</h1>
      <button onClick={()=>{
        first?setfirst(false):setfirst(true)
        first?setFullName('Refiqe'):setFullName("Gunay")
      }}>Click  to change name</button>
      <hr />
      <hr />
      <Users data={data}/>
      <IncButton incCount={incCount}/>
      {count}
      <DecButton decCount={decCount}/>
    </div>
  )
}
export default App
