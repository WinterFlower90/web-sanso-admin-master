<template>
    <div>
        <div v-if="detailInfo != null">
            <div>{{ detailInfo.noticeId }} 수정</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto">
                <el-row :gutter="15">
                    <el-col :span="8">
                        <el-form-item label="내용" prop="note">
                            <el-input v-model="ruleForm.note"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="제목" prop="title">
                            <el-input v-model="ruleForm.title"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="15">
                    <el-col>
                        <el-form-item>
                            <el-button type="primary" class="size-full" @click="doPutData()">수정</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    asyncData({ params }) {
        return {
            id: params.id //Todo id 확인
        }
    },
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    data() {
        return {
            id: null,
            detailInfo: null,
            ruleForm: {
                note:'',
                title:'',
            },
            rules: {
                note: [
                    { required: true, message: '이 값은 필수입니다.', trigger: 'blur'},
                    { min:10, message:'최소 10글자 이상 입력해주세요', trigger: 'blur'}
                ],
                title: [
                    { required: true, message: '이 값은 필수입니다.', trigger: 'blur'},
                    { min:5, max:20, message:'5~10자 내로 입력해주세요.', trigger: 'blur'},
                ],
            }
        }
    },
    methods: {
        async getDetail() {
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            await this.$store.dispatch(this.$noticeConstants.DO_NOTICE_DETAIL, {id: this.id}) //Todo ??
                .then((res) => {
                    this.detailInfo = res.data.data
                    this.ruleForm.note = res.data.data.note
                    this.ruleForm.title = res.data.data.title
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        },
        doPutData() {
            console.log()
            let formName = 'ruleForm'
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.putData()
                } else {
                    return false
                }
            })
        },
        putData() {
            let payload = {
                noticeId: this.detailInfo.noticeId,
                data: {
                    note: this.ruleForm.note,
                    title: this.ruleForm.title
                }
            }
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$noticeConstants.DO_UPDATE, payload) // Todo id
                .then(res => {
                    this.$toast.success(res.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                    this.$router.replace(`/notice/list`)
                })
                .catch(err => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        },
    },
    created() {
        this.getDetail()
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'NOTICE_LIST_EDIT')
    },
}
</script>
