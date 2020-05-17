// react源码地址：https://github.com/facebook/react/blob/master/packages/react/src/React.js

import {
    createVNode
} from "./my-vdom"

/**
 * 创建虚拟结点树
 * @param {*} type 标签声明
 * @param {*} props 属性对象
 * @param  {...any} children 子元素数组
 */
function createElement(type, props, ...children) {
    props.children = children
    delete props.__source
    delete props._self
    const vType = getVType(type)

    return createVNode(vType, type, props)
}

/**
 * 根据标签类声明判断虚拟结点类型
 * @param {*} type 标签类型
 */
function getVType(type) {
    let vType;

    if (typeof type === 'string') {
        vType = 1 // 原生标签
    } else if (typeof type === 'function') {
        if (type.isClassComponent) {
            vType = 2 // 类组件
        } else {
            vType = 3 // 函数组件
        }
    }

    return vType
}

export class Component {
    // 标记当前组件是class组件
    static isClassComponent = true

    constructor(props){
        this.props = props
        this.state = {}
    }

    setState(){
        // ...
    }
}


export default {
    createElement,
}