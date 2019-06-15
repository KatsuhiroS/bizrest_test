import React, { useState, useCallback } from 'react'

import AccountSpace from './AccountSpace'
import AccountChoice from './AccountChoice'
import ItemTypes from './ItemTypes'
import AmountInput from './AmountInput'
import JudgementButton from './JudgementButton'
import update from 'immutability-helper'

const WorkArea = () => {
  const [dndAnswerSpaces, setDndAnswerSpaces] = useState([
    { accepts: [ItemTypes.ACCOUNTNAME], lastDroppedItem: null },
    { accepts: [ItemTypes.ACCOUNTNAME], lastDroppedItem: null }
  ])

  const [choices] = useState([
    { name: "現金", type: ItemTypes.ACCOUNTNAME },
    { name: "売上高", type: ItemTypes.ACCOUNTNAME },
    { name: "売掛金", type: ItemTypes.ACCOUNTNAME }
  ])

  const [droppedChoiceNames, setdroppedChoiceNames] = useState([])

  const [amount, setAmount] = useState([
    {input: null},
    {input: null},
    {input: null}
  ])

  const isDropped = (choiceName) => {
    return droppedChoiceNames.indexOf(choiceName) > -1
  }

  const handleDrop = useCallback(
    (index, item) => {
      const {name} = item
      setdroppedChoiceNames(
        update(droppedChoiceNames, name ? { $push: [name] } : { $push: [] })
      )
      setDndAnswerSpaces(
        update(dndAnswerSpaces, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedChoiceNames, dndAnswerSpaces]
  )

  const inputAmount = (input) => {
    setAmount(
      update(amount, {
        [input.index]: {
          input: {
            $set: amount
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
        {dndAnswerSpaces.map(({ accepts, lastDroppedItem }, index) => (
          <div key={index} style={{ float: "left" }}>
            <AccountSpace
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={item => handleDrop(index, item)}
            />
            <AmountInput
              amountInput={inputAmount}
              amountInputIndex={index}
            />
          </div>
        ))}
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {choices.map(({ name, type }, index) => (
          <AccountChoice
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
      <div>
        <JudgementButton
          amount={amount}
          accountSpaces={dndAnswerSpaces}
        />
      </div>
    </div>
  )
}

export default WorkArea
