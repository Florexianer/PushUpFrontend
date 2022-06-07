<template>
<div>
  <img :src="require(before)" alt="before picture">
  <img :src="require(after)" alt="after picture">
</div>
</template>

<script>
export default {
  name: "Transformation",
  props: {
    before: String,
    after: String,
  },
}
</script>

<style scoped>

</style>