<template>
    <div>
        <el-button type="primary"  circle @click.native="moveCreate()">새 공지 등록</el-button>
        <el-button type="primary" icon="el-icon-edit" circle @click.native="moveEdit(item.noticeId)">수정</el-button>
        <div v-for="(item, index) in list" v-bind:key="index">
            순서: {{item.noticeId /*이 위에 list는 아래 data() {list}를 받아오는 것임*/ }}
            작성일: {{item.datePost}}
            제목: {{ item.title }}
            작성자 : {{item.writer}}
            <el-button type="success" icon="el-icon-check" circle @click.native="moveDetail(item.noticeId)">상세보기</el-button>
            <div class="container">
                <table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>작성일</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>상세</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in list" v-bind:key="index">
                        <td>{{ item.noticeId }}</td>
                        <td>{{item.datePost}}</td>
                        <td>{{ item.title }}</td>
                        <td>{{item.writer}}</td>
                        <td><el-button type="success" icon="el-icon-check" circle @click.native="moveDetail(item.noticeId)">상세보기</el-button></td>
                    </tr>
<!--                    <tr>-->
<!--                        <td>Cell 1</td>-->
<!--                        <td>Cell 2</td>-->
<!--                        <td>Cell 3</td>-->
<!--                        <td>Cell 4</td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                        <td>Cell 1</td>-->
<!--                        <td>Cell 2</td>-->
<!--                        <td>Cell 3</td>-->
<!--                        <td>Cell 4</td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                        <td>Cell 1</td>-->
<!--                        <td>Cell 2</td>-->
<!--                        <td>Cell 3</td>-->
<!--                        <td>Cell 4</td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                        <td>Cell 1</td>-->
<!--                        <td>Cell 2</td>-->
<!--                        <td>Cell 3</td>-->
<!--                        <td>Cell 4</td>-->
<!--                    </tr>-->
                    </tbody>
                </table>
            </div>
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
        moveDetail(noticeId) {
            let linkBaseUrl = '/notice/detail/'
            this.$router.push(`${linkBaseUrl}${noticeId}`)
        },
        moveEdit(noticeId) {
            let linkBaseUrl = '/notice/edit/'
            this.$router.push(`${linkBaseUrl}${noticeId}`)
        }
    },
    created() {
        this.getListAll()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'NOTICE_LIST_ALL')
    },

}
</script>
<style>
html,
body {
    height: 100%;
}

/*body {*/
/*    margin: 0;*/
/*    background: linear-gradient(45deg, #49a09d, #5f2c82);*/
/*    font-family: sans-serif;*/
/*    font-weight: 100;*/
/*}*/

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

table {
    width: 800px;
    border-collapse: collapse;
    overflow: auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

table::after {
    width: 800px;
    border-collapse: collapse;
    position: absolute;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    background: linear-gradient(45deg, #49a09d, #5f2c82);
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
}
th,
td {
    padding: 15px;
    background-color: rgba(255,255,255,0.2);
    color: #0d7a79;
}

th {
    text-align: left;
    color: #ffffff;
}
thead {
    background: linear-gradient(45deg, #49a09d, #5f2c82);
}
</style>
