/**
 *  设计思想：
 *  - FormItem一定要绑定 displayName 属性，用于让 <Form> 识别<FormItem />
 *  - 声明 onChange 方法，通过 props 提供给<Input>，作为改变 value 的回调函数。
 *  - FormItem过滤掉除了 input 以外的其他元素。
*/

import React from 'react';

export default function FormItem(props){
  const { children , name  , handleChange , value , label  } = props
  const onChange = (value) => {
    // 通知上一次 value 已经改变
    handleChange(name,value)
  }
 return <div className='form' >
    <span className="label" >{ label }:</span>
    {
      React.isValidElement(children) && children.type.displayName === 'input' 
      ? React.cloneElement(children,{ onChange , value })
      : null
    }
 </div>    
}

FormItem.displayName = 'formItem'