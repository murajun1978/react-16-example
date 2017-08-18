import React, { PureComponent } from 'react'

class ItemList extends PureComponent {
  render() {
    return (
      <ul>
        { this.props.items.map(item => <li key={item.index}>{item.name}</li>) }
      </ul>
    )
  }
}

export default ItemList
