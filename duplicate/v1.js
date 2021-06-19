const names = ['ball', 'bat', 'glove', 'glove', 'glove']
const prices = [2, 3, 1, 2, 1]
const weights = [2, 5, 1, 1, 1]

function checkDuplicates(name, price, weight) {
    const dNamesIndex = []
    const dNames = name.filter((item, index) => {
        const result = name.some((sItem, sIndex) => item === sItem && index !== sIndex)
        if (result) dNamesIndex.push(index)
        return result
    })
    const dPricesIndex = []
    dNamesIndex.reduce((res, i) => {
        if (price[res] === price[i]) dPricesIndex.push(res, i)
        return res
    })
    const dWeights = []
    dPricesIndex.reduce((res, i) => {
        if (weight[res] === weight[i]) dWeights.push(res, i)
        return res
    })
    return dWeights.length
}
const result = checkDuplicates(names, prices, weights)
console.log(result)
