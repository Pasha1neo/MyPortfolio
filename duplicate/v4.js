const n = ['паша', 'паша', 'андрей', 'саня', 'игорь', 'лёша', 'паша', 'саня', 'саня']
const p = [19, 17, 18, 15, 30, 15, 19, 15, 15]
const w = [0, 0, 10, 5, 3, 3, 0, 5, 5]
// Object is Интересно проверить этот метод для коллекций из обьектов
// Рефакторинг кода под class или объект
// Описание работы
// iterator принимает базовый массив n p или w
// И возвращает {key: [val1, val2...]} где key Название категории в которой идёт поиск одинаковых значений val Индексы одинаковых элементов в базовом массиве
// comparer сравнивает Пару Obj {key: [values]} данных из iterator на совпадающие индексы не менее 2х возвращает так же {key: [val1, val2...]} где value это индексы дубликатов категории
// функция возвращает {key: [val1, val2]} где key категория n массива, а val индексы дубликатов n, p, w
function iterator(BaseArr) {
    const tempMap = new Map()
    BaseArr.forEach((value, index) => {
        const result = BaseArr.some((val, ind) => value === val && index !== ind)
        if (result) {
            const check = tempMap.has(value)
            if (!check) tempMap.set(value, [])
            tempMap.get(value).push(index)
        }
    })
    return Object.fromEntries(tempMap)
    // return Array.from(tempMap.values()).flat()
    // .sort((a, b) => a - b)
}
function comparer(N, P) {
    const tempMap = new Map()
    for (const prop in N) {
        for (const propP in P) {
            const array = N[prop].reduce((res, current) => {
                const result = P[propP].includes(current)
                if (result) res.push(current)
                return res
            }, [])
            if (array.length > 1) tempMap.set(prop, array)
        }
    }
    return Object.fromEntries(tempMap)
}
function checkDuplicates(name, price, weight) {
    const dNames = iterator(name)
    const dPrices = iterator(price)
    const dWeights = iterator(weight)
    const result = comparer(dNames, dPrices)
    return comparer(result, dWeights)
}
const result = checkDuplicates(n, p, w)
console.log(result)
