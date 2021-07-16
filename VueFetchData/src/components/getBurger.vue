<template>
  <div class="container">
    <div v-if="burger" class="card card-body">
      <h4 style="text-decoration: underline;">The burger id is hardcoded</h4>
      <p>The name of the burger is: {{ burger.name }}</p>
      <p>The website of the burger is: {{ burger.web }}</p>
      <p>The description of the burger is: {{ burger.description }}</p>
      <p>The ingredients of the burger are: {{ burger.ingredients }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "getBurger",
  props: ['id'],
  data() {
    return {
      burger: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/burgers/" + 2)
      .then((res) => res.json())
      .then((data) => (this.burger = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
