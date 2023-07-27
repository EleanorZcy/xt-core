import Big from "big.js"
import { divide, floatDivide, floatMultiply, genMessageId, isEncodeURILike, isFunction, isNormalObject, isNumber, isPromise, minus, multiply, plus, randomNumber, toNonExponential } from "./common"

describe('isNumber', () => {
  it('normal case', () => {
    [1, 100, Infinity].forEach(i => {
      expect(isNumber(i)).toEqual(true)
    })
  })
  it('error case', () => {
    ['aa', '11', true, false, null, undefined, Symbol(), {}].forEach(i => {
      expect(isNumber(i)).toEqual(false)
    })
  })
})

describe('randomNumber', () => {
  it('normal case', () => {
    expect(randomNumber(0)).toHaveLength(0)
    expect(randomNumber(10)).toHaveLength(10)
    expect(randomNumber(15)).toHaveLength(15)
    expect(randomNumber(20)).toHaveLength(20)
    expect(randomNumber()).toHaveLength(20)
    expect(randomNumber(100)).toHaveLength(100)
    expect(randomNumber(1000)).toHaveLength(1000)
  })
  it('error case', () => {
    expect(() => randomNumber(-1)).toThrowError('len must great than -1')
    expect(() => randomNumber(undefined)).not.toThrowError('len must be an Number')
    expect(() => randomNumber(null as any)).toThrowError('len must be an Number')
    expect(() => randomNumber({} as any)).toThrowError('len must be an Number')
    expect(() => randomNumber('aaa' as any)).toThrowError('len must be an Number')
    expect(() => randomNumber('111' as any)).toThrowError('len must be an Number')
    expect(() => randomNumber(true as any)).toThrowError('len must be an Number')
    expect(() => randomNumber(Symbol() as any)).toThrowError('len must be an Number')
  })
})

describe('genMessageId', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('normal case', () => {
    expect(() => genMessageId()).not.toThrowError()
    expect(genMessageId()).toHaveLength(21)
  })
  it('content matched to Date', () => {
    const date = new Date(2023, 6, 27)
    vi.setSystemTime(date)
    expect(genMessageId().slice(0, 8)).toEqual('20230727')
    expect(genMessageId().slice(8, 16)).toEqual('00000000')
  })
})

describe('isEncodeURILike', () => {
  const mockDatas1 = [
    [
      'https://www.baidu.com',
      'https://www.baidu.com/path/to/app',
      'www.baidu.com/path/to/app',
      'www.baidu.com/',
      'www.baidu.com',
      'baidu.com'
    ],
    [
      'https%3A%2F%2Fwww.baidu.com',
      'www.baidu.com%2Fpath%2Fto%2Fapp',
      'baidu.com%2F'
    ]
  ]
  it('正常 url', () => {
    mockDatas1[0].forEach(i => {
      expect(isEncodeURILike(i)).toStrictEqual(false)
    })
  })

  it('编码过的 url', () => {
    mockDatas1[1].forEach(i => {
      expect(isEncodeURILike(i)).toStrictEqual(true)
    })
  })
})

describe('toNonExponential', () => {
  const mockDatas1 = [
    [4.496794759834739e-9, '0.000000004496794759834739',],
    [4.496794759834739e+9, '4496794759.834739'],
    [null, null],
    ['aaa', 'aaa'],
    [' ', ' '],
    [{}, {}],
    [undefined, undefined],
    [true, true],
    [false, false]
  ]
  it('normal', () => {
    mockDatas1.forEach((pair) => {
      expect(toNonExponential(pair[0] as any)).toEqual(pair[1])
    })
  })
})

describe('floatMultiply', () => {
  it(' 1 * 100 = 100', () => {
    expect(floatMultiply(1, 100)).toEqual(100)
  })

  it('0.7 * 100 = 70.00', () => {
    expect(floatMultiply(0.7, 100)).toEqual(70)
  })

  it('19.9 * 100 = 1990', () => {
    expect(floatMultiply(19.9, 100)).toEqual(1990)
  })

  it('1306377.64 * 100 = 130637764', () => {
    expect(floatMultiply(1306377.64, 100)).toEqual(130637764)
  })

  it('1306377.64 * 10 * 10 equasl 130637764', () => {
    expect( floatMultiply(floatMultiply(1306377.64, 10) as number, 10)).toEqual(130637764)
  })

  it('0.7 * 180 = 126', () => {
    expect(floatMultiply(0.7, 180)).toEqual(126)
  })

  it('9.7 * 100 = 970', () => {
    expect(floatMultiply(9.7, 100)).toEqual(970)
  })

  it('39.7 * 100 = 3970', () => {
    expect(floatMultiply(39.7, 100)).toEqual(3970)
  })

  it('0 * 0.7 = 0', () => {
    expect(floatMultiply(0, 0.7)).toEqual(0)
  })

  it('9.7 * 0 = 0', () => {
    expect(floatMultiply(9.7, 0)).toEqual(0)
  })

  it('9.7 * null = null', () => {
    expect(floatMultiply(9.7, null as any)).toEqual(null)
  })

  it('0 * null = null', () => {
    expect(floatMultiply(0, null as any)).toEqual(null)
  })
})

