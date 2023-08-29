<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@dinofe/xt-core](./xt-core.md) &gt; [XApisauceInstance](./xt-core.xapisauceinstance.md)

## XApisauceInstance interface

HTTP 实例

**Signature:**

```typescript
export interface XApisauceInstance extends Omit<ApisauceInstance, 'any' | 'get' | 'delete' | 'head' | 'post' | 'put' | 'patch' | 'link' | 'unlink'> 
```
**Extends:** Omit&lt;[ApisauceInstance](./xt-core.apisauceinstance.md)<!-- -->, 'any' \| 'get' \| 'delete' \| 'head' \| 'post' \| 'put' \| 'patch' \| 'link' \| 'unlink'&gt;

## Remarks

1. 业务参数校验的transform修改了ApiResponse的属性，类型变成了XApiResponse 'any' \| 'get' \| 'delete' \| 'head' \| 'post' \| 'put' \| 'patch' \| 'link' \| 'unlink'这些方法类型定义需要重写

2. 示例对象post等方法的axiosConfig对象可覆盖创建示例对象时的config（除 'url' \| 'method' \| 'data' 之外）

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [any](./xt-core.xapisauceinstance.any.md) |  | &lt;T, U = T&gt;(config: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | TODO: 未知 |
|  [delete](./xt-core.xapisauceinstance.delete.md) |  | &lt;T, U = T&gt;(url: string, params?: {}, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送DELETE请求 |
|  [get](./xt-core.xapisauceinstance.get.md) |  | &lt;T, U = T&gt;(url: string, params?: {}, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送GET请求 |
|  [head](./xt-core.xapisauceinstance.head.md) |  | &lt;T, U = T&gt;(url: string, params?: {}, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送HEAD请求 |
|  [link](./xt-core.xapisauceinstance.link.md) |  | &lt;T, U = T&gt;(url: string, params?: {}, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送LINK请求 |
|  [patch](./xt-core.xapisauceinstance.patch.md) |  | &lt;T, U = T&gt;(url: string, data?: any, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送PATCH请求 |
|  [post](./xt-core.xapisauceinstance.post.md) |  | &lt;T, U = T&gt;(url: string, data?: any, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送POST请求 |
|  [put](./xt-core.xapisauceinstance.put.md) |  | &lt;T, U = T&gt;(url: string, data?: any, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送PUT请求 |
|  [unlink](./xt-core.xapisauceinstance.unlink.md) |  | &lt;T, U = T&gt;(url: string, params?: {}, axiosConfig?: [CustomAxiosRequestConfig](./xt-core.customaxiosrequestconfig.md)<!-- -->) =&gt; Promise&lt;[XApiResponse](./xt-core.xapiresponse.md)<!-- -->&lt;T, U&gt;&gt; | 发送UNLINK请求 |
