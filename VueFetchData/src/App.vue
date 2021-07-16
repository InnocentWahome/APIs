<template>
  <div id="app">
    <div id="nav">
      <button class="btn btn-primary"><router-link to="/burgers">Burgers</router-link></button> |
      <button class="btn btn-secondary"><router-link to="/searchrepo">Search Repository</router-link></button> |
      <button class="btn btn-success"><router-link to="/posts">Posts</router-link></button> |
      <button class="btn btn-warning"><router-link to="/repos">Repositories</router-link></button> |
      <button class="btn btn-secondary"><router-link to="/getburger">Get Burger by Id</router-link></button> |
      <button class="btn btn-danger"><router-link to="/search">Search Burger by Id</router-link></button> |
       
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
