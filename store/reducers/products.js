import PRODUCTS from '../../data/dummy-data'

const intialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};


export default (state = intialState, action) => {
    return state
}