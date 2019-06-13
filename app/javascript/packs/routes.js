import React from 'react'
import Top from '../src/components/Top/Top'
import Subjects from '../src/components/Subjects'
import Lessons from '../src/components/Lessons'
import MypageEdit from '../src/components/MypageEdit/MypageEdit'
import Exercise from '../src/components/Exercises'

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Top />
  },
  {
    path: "/subjects",
    exact: true,
    main: () => <Subjects />
  },
  {
    path: "/subjects/accounting",
    exact: true,
    main: () => <Lessons />
  },
  {
    path: "/accounting/study/:lesson_id/:chapter_id",
    exact: true,
    main: () => <Exercise />
  }
]
