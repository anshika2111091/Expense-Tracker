

const Incomex = ({inc,exp}) => {
  return (
    <div className="incomeexp">
      <div className="income">
        <h5>INCOME</h5>
       
       <h3>+${inc}</h3>
      </div>
      <div className="expense">
        <h5>EXPENSE</h5>
       
       <h3>-${exp}</h3>
      </div>
      
    </div>
  )
}

export default Incomex
