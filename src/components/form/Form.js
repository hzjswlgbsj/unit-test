/**
 *  设计思想：
 *  - 首先考虑到 <Form> 在不使用 forwardRef 前提下，最好是类组件，因为只有类组件才能获取实例。
 *  - 创建一个 state 下的 formData属性，用于收集表单状态。
 *  - 要封装 重置表单，提交表单，改变表单单元项的方法。
 *  - 要过滤掉除了 FormItem 元素之外的其他元素，那么怎么样知道它是不是FormItem，这里教大家一种方法，
 *    可以给函数组件或者类组件绑定静态属性来证明它的身份，然后在遍历 props.children 的时候就可以在
 *    React element 的 type 属性(类或函数组件本身)上，验证这个身份，在这个 demo 项目，给函数绑定的
 *    displayName 属性，证明组件身份。
 *  - 要克隆 FormItem 节点，将改变表单单元项的方法 handleChange 和表单的值 value 混入 props 中。
*/

import React from 'react';

export default class Form extends React.Component {
  state = {
    formData:{}
  }

  /* 用于提交表单数据 */
  submitForm=(cb)=>{
    cb({ ...this.state.formData })
  } 

  /* 获取重置表单数据 */
  resetForm=()=>{
     const { formData } = this.state
     Object.keys(formData).forEach(item=>{
         formData[item] = ''
     })
    
     this.setState({
         formData
     })
  }

  /* 设置表单数据层 */
  setValue = (name, value)=>{
    this.setState({
    formData: {
      ...this.state.formData,
      [name]:value
    }
    })
  }

  render(){
    const { children } = this.props
    const renderChildren = []
    React.Children.forEach(children, (child) => {
      if (child.type.displayName === 'formItem') {
        const { name } = child.props
        /* 克隆`FormItem`节点，混入改变表单单元项的方法 */
        const Children = React.cloneElement(child,{ 
          key:name ,                             /* 加入key 提升渲染效果 */
          handleChange:this.setValue ,           /* 用于改变 value */
          value:this.state.formData[name] ||  '' /* value 值 */
        }, child.props.children)
        renderChildren.push(Children)
      }
    })
    return renderChildren
  }
}
/* 增加组件类型type  */
Form.displayName = 'form'