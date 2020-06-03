<template>
    <div class="container">
        <app-header :quoteCounts="quotes.length" :maxQuotes="maxOfQuotes" ></app-header>
        <app-new-quote @quoteAdded="newQuote" ></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote" ></app-quote-grid>
        <div class="row mt-2">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Click on Quote to Delete</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import HeaderVue from './components/Header.vue'


    export default {
        data: function() {
            return {
                maxOfQuotes: 10,
                title: 'A New Title',
                quotes: [
                    'A simple Sample Quote'
                ]
            }
        },
        methods: {
            newQuote: function(quote) {
               if ( this.quotes.length >= this.maxOfQuotes) {
                   return alert('Please Delete Quotes First...');
               }
                this.quotes.push(quote);
            },
            deleteQuote: function(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
           'app-quote-grid': QuoteGrid,
           'app-new-quote': NewQuote,
           'app-header': HeaderVue
        }
    }
</script>

<style>
    /* div.component {
        border: 1px solid black;
        padding: 30px;
    } */
</style>
