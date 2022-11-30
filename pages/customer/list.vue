<template>
    <div>
        <div
            v-for="(item, index) in list"
            v-bind:key="index"
        >
            id : {{ item.id }}<br />
            아이디 : {{item.username}}<br />
            닉네임 : {{ item.nickName }}<br />
            평점 : {{item.avgStarRating}} <br />
            패널티 : {{item.penalty}}
            <el-button type="success" icon="el-icon-check" circle @click.native="moveDetail(item.id)"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle @click.native="moveEdit(item.id)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click.native="delData(item.id)"></el-button>
            <hr />
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            list: [],
            pageNum : 1,
            memberInformationType : 'ALL'
        }
    },
    methods: {
        getList() {
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$testDataConstants.DO_LIST, {pageNum: this.pageNum, searchType: this.memberInformationType})
                .then((res) => {
                    this.list = res.data.list
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        },
        // delData(id) {
        //     if (confirm('정말 삭제하시겠습니까?')) { // javascript confirm 검색하기
        //         this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
        //         this.$store.dispatch(this.$testDataConstants.DO_DELETE, {id: id})
        //             .then((res) => {
        //                 this.$toast.success(res.data.msg)
        //                 this.getList()
        //                 this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
        //             })
        //             .catch((err) => {
        //                 this.$toast.error(err.response.data.msg)
        //                 this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
        //             })
        //     }
        // },
        // moveDetail(id) {
        //     let linkBaseUrl = '/customer/detail/'
        //     this.$router.push(`${linkBaseUrl}${id}`)
        // },
        // moveEdit(id) {
        //     let linkBaseUrl = '/customer/edit/'
        //     this.$router.push(`${linkBaseUrl}${id}`)
        // }
    },
    created() {
        this.getList()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'MEMBER_LIST')
    },

}
</script>
