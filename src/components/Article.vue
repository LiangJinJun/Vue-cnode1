<template>
  <div class="article">
    <div class="topic_header">
      <div class="topic_title">{{post.title}}</div>
      <ul>
        <li>*发布于：{{post.create_at | dateFormatter}}</li>
        <li>*作者：{{post.author.loginname}}</li>
        <li>*{{post.visit_count}}次浏览</li>
        <li>*来自{{post | tabFormatter}}</li>
      </ul>
      <div v-html="post.content" class="topic_content"></div>
    </div>
    <div id="reply">
        <div>回复</div>
        <div v-for="(reply,index) in post.replies" :key="index">
            <router-link :to="{name:'user_info',params:{name:reply.author.loginname}}">
            <img :src="reply.author.avatar_url" alt="">
            </router-link>
            <router-link>
            <span>{{reply.author.loginname}}</span>
            </router-link>
            <span>
                {{index+1}}楼
            </span>
            <span v-if="reply.ups.length>0" class=""> 
                ↑   {{reply.ups.length}}
            </span>
            <span v-else>

            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      post: [],
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res=> {
          console.log(res);
          this.post = res.data.data;
          console.log(res.data.data);
        })
        .catch(err=> {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.getArticleData();
  },
  watch:{
      '$route'(){
          this.getArticleData()
      }
  }
};
</script>

<style>

</style>