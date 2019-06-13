import React from 'react'
import { render } from 'react-dom'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Top from '../src/components/Top/Top'
import Subjects from '../src/components/Subjects'
import Lessons from '../src/components/Lessons'
import MypageEdit from '../src/components/MypageEdit/MypageEdit'
import Exercise from '../src/components/Exercises'
import { routes } from './routes.js'
import { BrowserRouter , Route } from 'react-router-dom'

document.addEventListener('turbolinks:load', () => {
  const rootComponent = (() => {
    return (
      <BrowserRouter>
        <div>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.main}
              key={index}
            />
          ))}
        </div>
      </BrowserRouter>
    )
  })()

  if (!rootComponent) return null

  render (
    rootComponent,
    document.getElementById('root'),
  )
})
