<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@dinofe/xt-core](./xt-core.md) &gt; [minus](./xt-core.minus.md)

## minus() function

两数相减

**Signature:**

```typescript
export declare function minus(arg1: string | number | TBig, arg2: string | number | TBig): TBig;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arg1 | string \| number \| TBig | 减数 1 |
|  arg2 | string \| number \| TBig | 减数 2 |

**Returns:**

TBig

Big

## Remarks

修复了 js 减法精度丢失问题，基于 [big.js](https://www.npmjs.com/package/big.js) 实现

