/*jshint esversion: 6 */
const state = {
    funds: 1000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record){
            record.quantity += quantity;
        }else{
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity;
        }else{
            state.stocks.splice(state.stocks.indexOf(record, 1));
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTOFOLIO' (state, portofolio) {
        state.funds = portofolio.funds;
        state.stocks = portofolio.stockPortofolio ? portofolio.stockPortofolio : [];
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortofolio: (state, getters) => {
        console.log('Getting Purchased Stocks');
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    funds(state){
        return state.funds;
    }

};

export default {
    state,
    actions,
    mutations,
    getters
};