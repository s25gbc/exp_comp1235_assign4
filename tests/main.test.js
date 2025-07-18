import { expect } from "chai";

import * as studentFunctions from '../solution.js';

const {
    getRandomNumber = () => { console.warn("getRandomNumber is missing, check the function name"); },
    getCityData = () => { console.warn("getCityData is missing, check the function name"); },
    fetchProducts = () => { console.warn("fetchProducts is missing, check the function name"); },
    searchStorePrice = () => { console.warn("searchStorePrice is missing, check the function name");},
    getStarWarsCharacters = () => { console.warn("getStarWarsCharacters is missing, check the function name");}
} = studentFunctions;


describe('getRandomNumber()', () =>  {
    it('This async/wait function get a random number between 1-5',  async () => {
        expect(await getRandomNumber()).to.be.closeTo(1, 4)
    })
})

describe('getCityData()', () =>  {
    it('This asyn/wait function calls geocode to return data associated with a city',  async () => {
        expect((await getCityData("Toronto")).longt).to.deep.equal("-79.41946");
        //expect((await getCityData("Ottawa")).longt).to.deep.equal("-75.70914");
        //expect((await getCityData("New York")).longt).to.deep.equal("-73.97449");
    })
})


describe('fetchProducts()', () =>  {
    // This asyn/wait function fetchs products from the dummy json products api
    it('expect to return \'Essence Mascara Lash Princess\' for input 1',  async () => {
        expect(await fetchProducts(1)).to.deep.equal("Essence Mascara Lash Princess");
    })
    it('expect to return \'Annibale Colombo Sofa\' for input 12',  async () => {
        expect(await fetchProducts(12)).to.deep.equal("Annibale Colombo Sofa");
    })
    it('expect to return \'Black Whisk\' for input 50',  async () => {
        expect(await fetchProducts(50)).to.deep.equal("Black Whisk");
    })
    it('expect to return \'Could not get products: Error: HTTP error: 404\' for input 12',  async () => {
        expect(await fetchProducts(1000)).to.deep.equal("Could not get products: Error: HTTP error: 404");
    })

})

describe('searchStorePrice()', () =>  {
    // This asyn/wait function search products from store json api
    it('expect to return 1.89 for input \'chicken noodle soup\'',  async () => {
        expect(await searchStorePrice("chicken noodle soup")).to.deep.equal(1.89);
    })
    it('expect to return 1.40 for input \'tomato soup\'',  async () => {
        expect(await searchStorePrice("tomato soup")).to.deep.equal(1.40);
    })
    it('expect to return 2.85 for input \'spam\'',  async () => {
        expect(await searchStorePrice("spam")).to.deep.equal(2.85);
    })
    it('expect to return 0.99 for input \'refried beans\'',  async () => {
        expect(await searchStorePrice("refried beans")).to.deep.equal(0.99);
    })
})


describe('getStarWarsCharacters()', () =>  {
    // This promise calls the star wars api, returing JSON object {key, value} of characters
    it('expects the JSON object to contain info on R2-D2 under the respective key', async () => {
        expect((await getStarWarsCharacters()).characters["R2-D2"]).to.deep.equal("https://swapi.py4e.com/api/people/3/");
    })
    it('expects the JSON object to contain info on C-3PO under the respective key', async () => {
        expect((await getStarWarsCharacters()).characters["C-3PO"]).to.deep.equal("https://swapi.py4e.com/api/people/2/");
    })
    it('expects the JSON object to contain info on Luke Skywalker under the respective key', async () => {
        expect((await getStarWarsCharacters()).characters["Luke Skywalker"]).to.deep.equal("https://swapi.py4e.com/api/people/1/");
    })
})
