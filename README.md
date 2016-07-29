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
In your *.html page,use:
```
<body>
    <pager
        mode="query"
        :total-page="totalPage"
        :init-page="page"></pager>
    <p>page: {{today}}</p>
</body>
```
In your app.js,use it like the:
```
import pager from 'vue-simple-pager'

new Vue({
    el: 'body',
    data () {
        return {
            page: 1,
            totalPage: 10
        }
    },
    components: {
        'pager': pager
    }
})
```
# License
MIT