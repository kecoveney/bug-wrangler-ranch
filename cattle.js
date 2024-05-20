const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes
    const breedCount = types.length;

    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * breedCount)
        const animal = types[randomType].breed
        cattle.push(animal)
    }

    return cattle
}

module.exports = { roundup }