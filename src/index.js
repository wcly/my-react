import React, { Component } from './my-react'
import ReactDOM from './my-react-dom'

function FuncComp(props) {
    return <h2>hi {props.name}</h2>
}

class ClassComp extends Component {
    render() {
        return <h2>hi {this.props.name}</h2>
    }
}

// babel解析jsx代码时会转换成执行Rect.createElement函数
// jsx转换查看：https://react.docschina.org/
const jsx = (
    <div id="demo">
        <h1>Hello World!</h1>
        <FuncComp name="函数组件" />
        <ClassComp name="类组件" />
    </div>
)

ReactDOM.render(jsx, document.getElementById('root'))