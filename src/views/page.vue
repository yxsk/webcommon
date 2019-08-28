<template>
    <div class="content">
        <div class="content-left">
            <Home></Home>
        </div>
        <div class="content-right">
            <Sidebar></Sidebar>
        </div>
    </div>
</template>

<script>
    import Home from '../components/page/home'
    import Sidebar from '../components/page/sidebar'

    export default {
        name: "index",
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
