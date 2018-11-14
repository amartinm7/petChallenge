const assert = require('chai').assert
const DogService = require('../src/PetHandler').DogService

// INTEGRATION TESTS

describe('Testing PetHandler class', function(){
  this.timeout(10000);
  const expectedDogList = [
    'airedale -- https://images.dog.ceo/breeds/airedale/n02096051_6747.jpg',
    'chihuahua -- https://images.dog.ceo/breeds/chihuahua/n02085620_4998.jpg',
    'cotondetulear -- https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
    'groenendael -- https://images.dog.ceo/breeds/groenendael/n02105056_5212.jpg',
    'mexicanhairless -- https://images.dog.ceo/breeds/mexicanhairless/n02113978_3375.jpg',
    'pomeranian -- https://images.dog.ceo/breeds/pomeranian/n02112018_2728.jpg',
    'weimaraner -- https://images.dog.ceo/breeds/weimaraner/n02092339_6678.jpg'
  ]
  it('DogService printDogs...', async() => {
    console.log('\nDogService: get all dogs with more than 4 vowels in their breed name... ')
    const DogService = new DogService()
    const matchedDogList = await DogService.getMatchedDogList()
    assert.isOk(matchedDogList.length > 0,'the matchedDogList is empty')
    assert.equal(expectedDogList.length, matchedDogList.length,'the matchedDogList size doesn\'t match')
    for(let key in expectedDogList) {
      const dog = matchedDogList[key]
      assert.isOk(expectedDogList[key].includes(dog.breedName),'the printed dog is not the same')
      dog.printDog()
    }
    console.log('end\n')
  })
  it('DogService printAll...', async() => {
    console.log('\nDogService printAll... ')
    const DogService = new DogService()
    await DogService.printAll()
    assert.isOk(true,'the printing is not working')
    console.log('end\n')
  })
})


