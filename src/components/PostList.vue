<template>
  <div>
    <ul>
      <li>
        <span>全部</span>
        <span>精华</span>
        <span>分享</span>
        <span>文档</span>
        <span>招聘</span>
      </li>
      <li v-for="(item,i) in posts" :key="i">
        <img :src="item.author.avatar_url" alt />
        <span>
          <span>{{item.reply_count}}</span>
          <span>/{{item.visit_count}}</span>
        </span>
        <span
          :class="[{put_good:(item.good == true),
                    put_top:(item.top== true),
                    topiclisttab:(item.good!=true && item.top !=true)}]"
        >{{item | tabFormatter}}</span>
        <router-link :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}">
          <span>{{item.title}}</span>
        </router-link>
        <span>{{item.last_reply_at | dateFormatter}}</span>
      </li>
      <li>
        <!--分页-->
        <pagination @handleList="renderList"></pagination>
      </li>
    </ul>
  </div>
</template>

<script>
import pagination from "../components/Pagination";
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      postpage: 1,
    };
  },
  components: {
    pagination,
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.postpage,
            limit: 20,
          },
        })
        .then((res) => {
          console.log(res);
          this.posts = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    renderList(value) {
      this.postpage = value;
      this.getData();
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  height: 30px;
}
li {
  list-style: none;
}
</style>