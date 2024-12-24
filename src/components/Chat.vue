<template>
  <div class="contact flex flex-row py-2.5 gap-2 px-2">
      <img src="/src/assets/images/ava.jpg" alt="" class="rounded-full h-14 w-14">
    <div class="flex flex-col w-full justify-center text-grayText">
      <div class="flex justify-between"><p class="truncate w-[160px]">{{chat.name}} {{chat.surname}}</p><p>{{ chat.messageTime }}</p></div>
      <div><p class="truncate w-[200px]">{{ chat.message }}</p></div>
    </div>
  </div>
</template>
<style scoped>
.contact:hover {
  cursor: pointer;
  background-color: rgba(185, 185, 185, 0.1);
}

</style>
<script setup>
const {chat} = defineProps(["chat"])
</script>