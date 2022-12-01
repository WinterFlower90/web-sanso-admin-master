<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto">
            <el-row :gutter="15">
                <el-col :span="8">
                    <el-form-item label="제목" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="15">
                <el-col :span="8">
                    <el-form-item label="내용" prop="note">
                        <el-input v-model="ruleForm.note"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="15">
                <el-col>
                    <el-form-item>
                        <el-button type="primary" class="size-full" @click="doSetData()">등록</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            ruleForm: {
                title:'',
                note:'',
            },
            rules: {
                title: [
                    { required: true, message: '이 값은 필수입니다.', trigger: 'blur'},
                    { min:5, max:20, message:'5~20자 내로 입력해주세요.', trigger: 'blur'}
                ],
                note: [
                    { required: true, message: '이 값은 필수입니다.', trigger: 'blur'},
                    { min:10, message:'10자 이상으로 입력해주세요.', trigger: 'blur'}
                ],
            }
        }
    },
    methods: {
        doSetData() {
            let formName = 'ruleForm'
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.setData()
                } else {
                    return false
                }
            })
        },
        setData() {
            let payload = {
                title: this.ruleForm.title,
                note: this.ruleForm.note
            }
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$noticeConstants.DO_CREATE, payload)
                .then(res => {
                    this.$toast.success(res.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                    this.$router.replace(`/notice/list`)
                })
                .catch(err => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        }
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'NOTICE_ADD')
    },
}
</script>
