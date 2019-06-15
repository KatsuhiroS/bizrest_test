import React, { useState, useCallback } from 'react'

import AnswerSpace from './AnswerSpace'
import AnswerChoice from './AnswerChoice'
import AnswerInput from './AnswerInput'
import ItemTypes from './ItemTypes'
import JudgementButton from './JudgementButton'
import update from 'immutability-helper'

const WorkArea = () => {
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

  const inputAnswer = (amount) => {
    setAnswerInput(
      update(answerInput, {
        [amount.index]: {
          amount: {
            $set: answerInput
          }
        }
      })
    )
  }

  return (
    <div>
      <h1>問題</h1>
      <h2>500円の商品を売り上げ、500円を現金で受け取りました。</h2>
      <h2>この取引の仕訳を起票しましょう。</h2>
      <div style={{ overflow: "hidden", clear: "both", float: "left" }}>
        {answerSpaces.map(({ accepts, lastDroppedItem }, index) => (
          <div key={index} style={{ float: "left" }}>
            <AnswerSpace
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={item => handleDrop(index, item)}
            />
            <AnswerInput
              answerInput={inputAnswer}
              answerInputIndex={index}
            />
          </div>
        ))}
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
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
          amount={answerInput}
          answerSpaces={answerSpaces}
        />
      </div>
    </div>
  )
}

export default WorkArea
