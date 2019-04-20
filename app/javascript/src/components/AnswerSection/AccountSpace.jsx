import React, { Component } from "react";
import { DropTarget, ConnectDropTarget, DropTargetMonitor } from "react-dnd";

const style: React.CSSProperties = {
  height: "3.5rem",
  width: "12rem",
  // marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  // padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
};

const accountSpaceTarget = {
  drop(props: AccountSpaceProps, monitor: DropTargetMonitor) {
    props.onDrop(monitor.getItem());
  }
};

class AccountSpace extends Component<AccountSpaceProps> {
  render() {
    const {
      accepts,
      isOver,
      canDrop,
      connectDropTarget,
      lastDroppedItem
    } = this.props;
    console.log(this.props)
    const isActive = isOver && canDrop;
    let backgroundColor = "#222";
    if (isActive) {
      backgroundColor = "darkgreen";
    } else if (canDrop) {
      backgroundColor = "darkkhaki";
    }

    return (
      connectDropTarget &&
      connectDropTarget(
        <div style={{ ...style, backgroundColor }}>
          {lastDroppedItem && <p>{lastDroppedItem}</p>}
        </div>
      )
    );
  }
}

export default DropTarget(
  (props: AccountSpaceProps) => props.accepts,
  accountSpaceTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(AccountSpace);
