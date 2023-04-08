import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>Menu Icon</div>
            <span>{this.props.title}</span>
        <input type="text" placeholder="Search" name="search" id="" />
        <div>Search</div>
    </div>
    )
  }
}
