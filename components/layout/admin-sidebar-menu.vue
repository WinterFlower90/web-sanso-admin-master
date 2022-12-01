<template>
    <section class="sq-main-sidebar-menu">
        <div class="item" v-for="(menuData, menuIndex) in menusList" v-bind:key="menuIndex">
            <div class="in-title">
                <i class="el-icon-folder" />{{ menuData.parentName }}
            </div>
            <ul>
                <li v-for="(menuData2, menuIndex2) in menuData.menuLabel" v-bind:key="menuIndex2" v-if="menuData2.isShow">
                    <i :class="menuData2.icon"></i>
                    <nuxt-link :to="menuData2.link">{{ menuData2.currentName }}</nuxt-link>
                </li>
            </ul>
        </div>
        <audio loop controls>
            <source src="/audio/2.mp3" type="audio/mp3">
        </audio>
    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        menusList() {
            return this.$store.getters[this.$menuConstants.GET_MENUS_LIST]
        },
    }
}
</script>
<style>
div {
    font-family: 'Song Myung', sans-serif;
    font-size: 24px;
}
</style>

