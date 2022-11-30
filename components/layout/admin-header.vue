<template>
    <header class="sq-header">
        <div class="sq-bread">
            <i class="el-icon-s-home" />
            <span v-for="(item, index) in selectMenu" v-bind:key="index">
                {{ item }}
                <i v-if="(selectMenu.length - 1) !== index" class="el-icon-arrow-right" />
            </span>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        selectMenu() {
            return this.$store.getters[this.$menuConstants.GET_SELECTED_MENU]
        },
    },
}
</script>

