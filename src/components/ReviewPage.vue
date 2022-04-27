<template>
    <div>
        <h1>Review</h1>
    </div>
    Leave a rating of your last booking:<br/>
    Venue: 
<br/>
      <q-rating
      v-model="rating"
      size="2em"
      :max="5"
      color="primary"
    />

</template>
<script>
import store from "../store"
export default{
    name: 'ReviewPage',
    store: store,
    data() {
        return {
            rating: 0,
        }
    },
    methods: {
        submitrating(){
           store.commit('putrating', this.rating);
        }
    },
}

</script>