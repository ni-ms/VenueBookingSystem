<template>

  <div class="bg-white row justify-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Venue Booking Login</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="username" type="username" label="Username" />
              <q-input square filled clearable v-model="password" type="password" label="Password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="qpx-md">
            <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? 
                
               <router-link :to="'/CreateAccount'">Created an Account</router-link>
 
                
               </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

</template>
<script>
import store from "../store"

export default {
  name: 'Login',
  store: store,
  data () {
    return {
      username: '',
      password: '',
      usernameget: '',
      passwordget: '',
      usernameconvert: '', 
    }
  },
  methods: {
     calccustomerid(){
        this.usernameconvert = Math.abs(this.username.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0));
    },
    login(){

      
      this.calccustomerid();
      axios({ method: "GET", "url": "http://localhost:8080/customerget/" + this.usernameconvert}).then(result=>{
        this.usernameget = result.data.customerUsername;
        this.passwordget = result.data.customerPassword;
      })
      if (this.usernameget == this.username && this.passwordget == this.password) { 
      store.commit('adduser', this.username);
      store.commit('isLoggedIn', true);
      this.$router.replace({ path:"/" });
      } else {
        
      }
    }
  },
}
</script>

<style>
.q-card {
  width: 360px;
}

</style>