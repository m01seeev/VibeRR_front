<template>
  <div>
    <h3>{{ contact.username }}</h3>
    <h3>ПИДАРАС</h3>

  </div>
</template>
<style scoped>

</style>
<script setup>
const {contact} = defineProps(["contact"])
</script>