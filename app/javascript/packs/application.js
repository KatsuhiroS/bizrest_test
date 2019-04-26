import React from 'react'
import { render } from 'react-dom'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Top from '../src/components/Top/Top'
import Subjects from '../src/components/Subjects'
import Lessons from '../src/components/Lessons'
import MypageEdit from '../src/components/MypageEdit/MypageEdit'
import AccountingStudy from '../src/components/Study/AccountingStudy'

document.addEventListener('turbolinks:load', () => {
  const rootComponent = (() => {
    switch (location.pathname) {
      case '/':
        return <Top />
      case '/mypage/edit':
        return <MypageEdit />
      case '/subjects':
        return <Subjects />
      case '/subjects/accounting':
        return <Lessons />
      case '/accounting/study/1':
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
