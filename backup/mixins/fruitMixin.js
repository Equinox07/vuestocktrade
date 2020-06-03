export const fruitMixin = {
    data: function () {
        return {
            text: 'Holla Mundo',
            fruits: ['Apple', 'Banana', 'Mango'],
            filterText: ''
        }
    },
    computed: {
        filteredFruit: function () {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
};