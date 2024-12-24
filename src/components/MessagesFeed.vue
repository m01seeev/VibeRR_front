<template>
  <div class="wrapper">
    <div class="header"><p class="h-14">{{chat.name}}</p></div>
    <ScrollArea>
      <div class="feed">
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
      </div>
      <ScrollBar orientation="vertical"/>
    </ScrollArea>
    <div class="footer py-2.5 px-2.5 flex items-center"
         :style="{height: `${containerHeight}px`, alignItems: 'flex-end'}">
      <textarea class="input text-grayText text-lg outline-none w-11/12 overflow-hidden resize-none" rows="1"
                @input="autoResize" ref="textarea" :style="{maxHeight: `${maxHeight}px`}" placeholder="Введите сообщение..." v-model="message">
      </textarea>
      <button class="h-8 w-8 mx-8"><a href=""><img src="/src/assets/images/send.svg" alt=""></a></button>
    </div>
  </div>
</template>

<style scoped>
.chats, .input, .footer {
  background: linear-gradient(140deg, #282828, #1E1E1E);

}

.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header (авто) | Feed (растягивается) | Footer (авто) */
  height: 100vh; /* Высота экрана */
  overflow: hidden; /* Убираем прокрутку для всей страницы */
}

/* Header */
.header {
  background-color: #282828;
  color: white;
  padding: 10px;
  text-align: center;
}

/* Feed (прокручиваемая область) */
.feed {
  overflow-y: auto; /* Вертикальная прокрутка */
  background-color: #3c3c3c;
  padding: 10px;
}

/* Footer */
.footer {
  background-color: #282828;
  display: flex;
}


</style>
<script setup>
import {ref} from "vue";
import Message from "@/components/Message.vue";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area/index.js";

const textarea = ref(null);
const containerHeight = ref(48);
const lineHeight = 28;
const maxLines = 4;
const maxHeight = maxLines * lineHeight;
const message = ref("");
const {chat} = defineProps(["chat"])

function autoResize(event) {
  const textareaElement = textarea.value;

  if (textareaElement) {
    textareaElement.style.height = "auto";

    if (textareaElement.scrollHeight > maxHeight) {

      preventExcessInput(textareaElement);
    } else {
      textareaElement.style.height = `${textareaElement.scrollHeight}px`;
      containerHeight.value = Math.min(
          textareaElement.scrollHeight + 20
      );
    }
  }
}

function preventExcessInput(textareaElement) {
  const currentValue = textareaElement.value;
  textareaElement.value = currentValue.slice(0, -1);
  textareaElement.style.height = `${maxHeight}px`;
}
</script>
