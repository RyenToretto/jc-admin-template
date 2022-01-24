# Vue 3 + Typescript + Vite

这个模板应该可以帮助你开始在 Vite 中使用 Vue 3 和 Typescript 进行开发。 该模板使用 Vue 3 `<script setup>` SFCs，查看[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 了解更多。

## 推荐的编辑器配置

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 编码注意

#### 1. .env 中变量使用
- 定义
```javascript
// 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
```
- 声明类型
```javascript
// 目的: TypeScript 的智能提示
// 实践: 在 .d.ts 中声明, 如本项目的 /types/viteEnv.d.ts
```

- vite.config.ts 中使用
```javascript
const env = parseEnv(loadEnv(mode, root));
```

- vue 中使用
```javascript
import.meta.env.VITE_SOME_KEY
```

#### 2. vite.config.ts
- 提示
```javascript
// CSS 相关选项 都包含在 css 字段下
// 所有 用于构建的选项 都包含在 build 字段下
// 所有的 server-specific options 都包含在 server 字段下
// => hostname 变更为 server.host
// => httpsOptions 已被删除，server.https 可以直接接收选项对象
// => chokidarWatchOptions 变更为 server.watch
```
