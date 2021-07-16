<template>
  <div class="container">
    <h1>Public Organization Repositories</h1>
    <p></p>
    <table class="border">
      <thead class="border border-success">
        <th>Repository Name</th>
        <th>Link</th>
        <th>Privacy Status</th>
      </thead>
      <tbody
        class="border border-primary"
        id="data"
        v-for="item in list"
        v-bind:key="item"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.url }}</td>
        <td>{{ item.private }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  data() {
    return { list: undefined };
  },
  async created() {
    try {
      const response = await axios.get("https://api.github.com/orgs/engineyard/repos");
      this.list = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
