import React from 'react'
import packsBase from 'packs/packsBase'
import TopPage from 'src/components/Top/Top'

export default class Top extends packsBase {
  loaded() {
    this.pageMount(<TopPage />)
  }
}

new Top()

