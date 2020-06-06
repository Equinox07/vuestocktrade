/* jshint esversion: 6 */
import Vue from 'vue';
export const loadData =({commit}) => {
    Vue.http.get('data.json')
        .then((response) => {
            console.log(response.body);
            response = response.body;
            if(response){
                const stocks = response.stocks;
                const funds = response.funds;
                const stockPortofolio = response.stocksPortofolio;

                const portofolio = {
                    funds,
                    stockPortofolio
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTOFOLIO', portofolio);
            }
        },(error) => {
            console.log(error);
        });
};