describe('floatDivide', () => {
  it ('100 / 100 = 1', () => {
    expect(floatDivide(100, 100)).toEqual(1)
  })

  // in JS：0.7/100=0.006999999999999999
  it('0.7 / 100 = 0.007', () => {
    expect(floatDivide(0.7, 100)).toEqual(0.007)
  })

  it('0.3 / 0.1 = 3', () => {
    expect(floatDivide(0.3, 0.1)).toEqual(3)
  })

  it('0.69 / 10 = 0.069', () => {
    expect(floatDivide(0.69, 10)).toEqual(0.069)
  })

  it('0.7 / 0 = null', () => {
    expect(floatDivide(0.7, 0)).toEqual(null)
  })

  it('0.7 / null = null', () => {
    expect(floatDivide(0.7, null as any)).toEqual(null)
  })

  it('0 / 0 = null', () => {
    expect(floatDivide(0, 0)).toEqual(null)
  })

  it('0 / 10 = 0', () => {
    expect(floatDivide(0, 10)).toEqual(0)
  })
})

describe('divide/div', () => {
  it ('100 / 100 = 1', () => {
    expect(divide(100, 100).toNumber()).toEqual(1)
  })

  // in JS：0.7/100=0.006999999999999999
  it('0.7 / 100 = 0.007', () => {
    expect(divide(0.7, 100).toNumber()).toEqual(0.007)
  })

  it('0.3 / 0.1 = 3', () => {
    expect(divide(0.3, 0.1).toNumber()).toEqual(3)
  })

  it('0.69 / 10 = 0.069', () => {
    expect(divide(0.69, 10).toNumber()).toEqual(0.069)
  })

  it('0.7 / 0 = null', () => {
    expect(() => divide(0.7, 0)).toThrowError('Division by zero')
  })

  it('0.7 / null = null', () => {
    expect(() => divide(0.7, null as any)).toThrowError('Invalid number')
  })

  it('0 / 0 = null', () => {
    expect(() => divide(0, 0)).toThrowError('Division by zero')
  })

  it('0 / 10 = 0', () => {
    expect(divide(0, 10).toNumber()).toEqual(0)
  })
})

describe('multiply/times', () => {
  it(' 1 * 100 = 100', () => {
    expect(multiply(1, 100).toNumber()).toEqual(100)
  })

  it('0.7 * 100 = 70.00', () => {
    expect(multiply(0.7, 100).toNumber()).toEqual(70)
  })

  it('19.9 * 100 = 1990', () => {
    expect(multiply(19.9, 100).toNumber()).toEqual(1990)
  })

  it('1306377.64 * 100 = 130637764', () => {
    expect(multiply(1306377.64, 100).toNumber()).toEqual(130637764)
  })

  it('1306377.64 * 10 * 10 = 130637764', () => {
    expect( multiply(multiply(1306377.64, 10), 10).toNumber()).toEqual(130637764)
  })

  it('0.7 * 180 = 126', () => {
    expect(multiply(0.7, 180).toNumber()).toEqual(126)
  })

  it('9.7 * 100 = 970', () => {
    expect(multiply(9.7, 100).toNumber()).toEqual(970)
  })

  it('39.7 * 100 = 3970', () => {
    expect(multiply(39.7, 100).toNumber()).toEqual(3970)
  })

  it('0 * 0.7 = 0', () => {
    expect(multiply(0, 0.7).toNumber()).toEqual(0)
  })

  it('9.7 * 0 = 0', () => {
    expect(multiply(9.7, 0).toNumber()).toEqual(0)
  })

  it('9.7 * null = null', () => {
    expect(() => multiply(9.7, null as any).toNumber()).toThrowError('Invalid number')
  })

  it('0 * null = null', () => {
    expect(() => multiply(0, null as any)).toThrowError('Invalid number')
  })
})

