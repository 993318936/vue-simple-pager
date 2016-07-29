# vue-pager
an all-round  pagination component based on vue
# Test
```
npm install .
npm run test
```
# Usage
```
npm install vue-simple-pager
```
## for simple use, you only need transfer props as follow:
```
props: {
    totalPage: { // total 
        type: Number,
        default: 1,
        required: true
    },
    showItems: { // such as 1 ... 34[5]67 ... 10
        type: Number,
        default: 5
    },
    showPrev: { // whether to show 'Prev'
        type: Boolean,
        default: true
    },
    showNext: { // whether to show 'Next'
        type: Boolean,
        default: true
    },
    showJump: { // whether to show 'Go'
        type: Boolean,
        default: true
    },
    initPage: { // initial page
        type: Number,
        default: 1
    },
    lang: { // language, supported 'en' for English and 'zh' for Chinese
        type: String,
        default: 'en'
    }
```
when page changed, it will emit an event named 'go-page', so in your template: 
```
<div id="app">
    <pager
        :total-page="totalPage"
        :init-page="page"
        @go-page="goPage"></pager>
    <p>page: {{page}}</p>
</div>
```
in your js:
```
import pager from 'vue-simple-pager'

new Vue({
    el: '#app',
    data () {
        return {
            page: 1,
            totalPage: 10
        }
    },
    methods: {
        goPage (data) {
            this.page = data.page
        }
    },
    components: {
        'pager': pager
    }
})
```
## for more usage: 
When using vue-router, usually there is a need that different page can be put in history so that we can navigate them by using browser [go,back] button. 
Now you only need to add two props: 
```
{
    mode: { // supported 3 modes: 'event' | 'query' | 'params'
        type: String,
        default: 'event'
    },
    routeName: { // if mode == 'params', a routeName is required
        type: String
    }
}
```
# License
MIT