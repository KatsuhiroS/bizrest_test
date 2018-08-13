// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { render } from 'react-dom'
import Top from './components/Top/Top.jsx'
import Mypage from './components/Mypage/Mypage.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (() => {
    switch (location.pathname) {
      case '/':
        return <Top />
      case '/mypage':
        return <Mypage />
    }
  })()

  render(
    rootComponent,
    document.body.appendChild(document.createElement('div')),
  )
})
