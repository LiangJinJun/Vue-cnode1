<template>
  <div class="header">
    <div class="header-wrapper">
      <router-link :to="{ name: 'root' }">
        <img
          class="img"
          src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
          alt=""
        />
      </router-link>
      <ul>
        <li>
          <router-link :to="{ name: 'root' }">首页</router-link>
        </li>
        <li><a href="javascript:">新手入门</a></li>
        <li><a href="javascript:">API</a></li>
        <li><a href="javascript:">关于</a></li>
        <li><a href="javascript:">登录</a></li>
        <li><a href="javascript:">注册</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
    color: #cccccc;
}
.header {
  background: #5a5555;

  > .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 50px;
    margin: 0 auto;

    .img {
      width: 120px;
      margin-left: 50px;
    }

    > ul {
      display: flex;

      > li {
        list-style: none;
        padding: 0 15px;
      }
    }
  }
}
</style>