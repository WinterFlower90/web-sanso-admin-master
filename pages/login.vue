<template>
    <div class="sq-login-box">
        <div class="img-box"><img src="/images/water.jpeg" alt="login" /></div>
        <div class="form-box">
            <el-form class="sq-form-box" :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item prop="username" class="pb-2 pt-4">
                    <el-input placeholder="아이디" v-model="ruleForm.username" @keyup.native.enter="doLogin()"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="pb-2">
                    <el-input placeholder="비밀번호" v-model="ruleForm.password" show-password @keyup.native.enter="doLogin()"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="size-full" @click="doLogin()">확인</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'login-layout',
    middleware: 'anonymous',
    data() {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '아이디를 입력해주세요', trigger: 'blur'},
                    { min:5, max:30, message:'아이디를 5~30자 내로 입력해주세요', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '비밀번호를 입력해주세요', trigger: 'blur'},
                    { min:8, max:20, message:'비밀번호를 8~20자 내로 입력해주세요', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        doLogin() {
            let formName = 'ruleForm'
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.getLoginInfo()
                } else {
                    return false
                }
            })
        },
        getLoginInfo() {
            this.$store.dispatch(this.$authenticatedConstants.DO_LOGIN, this.ruleForm).then(() => {
                this.$router.replace('/')
            }).catch(err => {
                this.$toast.error(err.response.data.msg)
            })
        },

    }
}
</script>
