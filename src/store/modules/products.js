import axios from "axios";

const state = {
    products : []
};
const getters = {
    allproducts: state => state.products
};
const actions = {
    async getproducts({commit}){
        const response = await axios.get("http://localhost:3000/products");
        commit("getproducts",response.data)
    },
    async addproduct({commit},product){
        const response = await axios.post("http://localhost:3000/products",product);
        commit("addproduct",response.data)
    },
    async deleteproduct({commit},id){
        await axios.delete(`http://localhost:3000/products/${id}`);
        commit("deleteproduct",id)
    }

};
const mutations = {
    getproducts:(state,products) => (state.products = products),
    addproduct:(state,product) => (state.products.unshift(product)),
    deleteproduct:(state,id) => (state.products.filter(product => product.id !== id))
};

export default {
    state, getters, actions, mutations
}