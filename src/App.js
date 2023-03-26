import React from "react";
import FormPage from "./pages/FormPage";
import BigDataPage from "./pages/BigDataPage";
export default function App() {
  return (
    <div className="box">
      {/* 测试自定义表单 */}
      {/* <FormPage /> */}

      {/* 测试大数据优化 */}
      <BigDataPage />
    </div>
  );
}
