<template>
    <div>
        <el-button type="success" icon="el-icon-check" circle @click.native="moveCreate()">등록</el-button>
        <div v-for="(item, index) in list" v-bind:key="index">
            순서: {{item.noticeId /*이 위에 list는 아래 data() {list}를 받아오는 것임*/ }}
            작성일: {{item.datePost}}
            제목: {{ item.title }}
            작성자 : {{item.writer}}
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            list: [],
            // pageNum: 1,
            // // pageNum : 1,
        }
    },
    methods: {
        getListAll() {
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$noticeConstants.DO_NOTICE_LIST_ALL)
                .then((res) => {
                    this.list = res.data.list
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        },
        getList() {
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$noticeConstants.DO_NOTICE_LIST_ALL)
                .then((res) => {
                    this.list = res.data.list
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        },
        moveCreate() {
            this.$router.push('/notice/form')
            //     let linkBaseUrl = '/customer/detail/'
            //     this.$router.push(`${linkBaseUrl}${id}`)
            },
    },
    created() {
        this.getListAll()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'NOTICE_LIST_ALL')
    },

}
</script>
