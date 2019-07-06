import React from 'react'
import AnswerSpace from './AnswerSpace'

const AnswerColumn = (props) => {
  return (
    <div>
      {props.answerColumn.answer_spaces.map((answerSpace, index) => {
        return (
          <AnswerSpace
            accept='accountTitle'
            lastDroppedItem=''
            onDrop={item => props.onDrop(item, answerSpace.id)}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default AnswerColumn