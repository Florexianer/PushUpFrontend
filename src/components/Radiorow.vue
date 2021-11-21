<template>
  <div>

    <div class="md-layout">
      <div class="md-layout-item">{{ name }}</div>
      <div class="md-layout-item">{{ place }}</div>
      <div class="md-layout-item">
        <md-radio
          v-model="radio1"
          value="radio1"
      />
        <md-radio
            v-model="radio2"
            value="radio2"
        />
        <md-radio
            v-model="radio3"
            value="radio3"
        />
        <md-radio
            v-model="radio4"
            value="radio4"
        />
        <md-radio
            v-model="radio5"
            value="radio5"
        /></div>
    </div>



  </div>
</template>

<script>
export default {
  name: "Radiorow",
  props: {
    name: {
      type: String,
      default: 'Joe mama'
    },
  },
  data () {
    return {
      place : null,
    }
  }
}
</script>

<style scoped>

</style>