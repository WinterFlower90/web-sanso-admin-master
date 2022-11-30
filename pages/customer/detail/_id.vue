<template>
    <div>
        <div v-if="detailInfo != null">
            id: {{ detailInfo.id }}<br />
            nickName: {{ detailInfo.nickName }}<br />
<!--            phone: {{ detailInfo.phone }}<br />-->
<!--            contents: {{ detailInfo.contents }}-->
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
            await this.$store.dispatch(this.$testDataConstants.DO_DETAIL, {id: this.id})
                .then((res) => {
                    this.detailInfo = res.data.data
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        } //Todo detail 삭제
    },
    created() {
        this.getDetail()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'MEMBER_DETAIL')
    },
}
</script>
