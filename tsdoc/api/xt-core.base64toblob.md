<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@dinofe/xt-core](./xt-core.md) &gt; [base64ToBlob](./xt-core.base64toblob.md)

## base64ToBlob() function

[Base64](https://developer.mozilla.org/zh-CN/docs/Glossary/Base64) 字符串转为 [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)

**Signature:**

```typescript
export declare function base64ToBlob(data: string, mimeType?: MIME_TYPE, sliceSize?: number): Blob;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  data | string | base64 字符串（可以包含<code>'data:image/jpegbas64,'</code>会被忽略） |
|  mimeType | [MIME\_TYPE](./xt-core.mime_type.md) | _(Optional)_ MIME 类型 |
|  sliceSize | number | _(Optional)_ 切片大小 |

**Returns:**

Blob

Blob 对象

## Example 1

默认用法

```ts
import { base64ToBlob, MIME_TYPE } from '@dinofe/xt-core/web'
const base64Str = '...'
const blob = base64ToBlob(base64Str, MIME_TYPE.JPG)
```

## Example 2

修改配置

```ts
import { base64ToBlob, MIME_TYPE } from '@dinofe/xt-core/web'
const base64Str = '...'
const blob = base64ToBlob(base64Str, MIME_TYPE.PNG, 1024)
```

