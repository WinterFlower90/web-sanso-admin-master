<template>
    <div class="error-box">
        <div class="in-icon"><i class="el-icon-monitor"></i></div>
        <div class="in-code mt-2">ERROR.{{ error.statusCode }}</div>
        <div class="in-btn mt-4">
            <el-button type="danger" icon="el-icon-arrow-left" round @click="moveBack()">뒤로가기</el-button>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'error-layout',
    props: ['error'],
    methods: {
        moveBack() {
            this.$router.go(-1)
        }
    }
}
</script>
