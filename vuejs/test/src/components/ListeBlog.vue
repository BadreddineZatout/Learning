<template>
    <div id="show-blogs">
        <h1>All Blog Titles</h1>
        <input type="text" v-model="search" placeholder="search box">
        <div v-for="blog in filtredBlogs" class="single-blog">
            <h2>{{blog.title | to-uppercase}}</h2>
        </div>
    </div>
    
</template>

<script>
import searchMixing from "../mixins/searchMixing";

export default {
    data () {
        return {
            blogs:[],
            search:''
        }
    },
    methods: {
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
    computed:{
        
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        },
        'snippet': function(value){
            return value.slice(0,100) + '...';
        }
    },
    directives:{
        'rainbow':{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        },
        'theme':{
            bind(el, binding, vnode){
                if (binding.value == 'wide') {
                  el.style.maxWidth = "1200px"; 
                }else if (binding.value == 'narrow'){
                  el.style.maxWidth = "560px"; 
                }
                if(binding.arg == 'column'){
                  el.style.background = '#ddd';
                  el.style.padding = "20px";
                }
            }
        }
    },
    mixins:[searchMixing]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>