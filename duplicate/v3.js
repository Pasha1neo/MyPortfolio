const n = [1, 1, 2, 1, 3, 2, 4, 4, 2, 3, 4]
const p = [1, 2, 1, 2, 3, 4, 1, 3, 5, 3, 6]
const w = [2, 1, 3, 2, 3, 2, 1, 2, 3, 2, 1]
const _ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Object is сравнивает одинаковость массивов сделать эксперементальный вариант для V4
// Сделать как обьект или класс
// сравнение в итераторе не учитывает index И значений в n массиве ИСПРАВИТЬ
function iterator(colIndex, BaseArr) {
    console.log(colIndex)
    const tempCollect = {}
    const Test = {}
    const except = []
    for (const prop in colIndex) {
        colIndex[prop].forEach((value) => {
            const result = BaseArr.some((el, index) => {
                const condition = except.length === 0 ? true : except.some((i) => i !== value)
                return condition ? BaseArr[value] === el && index === value : false
            })
            if (result) {
                except.push(value)
                const check = tempCollect.hasOwnProperty(`${BaseArr[value]}`)
                if (!check) {
                    tempCollect[`${BaseArr[value]}`] = [value]
                    Test[`${prop}`] = {[`${BaseArr[value]}`]: [value]}
                }
                if (check) {
                    tempCollect[`${BaseArr[value]}`].push(value)
                }
            }
        })
    }
    for (const prop in tempCollect) {
        if (tempCollect[prop] > !1) delete tempCollect[prop]
    }
    return tempCollect
}

function checkDuplicates(name, price, weight) {
    const dColNames = {}
    name.forEach((item, index) => {
        const result = name.some((sItem, sIndex) => item === sItem && index !== sIndex)
        if (result) {
            const check = dColNames.hasOwnProperty(`${item}`)
            if (!check) dColNames[`${item}`] = [index]
            if (check) dColNames[`${item}`].push(index)
        }
    })
    const dCollectPrices = iterator(dColNames, price)
    // const dCollectWeights = iterator(dCollectPrices, weight)
    // return dCollectWeights
    // return Object.values(dCollectWeights)
    // return Object.values(dCollectWeights).flat()
}
const result = checkDuplicates(n, p, w)
// console.log(result)
