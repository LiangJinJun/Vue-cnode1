<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss" scoped>
.main {
  width: 80%;
  margin: 0 auto;
}
</style>