// react-dom源码地址：https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOM.js

import {
    initVNode
} from "./my-vdom"

/**
 * 渲染虚拟dom到页面中
 * @param {*} vNode 虚拟dom树
 * @param {*} container 真实dom容器
 */
function render(vNode, container) {
    // container.innerHTML = `<pre>${JSON.stringify(vNode, null, 2)}</pre>`
    const dom = initVNode(vNode)
    container.appendChild(dom)
}

export default {
    render
}