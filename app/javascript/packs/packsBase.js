import React from 'react'
import reactDOM from 'react-dom'

export default class packsBase {
  constructor() {
    this.init()
  }

  init() {
    window.addEventListener('load', () => {
      this._loaded()
    })
  }

  _loaded() {
    this.loaded()
  }

  loaded() {
  }

  pageMount(component) {
    reactDOM.render(
      component,
      document.querySelector('#root')
    )
  }
}
