<template>
    <div>
        <div v-if="detailInfo != null">
            noticeId: {{ detailInfo.noticeId }}<br />
            note: {{ detailInfo.note }}<br />
            title: {{ detailInfo.title }}<br />
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
