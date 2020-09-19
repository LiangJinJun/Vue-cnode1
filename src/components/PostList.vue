<template>
    <div>
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
                    <img :src="item.author.avatar_url" alt="">
                    <span>
                        <span>{{item.reply_count}}</span>
                        <span>/{{item.visit_count}}</span>
                    </span>
                    <span :class="[{put_good:(item.good == true),
                    put_top:(item.top== true),
                    topiclisttab:(item.good!=true && item.top !=true)}]">{{item | tabFormatter}}</span>
                    <span>{{item.title}}</span>
                    <span>{{item.last_reply_at | dateFormatter}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'PostList',
        data(){
            return{
                posts:[]
            }
        },
        methods:{
            getData(){
                this.$http.get('https://cnodejs.org/api/v1/topics',{
                    page:1,
                    limit:20
                })
                .then(res=>{
                    console.log(res);
                    this.posts = res.data.data
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        },
        beforeMount(){
            this.getData()
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 30px;
        height: 30px;
    }
    li{
        list-style: none;
    }
</style>