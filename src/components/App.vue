<template>
  <div id="wrapper">
    <div class="toolbar">

      <div class="md-subheading md-toolbar-section-end">
        <div class="md-title home left">
          <router-link
              to="/"
              class="md-title"
          >
            <img src="../data/img/logo.png" width="170">
          </router-link>
        </div>
        <router-link
          to="/transformation"
          class="md-title right"
        >
          Transformations
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
.home {
  margin-left: 3%;
  position: absolute;
  left: 0!important;
  align-items: center;
}

.right {
  margin-right: 3%;
  font-size: 1.4em;
  color: lightgray!important;
}

.toolbar {
  position: absolute;
  background-color: rgba(16, 16, 18, .4);
  width: 100%;
  color: white!important;
  z-index: 100;
  padding-top: 4%;
  padding-bottom: 4%;
}

#wrapper {
  width:100%;
  height: 100%;
}
</style>
