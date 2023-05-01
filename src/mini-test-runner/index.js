// 模拟实现自动执行所有的测试脚本
// 1.获取所有的测试脚本 -> *.spec.js
// 2.执行所有脚本

import { glob } from "glob";
import fs from "fs/promises";
import { build } from "esbuild";

const files = glob.sync("*.spec.js");
console.log("所有的测试文件", files);
for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8");
  console.log("file content", fileContent);
  // eslint-disable-next-line no-new-func
  // new Function(fileContent)();
  // 这里还不能执行，因为将 import 语法放到函数中肯定是无法运行的
  // 可以想办法将测试文件和测试框架代码打包到一起
  // 可以使用babel或者esbuild打包
  await runModule(fileContent);
}

async function runModule(fileContent) {
  const res = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    write: false, // 不输出成文件
    bundle: true, // 将多个文件打包到一起
    target: "esnext",
  });

  console.log(res);
  console.log(res.outputFiles[0].text);
  // eslint-disable-next-line no-new-func
  new Function(res.outputFiles[0].text)();
}
