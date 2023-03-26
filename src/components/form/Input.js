/**
 *  设计思想：
 *  - 绑定 displayName 标识input。
 *  - input DOM 元素，绑定 onChange 方法，用于传递 value 。
*/

import React from 'react';

export default function Input({ onChange , value }) {
  return  <input className="input"  onChange={ (e)=>( onChange && onChange(e.target.value) ) } value={value}  />
}
/* 给Component 增加标签 */
Input.displayName = 'input'