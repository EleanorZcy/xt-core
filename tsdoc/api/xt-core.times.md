<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@dinofe/xt-core](./xt-core.md) &gt; [times](./xt-core.times.md)

## times() function

两浮点数相乘

**Signature:**

```typescript
export declare function times(arg1: number | string | TBig, arg2: number | string | TBig): TBig;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arg1 | number \| string \| TBig | 数字 1 |
|  arg2 | number \| string \| TBig | 数字 2 |

**Returns:**

TBig

Big

## Remarks

修复了 js 乘法精度丢失问题，基于 [big.js](https://www.npmjs.com/package/big.js) 实现

