<template>
  <div v-if="isDrizzleInitialized" id="app">
    <header>
      Account
      <drizzle-account units="Ether" :precision="4"/>
    </header>
    <IPFSForm/>
  </div>
  <div v-else>
    Loading
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import IPFSForm from './IPFSForm'


  export default {
    name: 'app',
    components: { IPFSForm },
    computed: mapGetters('drizzle', ['isDrizzleInitialized']),
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
  }
</style>
