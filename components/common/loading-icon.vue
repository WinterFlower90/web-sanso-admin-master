<template>
    <div>
        <div class="custom-loading-container" v-if="loadingShow">
            <div class="custom-loading-back"></div>
            <div class="custom-loading-contents">
                <i class="el-icon-loading"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        loadingShow() {
            return this.$store.getters[this.$customLoadingConstants.GET_LOADING_SHOW]
        }
    }
}
</script>
