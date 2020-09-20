<template>
  <div class="autherinfo">
    <div class="authersummay">
      <div class="topbar">作者</div>
      <router-link :to="{name:'user_info',params:{name:userinfo.loginname}}">
        <img :src="userinfo.avatar_url" alt />
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="(item,i) in topcilimitby5" :key="i">
          <router-link
            :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="recent_repics">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="(item,i) in replylimitby5" :key="i">
          <router-link
            :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  data() {
    return {
      userinfo: [],
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res) => {
          console.log(res);
          this.userinfo = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    topcilimitby5() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5);
      } 
      return this.userInfo.recent_topics
    },
    replylimitby5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      } 
       return this.userInfo.recent_replies
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>