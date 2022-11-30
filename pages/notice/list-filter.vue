<template>
    <div>
        <div v-for="(item, index) in list" v-bind:key="index">
            {{ item }}
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            list: [],
            pageNum: 1,
            selectedMonth: 11,
            selectedYear: 2022
        }
    },
    methods: {
        getList() {
            let payload = {
                pageNum: this.pageNum,
                searchRequest: {
                    dateMonth: this.selectedMonth,
                    dateYear: this.selectedYear
                }
            }
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$noticeConstants.DO_NOTICE_LIST_DATE, payload)
                .then((res) => {
                    this.list = res.data.list
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        },
    },
    created() {
        this.getList()
    }
}
</script>
