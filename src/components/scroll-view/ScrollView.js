/**
 * - constructor： 做数据初始化，将滑动处理函数，做防抖处理。
 * - getDerivedStateFromProps: 将 props 中的 list ，合并到 state 。
 * - componentDidMount: 绑定监听 scroll 事件。
 * - shouldComponentUpdate：性能优化，只有 list 改变，渲染视图。
 * - render: 渲染视图，渲染 Item 。
 * - getSnapshotBeforeUpdate：保存组件更新前的 scrollview 容器高度。
 * - componentDidUpdate：根据渲染前后容器高度，计算一次高度变化量。
 * - componentWillUnmount：解除 scroll 事件监听器。
 */

import React from "react";

// 假设防抖
const debounce = (fn, time) => {
  console.log(time);
  return fn;
};

export default class ScrollView extends React.Component {
  /* -----自定义事件---- */
  /* 控制滚动条滚动 */
  handerScroll = (e) => {
    const { scroll } = this.props;
    scroll && scroll(e);
    this.handerScrolltolower();
  };
  /* 判断滚动条是否到底部 */
  handerScrolltolower() {
    const { scrolltolower } = this.props;
    const { scrollHeight, scrollTop, offsetHeight } = this.node;
    if (scrollHeight === scrollTop + offsetHeight) {
      scrolltolower && scrolltolower();
    }
  }

  node = null;

  /* ---——---生命周期------- */
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.handerScrolltolower = debounce(this.handerScrolltolower, 200);
  }
  /* 接收props, 合并到state */
  static getDerivedStateFromProps(newProps) {
    const { data } = newProps;
    return {
      list: data.list || [],
    };
  }

  /* 性能优化，只有列表数据变化，渲染列表 */
  shouldComponentUpdate(newProps, newState) {
    return newState.list !== this.state.list;
  }
  /* 获取更新前容器高度 */
  getSnapshotBeforeUpdate() {
    return this.node.scrollHeight;
  }
  /* 获取更新后容器高度 */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("scrollView容器高度变化:", this.node.scrollHeight - snapshot);
  }
  /* 绑定事件监听器 - 监听scorll事件 */
  componentDidMount() {
    this.node.addEventListener("scroll", this.handerScroll);
  }
  /* 解绑事件监听器 */
  componentWillUnmount() {
    this.node.removeEventListener("scroll", this.handerScroll);
  }
  render() {
    const { list } = this.state;
    const { component } = this.props;
    return (
      <div className="list_box" ref={(node) => (this.node = node)}>
        <div>
          {list.map(
            (item) => React.createElement(component, { item, key: item.id }) //渲染 Item 列表内容。
          )}
        </div>
      </div>
    );
  }
}
