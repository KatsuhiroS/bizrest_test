import React, {useState} from 'react'

const AnswerInput = (props) => {
  const [amount, setAmount] = useState('')
  
  const handleChange = (e) => {
    const amount = e.target.value
    const index = props.answerInputIndex
    props.inputAnswer(amount, index)
    setAmount(amount)
  }

  return (
    <div style={{ float: "left" }}>
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        style={{ height: "50px", fontSize: "20px", marginRight: "10px" }}
      />
    </div>
  )
}

export default AnswerInput