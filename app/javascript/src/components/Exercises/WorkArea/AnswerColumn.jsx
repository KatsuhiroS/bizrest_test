import React from 'react'

const AnswerColumn = (props) => {
  console.log(props.answerColumn.answer_spaces)
  return (
    <div>
      {props.answerColumn.answer_spaces.map((hoge) => {
        return <div>{hoge.id}</div>
      })}
    </div>
  )
}

export default AnswerColumn