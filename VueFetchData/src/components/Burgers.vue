<template>
  <div class="hello">
    <h1>Burger API Data</h1>

    <div class="container">
      <table class="border">
        <thead class="border border-success">
          <th>Burger Id</th>
          <th>Burger Name</th>
          <th>Resturants</th>
          <th>Web</th>
          <th>Address</th>
          <th>Ingridients</th>
        </thead>
        <tbody
          class="border border-primary"
          id="data"
          v-for="item in list"
          v-bind:key="item"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.restaurant }}</td>
          <td>{{ item.web }}</td>
          <td>{{ item.addresses[0].country }}</td>
          <td>{{ item.ingredients[0] }}</td>
        </tbody>
      </table>
    </div>
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
      const response = await axios.get("http://localhost:3000/burgers");
      this.list = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
