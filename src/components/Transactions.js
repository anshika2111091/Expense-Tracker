

const Transactions = ({items}) => {
  return (
    
    <div className="history">
      <h3>History</h3>
      {((items.length)>0)? 
         (items.map((item)=>(
          <div key={item.id} className="transaction">
            <p>{item.text}</p>
            <p style={item.value > 0 ? { color: 'green', borderRight: '2px solid green' } : { color: 'red', borderRight:'2px solid red' }}> {(item.value)}</p>
         
  
            </div>
        
        )))
      :(<p>No history</p>)}
   

    </div>
  )
}

export default Transactions
