<template>
    <div>
        <div v-if="detailInfo != null">
            <div>{{ detailInfo.id }} 수정</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto">
                <el-row :gutter="15">
                    <el-col :span="8">
                        <el-form-item label="이름" prop="nickName">
                            <el-input v-model="ruleForm.nickName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="연락처" prop="phone">
                            <el-input v-model="ruleForm.phone"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="내용" prop="contents">
                            <el-input v-model="ruleForm.contents"></el-input>
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
            id: params.id
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
                name:'',
                phone:'',
                contents:'',
            },
            rules: {
                name: [
                    { required: true, message: '이 값은 필수입니다.', trigger: 'blur'},
                    { min:2, max:10, message:'2~10자 내로 입력해주세요.', trigger: 'blur'}
                ],
                phone: [
                    { required: true, message: '이 값은 필수입니다.', trigger: 'blur'},
                    { min:13, max:13, message:'010-0000-0000 형식으로 입력해주세요.', trigger: 'blur'}
                ],
                contents: [
                    { required: true, message: '이 값은 필수입니다.', trigger: 'blur'},
                    { min:2, max:100, message:'2~100자 내로 입력해주세요.', trigger: 'blur'},
                ],
            }
        }
    },
    methods: {
        async getDetail() {
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            await this.$store.dispatch(this.$testDataConstants.DO_DETAIL, {id: this.id})
                .then((res) => {
                    this.detailInfo = res.data.data
                    this.ruleForm.name = res.data.data.name
                    this.ruleForm.phone = res.data.data.phone
                    this.ruleForm.contents = res.data.data.contents
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                })
        },
        doPutData() {
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
            this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, true)
            this.$store.dispatch(this.$testDataConstants.DO_UPDATE, {id: this.detailInfo.id})
                .then(res => {
                    this.$toast.success(res.data.msg)
                    this.$store.commit(this.$customLoadingConstants.FETCH_LOADING_SHOW, false)
                    this.$router.replace(`/customer/list`)
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
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'MEMBER_EDIT')
    },
}
</script>
