<template>
    <div>
        <el-select v-model="value" placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <div v-for="(item, index) in list">
            <div class="container">
                <table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>아이디</th>
                        <th>별명</th>
                        <th>평점</th>
                        <th>패널티</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in list" v-bind:key="index">
                        <td>{{ item.id }}</td>
                        <td>{{item.username}}</td>
                        <td>{{ item.nickName }}</td>
                        <td>{{item.avgStarRating}}</td>
                        <td>{{item.penalty}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <el-pagination
            background
            small
            layout="prev, pager, next"
            :total="totalItemCount"
            :current-page="pageNum"
            @current-change="setPage"
        >
        </el-pagination>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            list: [],
            totalItemCount: 0,
            pageNum: 1,
            value: 'ALL',
            options: [{
                value: 'ALL',
                label: '전체'
            }, {
                value: 'BLACK_LIST',
                label: '블랙회원'
            }, {
                value: 'STAR_POINT',
                label: '별점'
            }]
        }

    },
    methods: {
        setPage(pageNum) {
            this.pageNum = pageNum
            this.getList()
        },
        getList() {
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$testDataConstants.DO_LIST, {pageNum: this.pageNum, searchType: this.value})
                .then((res) => {
                    this.list = res.data.list
                    this.totalItemCount = res.data.totalItemCount
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
    watch: {
        value() {
            this.getList()
        }
    },
    created() {
        this.getList()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'MEMBER_LIST')
    },

}
</script>
<style>
</style>
