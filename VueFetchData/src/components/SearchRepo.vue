<template>
  <div class="container">
    <form @submit.prevent="getData">
      <input
        type="search"
        name=""
        id=""
        class="form form-control"
        v-model="query"
        placeholder="Enter repository id eg 118"
      />
      <input
        type="submit"
        class="btn btn-primary"
        style="display: block; margin: 1rem auto"
      />
    </form>

    <div class="container">
      <table class="border">
      <thead class="border border-success">
        <th>Repository Id</th>
        <th>Repository Name</th>
        <th>Link</th>
        <th>Privacy Status</th>
      </thead>
      <tbody
        class="border border-primary"
        id="data"
      >
        <td>{{ data.node_id }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.url }}</td>
        <td>{{ data.private }}</td>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      query: null,
      data: [],
    };
  },
  methods: {
    async getData() {
      await axios
        .get(`https://api.github.com/repositories/${this.query}`)
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
