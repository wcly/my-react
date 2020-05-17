/**
 * 创建虚拟结点
 * @param {*} vType 元素类型：1-html元素，2-function组件，3-class组件
 * @param {*} type html标签蕾西
 * @param {*} props 属性
 */
function createVNode(vType, type, props) {
    const vNode = {
        vType,
        type,
        props
    }
    return vNode
}

/**
 * 将虚拟结点树转换为真实的dom树
 * @param {*} vNode 虚拟结点
 */
function initVNode(vNode) {
    const {
        vType
    } = vNode

    if (!vType) {
        // 文本结点
        return document.createTextNode(vNode)
    }
    if (vType === 1) {
        // 原生元素
        return createElement(vNode)
    } else if (vType === 2) {
        // 类组件
        return createClassComp(vNode)
    } else if (vType === 3) {
        // 函数组件
        return createFuncComp(vNode)
    }
}

/**
 * 根据虚拟结点创建dom元素
 * @param {*} vNode 虚拟结点
 */
function createElement(vNode) {
    const {
        type,
        props
    } = vNode
    const node = document.createElement(type)

    // 处理属性
    const {
        key,
        children,
        ...rest
    } = props
    Object.keys(rest).forEach(k => {
        // 处理特殊属性名
        if (k === 'className') {
            node.setAttribute('class', rest[k])
        } else if (k === 'htmlFor') {
            node.setAttribute('for', rest[k])
        } else {
            node.setAttribute(k, rest[k])
        }
    })

    // 递归子元素
    children.forEach(c => {
        node.appendChild(initVNode(c))
    })

    return node
}

/**
 * class组件转换
 * @param {*} vNode 虚拟结点
 */
function createClassComp(vNode) {
    const {
        type, // 这里的type是class组件的声明
        props
    } = vNode
    const instance = new type(props) // 生成一个实例
    const vdom = instance.render() // 调用render方法获取虚拟结点树

    return initVNode(vdom)
}

/**
 * function组件转换
 * @param {*} vNode 虚拟结点
 */
function createFuncComp(vNode) {
    const {
        type, // 这里的type是函数组件的声明
        props
    } = vNode
    const vdom = type(props) // 调用函数组件获取虚拟结点树

    return initVNode(vdom)
}

export {
    createVNode,
    initVNode
}