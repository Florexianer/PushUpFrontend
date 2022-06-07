<template>
  <div id="wrapper">
    <div>
      <div class="toolbar">
        <router-link
          to="/"
          class="md-title"
        >
          {{ $t('title') }}
        </router-link>
      </div>

      <div class="md-subheading md-toolbar-section-end">
        <router-link
          to="/info"
          class="md-title"
        >
          Info
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'App',

    components: {
    },

    methods: {
        answer() {
            return 42
        },
    },
}
</script>

<style scoped>
.toolbar {
  position: absolute;
  top: 0;
  left: 0;
}

#wrapper {
  width:100%;
  height: 100%;
}
</style>
