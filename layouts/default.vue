<template>
    <div class="sq-default-frame">
        <section class="frame-left">
            <AdminSidebarAvatar />
            <AdminSidebarMenu />
        </section>
        <section class="frame-right">
            <AdminHeader />
            <div class="contents-body">
                <Nuxt />
            </div>
        </section>
        <loading-icon />
    </div>
</template>
<script>
import AdminHeader from "@/components/layout/admin-header"
import AdminSidebarAvatar from "@/components/layout/admin-sidebar-avatar"
import AdminSidebarMenu from "@/components/layout/admin-sidebar-menu"

export default {
    components: {
        AdminHeader,
        AdminSidebarAvatar,
        AdminSidebarMenu
    }
}
</script>
