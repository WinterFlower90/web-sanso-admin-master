<template>
    <section class="sq-main-sidebar-info">
        <div class="logo mb-1 pt-1"><img src="/images/kbg.png" alt="logo" /></div>
        <div class="info">
            {{ nickName }}님
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        nickName() { return this.$store.getters[this.$authenticatedConstants.GET_NICK_NAME] },
    }
}
</script>
