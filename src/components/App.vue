<template>
  <md-app
    v-cloak
    md-waterfall
    md-mode="fixed"
  >
    <md-app-toolbar class="md-primary md-dense">
      <div class="md-toolbar-section-start">
        <router-link to="/" class="md-title">Reihung</router-link>
      </div>
    </md-app-toolbar>

    <md-app-content>
      <radiorow name="Joehama Klint"/>
      <radiorow name="Kirk dickson"/>
      <radiorow name="?????"/>
      <radiorow name="Mike Oxlong"/>
      <radiorow name="Lea Lo"/>
    </md-app-content>
  </md-app>
</template>

<script>
import Radiorow from './Radiorow'

export default {
  name: 'App',

  components: {
    Radiorow,
  },

  methods: {
    answer() {
      return 42
    },
  },
}
</script>

<style scoped>
</style>
