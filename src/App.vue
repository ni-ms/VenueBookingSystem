<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 95vh" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-btn @click="$router.replace('/')">
          <q-toolbar-title >Venue Booking System</q-toolbar-title>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
            
              <q-item @click="$router.replace(menuItem.rlink)" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
           
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <!-- Add router here -->
        <q-page padding>
          <router-view ></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'
import store from './store/index.js'

const menuList = [
  {
    icon: 'person',
    label: 'Login',
    rlink: '/Login',
    separator: true,
    isVisible: true
  },
  {
    icon: 'menu_book',
    label: 'Booking',
    rlink: '/Booking',
    separator: false,
    isVisible: true
  },
  {
    icon: 'star',
    label: 'Review',
    rlink: '/Review',
    separator: false,
    isVisible: true
  },
  
]

export default {
  setup () {
    return {
      drawer: ref(false),
      menuList
    }
  }
}
</script>
