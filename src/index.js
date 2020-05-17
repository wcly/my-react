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

const users = [{
    name: 'tom',
    age: 20
}, {
    name: 'jerry',
    age: 20
}]

// babel解析jsx代码时会转换成执行Rect.createElement函数
// jsx转换查看：https://react.docschina.org/
const jsx = (
    <div id="demo" onClick={() => { console.log('触发点击事件') }}>
        <h1 style={{ color: 'red' }}>Hello World!</h1>
        <FuncComp name="函数组件" />
        <ClassComp name="类组件" />
        <ul>
            {users.map(user => (
                <li key={user.name}>{user.name},{user.age}</li>
            ))}
        </ul>
    </div>
)

ReactDOM.render(jsx, document.getElementById('root'))