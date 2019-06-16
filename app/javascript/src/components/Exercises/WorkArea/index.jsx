import React, { useState, useCallback } from 'react'

import Instruction from './Instruction'
import AnswerSpace from './AnswerSpace'
import AnswerChoice from './AnswerChoice'
import AnswerInput from './AnswerInput'
import ItemTypes from './ItemTypes'
import JudgementButton from './JudgementButton'
import update from 'immutability-helper'

const WorkArea = (props) => {
  const [answerSpaces, setAnswerSpaces] = useState([
    { accepts: [ItemTypes.ACCOUNTNAME], lastDroppedItem: null },
    { accepts: [ItemTypes.ACCOUNTNAME], lastDroppedItem: null }
  ])

  const [answerChoices] = useState([
    { name: "現金", type: ItemTypes.ACCOUNTNAME },
    { name: "売上高", type: ItemTypes.ACCOUNTNAME },
    { name: "売掛金", type: ItemTypes.ACCOUNTNAME }
  ])

  const [droppedChoiceNames, setDroppedChoiceNames] = useState([])

  const [answerInput, setAnswerInput] = useState([
    {amount: null},
    {amount: null},
    {amount: null}
  ])

  const isDropped = (choiceName) => {
    return droppedChoiceNames.indexOf(choiceName) > -1
  }

  const handleDrop = useCallback(
    (index, item) => {
      const {name} = item
      setDroppedChoiceNames(
        update(droppedChoiceNames, name ? { $push: [name] } : { $push: [] })
      )
      setAnswerSpaces(
        update(answerSpaces, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedChoiceNames, answerSpaces]
  )

  const inputAnswer = (amount, index) => {
    setAnswerInput(
      update(answerInput, {
        [index]: {
          amount: {
            $set: amount,
          }
        }
      })
    )
  }

  return (
    <div>
      <Instruction instruction={props.instruction} />
      <div style={{display: 'flex'}}>
        {answerSpaces.map(({ accepts, lastDroppedItem }, index) => (
          <div key={index} style={{display: 'flex'}}>
            <AnswerSpace
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={item => handleDrop(index, item)}
            />
            <AnswerInput
              inputAnswer={inputAnswer}
              answerInputIndex={index}
            />
          </div>
        ))}
      </div>
      <div style={{display: 'flex'}}>
        {answerChoices.map(({ name, type }, index) => (
          <AnswerChoice
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
      <div>
        <JudgementButton
          answerSpaces={answerSpaces}
          answerInput={answerInput}
        />
      </div>
    </div>
  )
}

export default WorkArea
