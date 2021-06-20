const a1 = ['aabaab', 'aaaaabb']
const a2 = ['bbabbc', 'abb']
// iterator преобразует строку в массив символов
// разделяет на категории a, b, c (соответственно)
// конечный результат получатеся такой: {a: [индексы одинаковых значений этой буквы] и по аналогии с другими}
// checker делает необходимые проверки
// Делает обьект в котором {key: [val1, val2]} key категория символов a, b, c... ; val1 и val2 кол-во дубликатов массива a1[n] и a2[n] в этой категории
// Далее идёт сравнение где есть уловие что val1 - val2 = result <= 3 то есть разница между ним не более 3
// и проверка условия где выполняется сравнение (которое выше) и условие что длинна массивов одинакова
// equalStrings конечный результат массив из значений ['YES', 'NO] в котором говорится что a1[n] и a2[n] соответствуют условию
function iterator(arr) {
    const tempMap = new Map()
    arr.forEach((value, index) => {
        const check = tempMap.has(value)
        if (!check) tempMap.set(value, [])
        tempMap.get(value).push(index)
    })
    const unsorted = Object.fromEntries(tempMap)
    const sorted = {}
    Object.keys(unsorted)
        .sort()
        .forEach(function (key) {
            sorted[key] = unsorted[key]
        })
    return sorted
}
function checker(a1, a2, cond2) {
    const tempMap = new Map()
    let result = 'Yes'
    for (const i in a1) {
        const check = tempMap.has(i)
        if (!check) tempMap.set(i, [])
        tempMap.get(i).push(a1[i].length)
        tempMap.get(i).push(a2[i]?.length || 0)
    }
    for (const i in a2) {
        !tempMap.has(i) && tempMap.set(i, [0, a2[i].length])
    }
    const tempObj = Object.fromEntries(tempMap)
    for (const key in tempObj) {
        const cond = Math.abs(tempObj[key][0] - tempObj[key][1])
        if (cond > 3 && cond2) result = 'No'
    }
    return result
}
function equalStrings(a1, a2) {
    const result = []
    for (let i = 0; i < a1.length; i++) {
        const arr1 = a1[i].split('')
        const arr2 = a2[i].split('')
        const sortArr1 = iterator(arr1)
        const sortArr2 = iterator(arr2)
        const condLength = a1[i].length !== a2[i].length
        result.push(checker(sortArr1, sortArr2, condLength))
    }
    return result
}
const result = equalStrings(a1, a2)
console.log(result)
