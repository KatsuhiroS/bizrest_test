import React from 'react'
import AnswerSpace from './AnswerSpace'

const AnswerColumn = (props) => {
  return (
    <div>
      {props.answerColumn.answer_spaces.map((answerSpace, index) => {
        return (
          <AnswerSpace
            accept='accountTitle'
            lastDroppedItem={answerSpace.userAnswer}
            onDrop={item => props.onDrop(item)}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default AnswerColumn