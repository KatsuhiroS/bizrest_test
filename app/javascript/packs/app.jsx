// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { render } from 'react-dom'
import Top from './components/Top/Top'
import Subjects from './components/Subjects/Subjects'
import MypageEdit from './components/MypageEdit/MypageEdit'
import Accounting from './components/Lessons/Accounting'
import AccountingStudy from './components/Study/AccountingStudy'

document.addEventListener('turbolinks:load', () => {
  const rootComponent = (() => {
    switch (location.pathname) {
      case '/':
        return <Top />
      case '/subjects':
        return <Subjects />
      case '/mypage/edit':
        return <MypageEdit />
      case '/subjects/accounting':
        return <Accounting />
      case '/accounting/study':
        return <AccountingStudy />
    }
  })()

  if (!rootComponent) return null

  render (
    rootComponent,
    document.getElementById('root'),
  )
})
