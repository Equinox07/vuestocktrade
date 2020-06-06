/*jshint esversion: 6 */

import stocks from '../../data/stocks';
// import * as actions from './store/actions';
const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_SOCKS' (state, stocks) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    },
    // 'RND_SOCKS' (state, stocks) {
    //     state.stocks.forEach(stock => {
    //         stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    //     });
    // }
};


const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_SOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};