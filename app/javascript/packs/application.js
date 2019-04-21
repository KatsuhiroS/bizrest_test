import React from 'react'
import { render } from 'react-dom'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Top from '../src/components/Top/Top'
import Subject from '../src/components/Subjects/Subject'
import Subjects from '../src/components/Subjects/Subjects'
import MypageEdit from '../src/components/MypageEdit/MypageEdit'
import Accounting from '../src/components/Lessons/Accounting'
import AccountingStudy from '../src/components/Study/AccountingStudy'

document.addEventListener('turbolinks:load', () => {
  const rootComponent = (() => {
    switch (location.pathname) {
      case '/':
        return <Top />
      case '/mypage/edit':
        return <MypageEdit />
      case '/subjects':
        return <Subject />
      case '/subjects/accounting/lessons':
        return <Subjects />
          //case '/subjects/accounting':
          //return <Accounting />
      case '/accounting/study':
        return (
          <DragDropContextProvider backend={HTML5Backend}>
            <AccountingStudy />
          </DragDropContextProvider>
        )
    }
  })()

  if (!rootComponent) return null

  render (
    rootComponent,
    document.getElementById('root'),
  )
})
