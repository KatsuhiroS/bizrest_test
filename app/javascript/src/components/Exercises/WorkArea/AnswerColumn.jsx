import React from 'react'
import AnswerSpace from './AnswerSpace'

const AnswerColumn = (props) => {
  return (
    <div>
      {props.answerColumn.answer_spaces.map((answerSpace) => {
        return <AnswerSpace accept='accountTitle' />
      })}
    </div>
  )
}

export default AnswerColumn