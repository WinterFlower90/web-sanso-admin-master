<template>
    <div class="container">
        <div class="card">
            <div class="banner"></div>
            <div v-if="detailInfo != null">
                <div class="title">공지사항 시퀀스</div>
                <h2 class="name">{{ detailInfo.noticeId }}</h2>
                <hr/>
                <div class="title">공지사항 제목</div>
                <h2 class="name">{{ detailInfo.title }}</h2>
                <hr/>
                <div class="title">공지사항 내용</div>
                <h2 class="name">{{ detailInfo.note }}</h2>
            </div>
            <div>
                <h1 class="name"> </h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    asyncData({ params }) {
        return {
            id: params.id
        }
    },
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    data() {
        return {
            id: null,
            detailInfo: null
        }
    },
    methods: {
        async getDetail() {
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            await this.$store.dispatch(this.$noticeConstants.DO_NOTICE_DETAIL, {id: this.id})
                .then((res) => {  //Todo 수정
                    this.detailInfo = res.data.data
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        }
    },
    created() {
        this.getDetail()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'NOTICE_DETAIL')
    },
}
</script>
<style>

.container {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
}

.card {
    background-color: #fff;
    min-width: 1000px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    border-radius: 2rem;
    box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.5);
    opacity: 0.7;
}

.card .banner {
    background-image: url("static/images/14.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 13rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
}
.card h2.name {
    text-align: center;
    padding: 0 2rem 0.5rem;
    margin: 0;
}

.card h1.name {
    text-align: center;
    padding: 0 0 2.5rem;
    margin: 0;
}

.card .title {
    color: #a0a0a0;
    font-size: 0.85rem;
    text-align: center;
    padding: 1.2rem 1.2rem 0.2rem;
}

.card .actions .follow-info {
    padding: 0 0 1rem;
    display: flex;
}

.card .actions .follow-info h2 {
    text-align: center;
    width: 50%;
    margin: 0;
    box-sizing: border-box;
}

</style>
