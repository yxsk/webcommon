<template>
    <div class="content">
        <div class="content-left">
            <component :is="sidebar"></component>
        </div>
        <div class="content-right">
            <component :is="home"></component>
        </div>
    </div>
</template>

<script>
    import Home from '../components/page/home'
    import Sidebar from '../components/page/sidebar'

    export default {
        name: "index",
        data() {
            return {
                home: Home,
                sidebar: Sidebar
            }

        },
        components: {
            Home,
            Sidebar
        }
    }
</script>

<style scoped>
    .content {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .content-left, .content-right {
        height: 100%;
    }
    .content-left {
        width: 20%;
    }
    .content-right {
        width: 80%;
        height: auto;
        margin-top: 212px;
    }
</style>
