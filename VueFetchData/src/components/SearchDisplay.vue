<template>
  <div class="container">
    <form @submit.prevent="getData">
      <input
        type="search"
        name=""
        id=""
        class="form form-control"
        v-model="query"
        placeholder="Enter burger Id between 1-10"
      />
      <input
        type="submit"
        class="btn btn-primary"
        style="display: block; margin: 1rem auto"
      />
    </form>

    <div class="container">
      <table class="border ">
        <tr class="border border-success">
          <td>Burger Id:</td>
          <td>Burger Name:</td>
          <td>Burger Website:</td>
          <td>Burger Description:</td>
        </tr>
        <tr class="border border-secondary">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.web }}</td>
          <td>{{ data.description }}</td>
        </tr>
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
        .get(`http://localhost:3000/burgers/${this.query}`)
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
