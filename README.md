# xt-core

应用于工具应用项目的核心库

# 安装

```bash
npm i -S @dinofe/xt-core
```

# 使用

es6

```js
import { genOAuthUrl } from '@dinofe/xt-core'

const wechatOptions = {
  wx_appid: '123456',
  wx_component_appid: '1123456',
  wx_scope: 'snsapi_base',
  redirect_url: 'https://www.baidu.com',
  state: '0'
}
const url = genOAuthUrl(wechatOptions)
```

es5

```js
const { genOAuthUrl } = require('@dinofe/xt-core')

const wechatOptions = {
  wx_appid: '123456',
  wx_component_appid: '1123456',
  wx_scope: 'snsapi_base',
  redirect_url: 'https://www.baidu.com',
  state: '0'
}
const url = genOAuthUrl(wechatOptions)
```
