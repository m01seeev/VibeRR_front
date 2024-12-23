<template>
  <div class="flex flex-row">
    <div>
      <div class="flex flex-col">
        <h3>КОНТАКТЫ</h3>
        <Contact v-for="contact in contacts" :key="contact.id" :contact="contact"/>
      </div>
      <div class="flex flex-col">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";
import Contact from "@/components/Contact.vue";


const contacts = ref([]);

const fetchContacts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/users/6769573f53c7d9172fe040e7/contacts");
    contacts.value = response.data;
  } catch (error) {
    console.error("ХУЙНЯ КАКАЯТО", error);
  }
};
onMounted(fetchContacts);
</script>