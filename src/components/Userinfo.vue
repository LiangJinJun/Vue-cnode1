<template>
    <div class="Userinfo">
        <div class="userInformation">
            <section>
                <img :src="userinfo.avatar_url" alt="">
                <span>{{userinfo.loginname}}</span>
                <p>{{userinfo.score}}积分</p>
                <p>注册时间{{userinfo.create_at | dateFormatter}}</p>
            </section>
            <div class="replies">
                <p>回复的主题</p>
                <ul>
                    <li v-for="(item,i) in userinfo.recent_replies" :key="i">
                        <router-link :to="{name:'post_content',params:{id:item.id}}">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="topics">
                <p>创建的主题</p>
                <ul>
                    <li v-for="(item,i) in userinfo.recent_topics" :key="i">
                         <router-link :to="{name:'post_content',params:{id:item.id}}">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Userinfo',
        data(){
            return{
                userinfo:[]
            }
        },
        methods:{
            getData(){
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                .then(res=>{
                    console.log(res);
                    this.userinfo = res.data.data
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

</style>