import React, { useState, useCallback } from 'react'
import axios from 'axios'

import Instruction from './Instruction'
import AnswerColumn from './AnswerColumn'
import AnswerSpace from './AnswerSpace'
import AnswerChoice from './AnswerChoice'
import AnswerInput from './AnswerInput'
import JudgementButton from './JudgementButton'
import update from 'immutability-helper'

const WorkArea = (props) => {
  // const [answerSpaces, setAnswerSpaces] = useState([
  //   { accepts: 'accountTitle', lastDroppedItem: null },
  //   { accepts: 'accountTitle', lastDroppedItem: null }
  // ])

  const [userAnswers, setUserAnswers] = useState([])
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
    (item, answerSpaceId) => {
      const {name} = item
      // console.log(answerSpaceId)
      // console.log(item)
      setDroppedChoiceNames(
        update(droppedChoiceNames, name ? { $push: [name] } : { $push: [] })
      )
      axios({
        method: 'put',
        url: `/api/answer_spaces/${answerSpaceId}`,
        data: {
          lastDroppedItemName: name
        }
      }).then((res) => {
        props.setAnswerHandle(res.data)
        setUserAnswers(
          update(userAnswers, res.data ? { $push: [res.data.answer_space] } : { $push: [] })
        )
      })
    },
    [droppedChoiceNames]
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

  // {answerSpaces.map(({ accepts, lastDroppedItem }, index) => (
  //         <div key={index} style={{display: 'flex'}}>
  //           <AnswerSpace
  //             accept={accepts}
  //             lastDroppedItem={lastDroppedItem}
  //             onDrop={item => handleDrop(index, item)}
  //           />
  //           <AnswerInput
  //             inputAnswer={inputAnswer}
  //             answerInputIndex={index}
  //           />
  //         </div>
  //       ))}
  return (
    <div>
      <Instruction instruction={props.instruction} />
      <div style={{display: 'flex'}}>
        {props.answerColumns.map((answerColumn, index) => {
          return (
            <AnswerColumn
              answerColumn={answerColumn}
              onDrop={handleDrop}
              userAnswers={userAnswers}
              key={index}
            />
          )
        })}
      </div>
      <div style={{display: 'flex'}}>
        {props.answerChoices.map(({ name, item_type }, index) => (
          <AnswerChoice
            name={name}
            type={item_type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
      <div>
        <JudgementButton
          answerInput={answerInput}
        />
      </div>
    </div>
  )
}

export default WorkArea
