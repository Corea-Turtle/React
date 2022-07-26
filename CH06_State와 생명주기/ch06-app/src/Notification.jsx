import React, { Component } from 'react'

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.id, 'componentDIdMount() called.');
  }

  componentDidUpdate() {
    console.log(this.props.id, 'compnentDidUpdate() called.');
  }

  componentWillUnmount() {
    console.log(this.props.id, 'componentWillUnmount() called.');
  }

  render() {
    return (
      <>
        <div id="root" class="container">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">{this.props.header}</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr/>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            <span>
              {
                " "+new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()
              }
            </span>
            </p>
          </div>
        </div>
      </>
    )
  }
}
