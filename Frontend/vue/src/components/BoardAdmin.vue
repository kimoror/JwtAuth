<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
  </div>

</template>

<script>
import UserService from '../services/user.service.js'

export default {
  name: "Home.vue",
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
        response => {
          this.content = response.data;
        },
        error => {
          this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        }
    )
  }
}
</script>

<style scoped>

</style>