import React from 'react'
import { useDrop } from 'react-dnd'

const AnswerSpace = ({accept, lastDroppedItem, onDrop}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div ref={drop} style={Object.assign({}, style, { backgroundColor })} >
      {lastDroppedItem && <p>{lastDroppedItem.name}</p>}
    </div>
  )
}

const style = {
  height: "3.5rem",
  width: "12rem",
  marginBottom: "1.5rem",
  color: "white",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
}

export default AnswerSpace