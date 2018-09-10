import React, { Component } from "react";
// import { DragDropContext } from "react-dnd";
// import { NativeTypes } from "react-dnd-html5-backend";
import AccountSpace from "./AccountSpace";
import AccountChoice from "./AccountChoice";
import ItemTypes from "./ItemTypes";
import withDragDropContext from './withDragDropContext';
import AmountInput from "./AmountInput";
import JudgementButton from "./JudgementButton";
const update = require("immutability-helper");

class AnswerSection extends Component<{}, AnswerSectionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      accountSpaces: [
        {
          accepts: [ItemTypes.ACCOUNTNAME],
          lastDroppedItem: null
        },
        {
          accepts: [ItemTypes.ACCOUNTNAME],
          lastDroppedItem: null
        },
      ],
      accountChoices: [
        { name: "現金", type: ItemTypes.ACCOUNTNAME },
        { name: "売上高", type: ItemTypes.ACCOUNTNAME },
        { name: "売掛金", type: ItemTypes.ACCOUNTNAME }
      ],
      droppedAccountChoiceNames: [],
      amount: [
        { amountInput: null },
        { amountInput: null },
        { amountInput: null }
      ]
    };
  }

  isDropped(accountChoiceName: string) {
    return this.state.droppedAccountChoiceNames.indexOf(accountChoiceName) > -1;
  }

  render() {
    const { accountChoices, accountSpaces } = this.state;
    return (
      <div style={{paddingLeft: '350px'}}>
        <h1>問題</h1>
        <h2>商品を売り上げ、500円を現金で受け取りました。</h2>
        <h2>この取引の仕訳を起票しましょう。</h2>
          <div>※黒い箱には、下記の選択肢からDrag&Dropで勘定科目を選びます。</div>
          <div style={{ marginBottom: '15px' }}>※白い箱には、金額を半角数字で入力します。</div>
          <div style={{ overflow: "hidden", clear: "both", float: "left" }}>
            {accountSpaces.map(({ accepts, lastDroppedItem }, index) => (
              <div key={index} style={{ float: "left" }}>
                <AccountSpace
                  accepts={accepts}
                  lastDroppedItem={lastDroppedItem}
                  // tslint:disable-next-line jsx-no-lambda
                  onDrop={item => this.handleDrop(index, item)}
                  accountSpaceIndex={index}
                />
                <AmountInput
                  amountInput={this.amountInput}
                  amountInputIndex={index}
                />
              </div>
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

        <div>
          <JudgementButton
            amount={this.state.amount}
            accountSpaces={this.state.accountSpaces}
          />
        </div>
        <div style={{ marginTop: '15px' }}>答えを埋めたら正誤判定ボタンを押します。</div>
      </div>
    );
  }

  amountInput = amountInput => {
    this.setState(
      update(this.state, {
        amount: {
          [amountInput.index]: {
            amountInput: {
              $set: amountInput.amount
            }
          }
        }
      })
    );
  };
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

export default withDragDropContext(AnswerSection);
