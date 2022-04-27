<template>
    <div>
        <h1>Create Account</h1>
    </div>
     <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
        <q-input v-model="username" label="Username" :rules="[val => !!val || 'Field is required']"/>
        <q-input v-model="name" label="Name" :rules="[val => !!val || 'Field is required']"/>
         <q-input v-model="aadharid" label="Aadhar Id" 
         mask="############" :rules="[val => !!val || 'Field is required']"  />
         <q-input v-model="emailid" label="Email Id" :rules="[val => !!val || 'Field is required']" />
           <q-input
        required
        v-model="phoneno"
        label="Phone"
        mask="### ### ####"
        fill-mask
        hint="Input your 10 digit phone number"
        :rules="[val => !!val || 'Field is required']"
      />
         <q-input v-model="password" label="Password" type="password"
         :rules="[val => !!val || 'Field is required']"
          />
        
         <q-btn unelevated color="light-green-7" size="s" class="full-width" label="Sign Up"  v-on:click="submitbut" />


        </div>  
        </div>  
</template>

<script>
import axios from 'axios'

export default{

name: 'CreateAccount',
data() {
    return {
        username:"",
        name:"",
        aadharid:"",
        emailid: "",
        phoneno: "",
        password: "",
        customerid: 0,
        submitbutton: true,
    }
},
watch:{

},
computed: {
     isComplete () {
    return this.name && this.aadharid && this.emailid && this.phoneno && this.password;
  }
    
},
methods: {
    calccustomerid(){
        this.customerid = Math.abs(this.username.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0));
    },
    submitbut(){
        this.calccustomerid();
         axios.post('http://localhost:8080/customer', {
            customerId: this.customerid,
            customerUsername: this.username,
            customerAadharId: this.aadharid,
            customerEmailId: this.emailid,
            customerName: this.name,
            customerPassword: this.password
            


        }) .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
},
}
</script>