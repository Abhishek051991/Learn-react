import React from "react";

import Title from "./header/Title"

export default class Header extends React.Component{
  handleChange (ele) {
    const title = ele.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input onChange={this.handleChange.bind(this)} placeholder={this.props.title}/>
      </div>
    );
  }
}
