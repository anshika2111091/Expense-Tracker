
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Incomex from './components/Incomex';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import {useState,useEffect} from "react";

function App() {
  const [bal, setbal] = useState(() => {
    const balance = localStorage.getItem("balance");
    return balance ? Number(balance) : 0;
  });
  const [inc, setinc] = useState(() => {
    const income = localStorage.getItem("income");
    return income ? Number(income) : 0;
  });
  const [exp, setexp] = useState(() => {
    const expense = localStorage.getItem("expense");
    return expense ? Number(expense) : 0;
  });
  const [text,settext]=useState("");
  const [amt,setamt]=useState("");
  const [items,setitems]=useState(() => {
    const data = localStorage.getItem("expenselist");
    return data ? JSON.parse(data) : [];
  });
  useEffect(()=>{
    localStorage.setItem("expenselist",JSON.stringify(items));
    localStorage.setItem("balance",bal.toString());
    localStorage.setItem("income",inc.toString());
    localStorage.setItem("expense",exp.toString());
    
  },[items, bal, inc, exp])

  useEffect(()=>
    {

    const data=localStorage.getItem("expenselist");
    if (data) {
      setitems(JSON.parse(data));
      setbal(Number(localStorage.getItem("balance"))|| 0);
      setinc(Number(localStorage.getItem("income")) || 0);
      setexp(Number(localStorage.getItem("expense"))|| 0);
     
    }
    
  },[])

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(text==="" || amt===""){
      alert("Fill the fields");
      return;
    }
      
    const id= (items.length)>0 ? items[items.length -1].id+1:1;
    const newitem={id,text,value:Number(amt)};
    setitems([...items,newitem]);
    
    const amount = Number(amt);
    if (amount > 0) {
      setinc(inc + amount);
      setbal(bal + amount);
    } else {
      setexp(exp - amount); // because exp should be positive
      setbal(bal + amount);
    }
  settext("");
  setamt("");
   

  }


  return (
    <div className="App">
      <Header  />
      <Balance bal={bal}/>
      <Incomex inc={inc} exp={exp}/>
      <Transactions items={items}/>
      <NewTransaction text={text} settext={settext} amt={amt} setamt={setamt} handlesubmit={handlesubmit}/>


    </div>
  );
}

export default App;
