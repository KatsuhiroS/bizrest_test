import React from 'react'
import packsBase from 'packs/packsBase'

export default class LessonShow extends packsBase {
  loaded() {
    console.log('hoge')
  }
}

new LessonShow()

