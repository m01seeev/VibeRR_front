<template>
  <div class="flex flex-row w-screen">
    <div class="chats flex flex-col w-1/4 h-screen">
      <div class="text-grayText font-istok text-xl flex justify-between items-center py-2.5">
        <Dialog>
          <DialogTrigger as-child>
            <img src="/src/assets/images/profile.svg" alt="" class="pl-4 cursor-pointer">
          </DialogTrigger>
          <DialogContent class="profile bg-blackField w-1/4 h-1/2 flex flex-col">
            <div class="flex flex-row h-fit pt-2 pl-2 items-center justify-between">
              <div class="flex flex-row">
                <img src="/src/assets/images/ava.jpg" alt="" class="h-20 w-20 rounded-full">
                <div class="flex flex-col justify-center pl-2.5">
                  <p class="text-nowrap truncate">Имя<span> Фамsss</span></p>
                  <p>@почта</p>
                  <p>niciawlaz</p>
                </div>
              </div>
              <button @click="handleLogout">
              <img src="/src/assets/images/logout.svg" alt="" class="mr-8 hover:bg-[#B9B9B919] p-1.5 cursor-pointer rounded-[10px]">
              </button>
            </div>
            <div>
              <p class="ml-2.5">Контакты</p>
              <ScrollArea>
                <div class="h-[190px]">
                  <div v-for="n in 10" class="flex py-1.5 hover:bg-[#B9B9B919] ease-in-out duration-200 px-2.5">
                    <img src="/src/assets/images/ava.jpg" alt="" class="h-14 w-14 rounded-full">
                  </div>
                </div>
                <ScrollBar orientation="vertical"/>
              </ScrollArea>
              <p class="my-2 ml-4 py-1.5 px-3 hover:bg-[#B9B9B919] w-fit rounded-xl cursor-pointer">Добавить контакт</p>
            </div>
          </DialogContent>
        </Dialog>
        <p class="pr-[129px]">Чаты</p>
      </div>
      <Chat v-for="chat in chats" :key="chat.id" :chat="chat" @click="selectedChat=chat"/>
    </div>
    <div class="flex flex-col w-full bg-[#3c3c3c] justify-center items-center text-xl">
      <MessagesFeed :chat="selectedChat" v-if="selectedChat"></MessagesFeed>
      <div class="bg-[#303030] rounded-xl px-2 py-0.5"
           v-else>
        <p>Выберите, кому хотите написать</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chats {
  background: linear-gradient(140deg, #282828, #1E1E1E);
}


</style>
<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";

import axios from "axios";
import Chat from "@/components/Chat.vue";
import MessagesFeed from "@/components/MessagesFeed.vue";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog/index.js";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area/index.js";
import router from "@/router.js";


const chats = ref([{id: 1, name: "Тимур", surname: "Хабибулаев", message: "ГОООООЛ", messageTime: "20:31"},
  {id: 2, name: "Кастян", surname: "Хабибулаев", message: "ГОООООЛ", messageTime: "20:31"},
  {id: 3, name: "Демас", surname: "Хабибулаев", message: "ГОООООЛ", messageTime: "20:31"},
  {id: 4, name: "Тимур", surname: "Хабибулаев", message: "ГОООООЛ", messageTime: "20:31"}
]);

const selectedChat = ref(null);

function handleKeydown(event) {
  if (event.key === "Escape") {
    selectedChat.value = null;
  }
}

// Добавляем и удаляем обработчик
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
// const fetchChats = async () => {
//   try {
//     const response = await axios.get("http://localhost:8080/api/v1/users/6769573f53c7d9172fe040e7/chats");
//     chats.value = response.data;
//   } catch (error) {
//     console.error("error", error);
//   }
// };
// onMounted(fetchChats);
function handleLogout() {
  console.log("Выход пользователя...");
  localStorage.removeItem("token"); // Удаляем токен
  router.push("/signin"); // Перенаправляем на страницу входа
}
</script>