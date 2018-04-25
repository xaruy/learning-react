import React from 'react'
import { render } from 'react-dom'

class HelloMessage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div> Hello {this.props.name}</div>
    }
}

render(<HelloMessage name="John" />, document.getElementById('root'))