

const NewTransaction = ({text,settext,amt,setamt,handlesubmit}) => {
  return (
    <div className="newtransac">
      <h4>Add new transactions</h4>
      <form action="" >
        <label htmlFor="text">Text</label>
        <input type="text"
        value={text}
        onChange={(e)=>settext(e.target.value)} placeholder="Enter text..." required/>
        <label htmlFor="amount">Amount <br />(negative - expense,positive - income)</label>
        <input type="numbers"
        value={amt} onChange={(e)=>setamt(e.target.value)} placeholder="Enter amount..." required />
        <button type="submit" onClick={(e)=>handlesubmit(e)}>Submit</button>
      </form>
     
    </div>
  )
}

export default NewTransaction