describe('plus', () => {
  it("plus(a, b) instaceOf Big", () => {
    expect(plus(1, 2)).toBeInstanceOf(Big)
  })

  it("0.1 + 0.2 = '0.3'", () => {
    expect(plus(0.1, 0.2).toFixed(1)).toEqual('0.3')
  })

  it("0.7 + 0.1 = '0.8'", () => {
    expect(plus(0.7, 0.1).toFixed(1)).toEqual('0.8')
  })

  it("0.2 + 0.4 = '0.6'", () => {
    expect(plus(0.2, 0.4).toFixed(1)).toEqual('0.6')
  })

  it("'0.1' + '0.2' = '0.3'", () => {
    expect(plus('0.1', '0.2').toFixed(1)).toEqual('0.3')
  })

  it("'0.7' + '0.1' = '0.8'", () => {
    expect(plus('0.7', '0.1').toFixed(1)).toEqual('0.8')
  })

  it("'0.2' + '0.4' = '0.6'", () => {
    expect(plus('0.2', '0.4').toFixed(1)).toEqual('0.6')
  })

  it("0.2 + 0.4 + 0.4 = '1.0'", () => {
    expect(plus(0.2, 0.4).plus(0.4).toFixed(1)).toEqual('1.0')
  })

  // error
  it("null + 0.1 throw error", () => {
    expect(() => plus(null as any, 0.1)).toThrowError("Invalid number")
  })

  it("undefined + 0.1 throw error", () => {
    expect(() => plus(undefined as any, 0.1)).toThrowError("Invalid number")
  })
})

describe('minus', () => {
  it("minus(a, b) instaceOf Big", () => {
    expect(minus(1, 2)).toBeInstanceOf(Big)
  })

  it("1.5 - 1.2 = '0.3'", () => {
    expect(minus(1.5, 1.2).toFixed(1)).toEqual('0.3')
  })

  it("0.3 - 0.2 = '0.1'", () => {
    expect(minus(0.3, 0.2).toFixed(1)).toEqual('0.1')
  })

  it("'1.5' - '1.2' = '0.3'", () => {
    expect(minus('1.5', '1.2').toFixed(1)).toEqual('0.3')
  })

  it("'0.3' - '0.2' = '0.1'", () => {
    expect(minus('0.3', '0.2').toFixed(1)).toEqual('0.1')
  })

  it("0.3 - 0.2 - 0.1 = '0.0'", () => {
    expect(minus(0.3, 0.2).minus(0.1).toFixed(1)).toEqual('0.0')
  })

  // error
  it("null - 0.1 throw error", () => {
    expect(() => minus(null as any, 0.1)).toThrowError("Invalid number")
  })

  it("undefined - 0.1 throw error", () => {
    expect(() => minus(undefined as any, 0.1)).toThrowError("Invalid number")
  })
})

describe('isFunction', () => {
  it('function', () => {
    expect(isFunction(() => {})).toEqual(true)
    expect(isFunction(function () {})).toEqual(true)
  })
  it('not function', () => {
    expect(isFunction('')).toEqual(false)
    expect(isFunction(1231)).toEqual(false)
    expect(isFunction(undefined)).toEqual(false)
    expect(isFunction(undefined)).toEqual(false)
    expect(isFunction(null)).toEqual(false)
    expect(isFunction({})).toEqual(false)
  })
})

describe('isPromise', () => {
  it('promise', () => {
    expect(isPromise(new Promise((resolve) => { resolve(true) }))).toEqual(true)
    expect(isPromise(Promise.resolve())).toEqual(true)
    expect(isPromise({
      then: () => {}
    })).toEqual(true)
  })
  it('not promise', () => {
    expect(isPromise('')).toEqual(false)
    expect(isPromise(12)).toEqual(false)
    expect(isPromise(undefined)).toEqual(false)
    expect(isPromise(null)).toEqual(false)
    expect(isPromise(() => {})).toEqual(false)
    expect(isPromise({})).toEqual(false)
  })
})

describe('isNormalObject', () => {
  it('normal object', () => {
    expect(isNormalObject({})).toEqual(true)
  })
  it('not normal object', () => {
    expect(isNormalObject(() => {})).toEqual(false)
    expect(isNormalObject([])).toEqual(false)
  })
})
