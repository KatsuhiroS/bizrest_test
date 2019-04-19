/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import { render } from 'react-dom'
import Top from './components/Top/Top'
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
