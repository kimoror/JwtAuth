<!--TODO Дописать, но сначала router-->
<template>

</template>

<script>
import User from '../models/user'
export default {
  name: "Login",
  data(){
    return{
      user: new User('',''),
      loading: false,
       message: '',
    };
  },
  computed:{
    loggedIn(){ return this.$store.state.auth.status.loggedIn();}
  },
  created() {
    if(this.loggedIn){
      this.$router.push('/profile');
    }
  },
  methods:{
    handleLogin(){
      this.loading = true;
      this.$validator.validateAll
    }
  }
}
</script>

<style scoped>

</style>