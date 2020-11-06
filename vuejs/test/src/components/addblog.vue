<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submited">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="Ninjas" v-model="blog.categories">
                <label>Wizards</label>
                <input type="checkbox" value="Wizards" v-model="blog.categories">
                <label>Mario</label>
                <input type="checkbox" value="Mario" v-model="blog.categories">
                <label>Cheese</label>
                <input type="checkbox" value="Cheese" v-model="blog.categories">
            </div>
            <label>Author</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submited">
            <h3>Thanks for adding a post</h3>
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Blog Author : {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ""
            },
            authors:['badreddine', 'zatout', 'the Vue avneger'],
            submited: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://test-a9c87.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submited = true;
            });
        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>