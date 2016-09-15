# vue-simple-pager
an all-round pagination component based on `vue`
# Test
```
clone this repo
cd vue-simple-pager
npm install .
npm run test
open your browser and request http://localhost:8080/test/test.html
```
![/images/vue-simple-pager.gif](/images/vue-simple-pager.gif)

# Usage
```
npm install vue-simple-pager
```
## for simple usage, you only need transfer props as follow:
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
When using `vue-router`, usually there is a need that different page can be put in history so that we can navigate them by using browser `[go,back]` buttons. 
Now you only need to add two props: 
```
{
    mode: { // 3 modes are supported : 'event' | 'query' | 'params'
        type: String,
        default: 'event'
    },
    routeName: { // if mode == 'params', a routeName is required
        type: String
    }
}
```
For more usage detail, see the test example
# License
MIT