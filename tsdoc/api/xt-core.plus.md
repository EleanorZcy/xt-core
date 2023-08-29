<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@dinofe/xt-core](./xt-core.md) &gt; [plus](./xt-core.plus.md)

## plus() function

两数相加

**Signature:**

```typescript
export declare function plus(arg1: string | number | TBig, arg2: string | number | TBig): TBig;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arg1 | string \| number \| TBig | arg1 加数 1 |
|  arg2 | string \| number \| TBig | arg2 加数 2 |

**Returns:**

TBig

Big

## Remarks

修复了 js 加法精度丢失问题，基于 [big.js](https://www.npmjs.com/package/big.js) 实现
