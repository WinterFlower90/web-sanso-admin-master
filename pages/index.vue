<template>
    <div>
        asdfasdf<br />
        asdfasdf<br />
        asdfasdf<br />
        asdfasdf<br />
        asdfasdf<br />
        {{ 1000000 | currency }}
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {

        }
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'DASH_BOARD')
    },
}
</script>
