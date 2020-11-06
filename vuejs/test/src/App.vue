<template>
    <div>
        <app-head></app-head>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import ListeBlog from './components/ListeBlog.vue';
import Head from './components/Head.vue';
export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlog,
        'list-blogs': ListeBlog,
        'app-head': Head
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>