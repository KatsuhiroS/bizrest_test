import React, { Component } from "react";
import {
  DragSource,
  ConnectDragSource,
  DragSourceConnector,
  DragSourceMonitor
} from "react-dnd";

const style: React.CSSProperties = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};

const accountChoiceSource = {
  beginDrag(props: AccountChoiceProps) {
    return {
      name: props.name
    };
  }
};

class AccountChoice extends Component<AccountChoiceProps> {
  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    return (
      connectDragSource &&
      connectDragSource(<div style={{ ...style, opacity }}>{name}</div>)
    );
  }
}

export default DragSource(
  (props: AccountChoiceProps) => props.type,
  accountChoiceSource,
  (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(AccountChoice);
