<template>
    <div class="header">
        <img src="../assets/logo.png" alt="">
        <ul>
            <li><a href="">首页</a></li>
            <li><a href="">新手入门</a></li>
            <li><a href="">API</a></li>
            <li><a href="">关于</a></li>
            <li><a href="">注册</a></li>
            <li><a hre="">登录</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Header"
    }
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        background: #5a5555;
        height: 50px;
    }
    img{
        background: green;
        max-width: 120px;
        height: 50px;
        margin-left: 50px;
        margin-top: 10px;
    }
    ul{
        list-style: none;
    }
    li{
        display: inline-block;
        margin-right: 15px;
    }
    a{
        text-decoration: none;
        color: #ccc;
        font-size: 14px;
    }
</style>