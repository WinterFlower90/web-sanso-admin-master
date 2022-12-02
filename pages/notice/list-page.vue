<template>
    <div>
        <el-select v-model="yearValue" placeholder="Select">
            <el-option
                v-for="item in yearOption"
                :key="item.yearValue"
                :label="item.yearLabel"
                :value="item.yearValue">
            </el-option>
        </el-select>
        <el-select v-model="monthValue" placeholder="Select">
            <el-option
                v-for="item in monthOption"
                :key="item.monthValue"
                :label="item.monthLabel"
                :value="item.monthValue">
            </el-option>
        </el-select>
        <el-input class="title-search" placeholder="제목 검색" v-model="searchTitle"></el-input>
        <el-button icon="el-icon-search" @click="getList()" circle> 검색 </el-button>
        <el-button type="primary"  circle @click.native="moveCreate()">새 공지 등록</el-button>
        <div v-for="(item, index) in list">
<!--            No. : {{ item.noticeId }}-->
<!--            제목 : {{item.title}}-->
<!--            작성날짜 : {{ item.datePost }}-->
<!--            작성자 : {{item.writer}}-->
<!--            <el-button type="success" icon="el-icon-paperclip" circle @click.native="moveDetail(item.id)"></el-button>-->
<!--            <el-button type="success" icon="el-icon-edit" circle @click.native="moveDetail(item.noticeId)"></el-button>-->
<!--            <br />-->
            <div class="container">
                <table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>작성일</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>상세</th>
                        <th>수정</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in list" v-bind:key="index">
                        <td>{{ item.noticeId }}</td>
                        <td>{{item.datePost}}</td>
                        <td>{{ item.title }}</td>
                        <td>{{item.writer}}</td>
                        <td><el-button type="success" icon="el-icon-check" circle @click.native="moveDetail(item.noticeId)"></el-button></td>
                        <td><el-button type="primary" icon="el-icon-edit" circle @click.native="moveEdit(item.noticeId)"></el-button></td>
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
import moment from "moment";

export default {
    middleware: 'auth',
    data() {
        return {
            list: [],
            searchTitle: [],
            totalItemCount: 0,
            pageNum: 1,
            monthValue: moment().format('MM'),
            yearValue: moment().format('YYYY'),
            yearOption: [{
                yearValue: '2022',
                yearLabel: '2022년'
            }, {
                yearValue: '2021',
                yearLabel: '2021년'
            }, {
                yearValue: '2021',
                yearLabel: '2021년'
            }, {
                yearValue: '2020',
                yearLabel: '2020년'
            }],
            monthOption: [{
                monthValue: '12',
                monthLabel: '12월'
            }, {
                monthValue: '11',
                monthLabel: '11월'
            }, {
                monthValue: '10',
                monthLabel: '10월'
            }, {
                monthValue: '9',
                monthLabel: '09월'
            }, {
                monthValue: '8',
                monthLabel: '08월'
            }, {
                monthValue: '7',
                monthLabel: '07월'
            }, {
                monthValue: '6',
                monthLabel: '06월'
            }, {
                monthValue: '05',
                monthLabel: '05월'
            }, {
                monthValue: '4',
                monthLabel: '04월'
            }, {
                monthValue: '3',
                monthLabel: '03월'
            }, {
                monthValue: '2',
                monthLabel: '02월'
            }, {
                monthValue: '1',
                monthLabel: '01월'
            }],
        }
    },
    methods: {
        setPage(pageNum) {
            this.pageNum = pageNum
            this.getList()
        },
        getList() {
            let payload = {
                pageNum: this.pageNum,
                params: {
                    searchTitle: this.searchTitle,
                    yearValue: this.isNumber(this.yearValue) ? Number(this.yearValue) : null,
                    monthValue: this.isNumber(this.monthValue) ? Number(this.monthValue) : null,
                }
            }
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$noticeConstants.DO_NOTICE_LIST, payload)
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
        isNumber(text) {
            return !isNaN(Number(text))
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
    watch: {
        monthValue() {
            this.getList()
        },
        yearValue() {
            this.getList()
        },
    },
    created() {
        this.getList()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'NOTICE_LIST')
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

.title-search {
    width: 250px
}

</style>
