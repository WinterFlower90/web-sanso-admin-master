<template>
    <div>
        <el-alert type="warning" effect="dark" show-icon :closable="false"
                  title="정보보호를 위해 반드시 로그아웃을 해주세요"
                  description="진행중인 작업은 저장이 되지 않습니다. 진행중인 작업을 모두 완료 후 로그아웃 해주세요.">
        </el-alert>
        <el-button type="danger" @click="doLogout()">로그아웃</el-button>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
        }
    },
    methods: {
        doLogout() {
            if(confirm('정말 로그아웃 하시겠습니까?')) {
                this.$store.dispatch(this.$authenticatedConstants.DO_LOGOUT)
                this.$router.replace('/login')
            }
        }
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'MEMBER_LOGOUT')
    },
}
</script>
