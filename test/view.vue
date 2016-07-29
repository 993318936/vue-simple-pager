<template>
    <div>
        <h1>pager used for event</h1>
        <pager
        mode="event"
        :total-page="totalPage"
        :init-page="eventPage"
        @go-page="goPage"></pager>
    </div>
    <div>
        <h1>pager used for query</h2>
        <pager
        mode="query"
        :total-page="totalPage"
        :init-page="queryPage"
        lang="zh"></pager>
    </div>
    <div>
        <h1>pager used for params</h2>
        <pager
        mode="params"
        route-name="pageRoute"
        :total-page="totalPage"
        :init-page="paramsPage"></pager>
    </div>
</template>
<script>
    import pager from '../src/vue-pager.vue'

    export default {
        data () {
            return {
                eventPage: 1,
                queryPage: 1,
                paramsPage: 1,
                totalPage: 10
            }
        },
        components: {
            'pager': pager
        },
        methods: {
            goPage (data) {
                this.eventPage = data.page
            }
        },
        route: {
            data ({to: {query, params}}) {
                if(params.page) {
                    this.paramsPage = parseInt(params.page) || 1
                } else {
                    this.paramsPage = 1
                }
                if(query.page) {
                    this.queryPage = parseInt(query.page) || 1
                } else {
                    this.queryPage = 1
                }
            }
        },
        ready () {
            setTimeout(() => {
                this.eventPage = 3
            },3000)
        }
    }
</script>