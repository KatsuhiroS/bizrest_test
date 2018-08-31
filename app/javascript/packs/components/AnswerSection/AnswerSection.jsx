import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import AccountSpace from "./AccountSpace";
import AccountChoice from "./AccountChoice";
import ItemTypes from "./ItemTypes";
const update = require("immutability-helper");

class AnswerSection extends Component<{}, AnswerSectionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      accountSpaces: [
        {
          accepts: [ItemTypes.CASH, ItemTypes.CAPITALSTOCK, ItemTypes.SALES],
          lastDroppedItem: null
        },
        {
          accepts: [ItemTypes.CASH, ItemTypes.CAPITALSTOCK, ItemTypes.SALES],
          lastDroppedItem: null
        },
        {
          accepts: [ItemTypes.CASH, ItemTypes.CAPITALSTOCK, ItemTypes.SALES],
          lastDroppedItem: null
        },
        {
          accepts: [ItemTypes.CASH, ItemTypes.CAPITALSTOCK, ItemTypes.SALES],
          lastDroppedItem: null
        }
      ],
      accountChoices: [
        { name: "現金", type: ItemTypes.CASH },
        { name: "売上高", type: ItemTypes.SALES },
        { name: "資本金", type: ItemTypes.CAPITALSTOCK }
      ],
      droppedAccountChoiceNames: []
    };
  }

  isDropped(accountChoiceName: string) {
    return this.state.droppedAccountChoiceNames.indexOf(accountChoiceName) > -1;
  }

  render() {
    const { accountChoices, accountSpaces } = this.state;

    return (
      <div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          {accountSpaces.map(({ accepts, lastDroppedItem }, index) => (
            <AccountSpace
              accepts={accepts}
              lastDroppedItem={lastDroppedItem}
              // tslint:disable-next-line jsx-no-lambda
              onDrop={item => this.handleDrop(index, item)}
              key={index}
            />
          ))}
        </div>

        <div style={{ overflow: "hidden", clear: "both" }}>
          {accountChoices.map(({ name, type }, index) => (
            <AccountChoice
              name={name}
              type={type}
              isDropped={this.isDropped(name)}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }

  handleDrop(index: number, item: { name: string }) {
    const { name } = item;
    const droppedAccountChoiceNames = name ? { $push: [name] } : {};

    this.setState(
      update(this.state, {
        accountSpaces: {
          [index]: {
            lastDroppedItem: {
              $set: item.name
            }
          }
        },
        droppedAccountChoiceNames
      })
    );
  }
}

export default DragDropContext(HTML5Backend)(AnswerSection);
