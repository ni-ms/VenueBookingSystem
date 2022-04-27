<template>
    <div>
        <h1>Booking</h1>
    </div>
    Venue: 
     <q-btn-dropdown color="primary" label="Choose Venue">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>
        <br>
        In time: 
        <q-input v-model="time" filled type="time" hint="Native time" />
      <br>
      Out time:
       <q-input v-model="time" filled type="time" hint="Native time" />
       <br>
       Number of people:
          <q-input
      v-model.number="numberofpeople"
      type="number"
      filled
      style="max-width: 200px"
    />
      <br>
</template>

<script>
//import axios from 'axios'
import store from '../store/index.js'
//import axios from 'axios'

export default{

store: store,

data() {
    return {
        numberofpeople: 0,
        inTime:"",
        outTime: "",


    }
},
methods: {
  submitdat(){
 /*   axios.post('http://localhost:8080/booking',{
      inTimestamp: this.inTime,
      outTimestamp: this.outTime,
      

    })*/
  }
},

}

</script>