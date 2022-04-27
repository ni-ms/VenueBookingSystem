
import Vuex from 'vuex'


// Create a new store instance.
export default new Vuex.Store({
    state: {
        username: "",
        balance: 0,
        isLoggedIn: false,
        rating: 0,

    },
    mutations: {
        adduser(state, cuser) {
            state.username = cuser;

        },
        addcurrentuserid(state, cuserid) {
            state.currentuser = cuserid;
        },
    
        addbalance(state, userbalance) {
            state.balance = userbalance;

        },
        putrating(state, newrating){
            state.rating = newrating;
        },

        makeLoggedIn(state, loggedin){
            state.isLoggedIn= loggedin;
        }


    },
    actions: {},
    modules: {}
})