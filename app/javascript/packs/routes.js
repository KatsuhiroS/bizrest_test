import React from 'react'
import { render } from 'react-dom'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Top from '../src/components/Top/Top'
import Subjects from '../src/components/Subjects'
import Lessons from '../src/components/Lessons'
import MypageEdit from '../src/components/MypageEdit/MypageEdit'
import Exercise from '../src/components/Exercises'

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => Top
  },
  {
    path: "/subjects",
    exact: true,
    main: () => Subjects
  },
  {
    path: "/subjects/accounting",
    exact: true,
    main: () => Lessons
  },
  {
    path: "/accounting/study/:id/:id",
    exact: true,
    main: () => Exercise
  }
]
