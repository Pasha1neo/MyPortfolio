const names = ['1', '2', '1', '4', '1', '6', '1', '2', '2']
const prices = [1, 2, 1, 4, 1, 6, 1, 3, 2]
const weights = [1, 2, 1, 4, 1, 6, 3, 2, 2]
// Решен баг с добавлением в dPricesIndex и dWeights повторного res то есть элемента который сравнивается на похожесть
// и добавлен вывод 0 при уникальности всех элементов что вызывало ошибку кода
function checkDuplicates(name, price, weight) {
    const dNamesIndex = []
    const dNames = name.filter((item, index) => {
        const result = name.some((sItem, sIndex) => item === sItem && index !== sIndex)
        if (result) dNamesIndex.push(index)
        return result
    })
    const dPricesIndex = []
    if (dNamesIndex.length === 0) return 0
    dNamesIndex.reduce((res, i) => {
        if (price[res] === price[i]) {
            if (dPricesIndex.length !== 0) {
                dPricesIndex.push(i)
            } else {
                dPricesIndex.push(res, i)
            }
        }
        return res
    })
    if (dPricesIndex.length === 0) return 0
    const dWeights = []
    dPricesIndex.reduce((res, i) => {
        if (weight[res] === weight[i]) {
            if (dWeights.length !== 0) {
                dWeights.push(i)
            } else {
                dWeights.push(res, i)
            }
        }
        return res
    })
    return dWeights.length
}
const result = checkDuplicates(names, prices, weights)
console.log(result)
