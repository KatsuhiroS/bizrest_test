// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { render } from 'react-dom'
import Top from './components/Top/Top'
// import Mypage from './components/Mypage/Mypage'
import Subjects from './components/Subjects/Subjects'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import MypageEdit from './components/MypageEdit/MypageEdit'
import Accounting from './components/Lessons/Accounting'
import AccountingStudy from './components/Study/AccountingStudy'

document.addEventListener('turbolinks:load', () => {
  const rootComponent = (() => {
    switch (location.pathname) {
      case '/':
        return <Top />
      case '/mypage/edit':
        return <MypageEdit />
      case '/subjects/accounting':
        return <Accounting />
      case '/accounting/study':
        debugger
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
