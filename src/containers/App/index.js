import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Title from '../../components/Title'
import InputText from '../../components/InputText'
import ItemList from '../../components/ItemList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      items: [...new Array(5000)].map((_, i) => ({ index: i, name: `item:${i}`, value: i }))
    }
    this.setInputText = this.setInputText.bind(this)
  }

  setInputText(text) {
    this.setState(state => ({ text }))
  }

  addItem() {
    ReactDOM.unstable_deferredUpdates(() => {
      this.setState(state => ({
        items: state.items.map(item => Object.assign({}, item, { name: `item:${item.value + 1}`, value: item.value + 1 })),
      }), () => {
        this.timerId = setTimeout(() => this.addItem(), 100)
      })
    })
  }

  componentDidMount() {
    this.addItem()
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
  }

  render() {
    return [
      <Title key="titel" title="React v16.0 example" />,
      <InputText key="input" value={this.state.text} onChange={this.setInputText} />,
      <ItemList key="list" items={this.state.items} />
    ]
  }
}

export default App
