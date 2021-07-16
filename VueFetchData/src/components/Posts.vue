<template>
  <div class="container">
    <h1>This is the Employee List</h1>
    <table class="border ">
        <tr class="border border-success">
            <td>id</td>
            <td>Title</td>
            <td>Body</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item" class="border border-primary">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.body}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data() {
      return {list: undefined}
  },
  async created () {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.list = response.data
    } catch (error) {
      console.error(error)
    }
  }
};
</script>

<style></style>
