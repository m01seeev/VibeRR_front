<template>
  <div>
    <div class="relative z-0">
      <SignInBackground/>
    </div>
    <div class="flex flex-col absolute z-10 top-0 left-0 w-full justify-center items-center mt-10">
      <div class="mb-5">
        <img src="/src/assets/images/logo.svg" alt="">
      </div>
      <div>
        <p class="text-grayText text-3xl font-istok ">Вход Vibe<span class="RR text-purpleHover w-1/4">RR</span></p>
      </div>
      <div class="sign-in-card my-5 w-3/12 border-solid border rounded-lg">
        <p class="pt-3 pb-1.5 pl-4 font-istok text-grayText text-sg">Логин</p>
        <div class="flex flex-row justify-center">
          <input type="text" v-model="username"
                 class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none">
        </div>
        <div class="flex flex-row justify-between">
          <p class="py-1.5 px-4 font-istok text-grayText text-sg">Пароль</p>
          <p class="py-1.5 px-4 font-istok text-brightPurple text-sg hover:text-purple cursor-pointer"><a href="">Забыли
            пароль?</a></p>
        </div>
        <div class="flex flex-row justify-center">
          <input type="password" v-model="password"
                 class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none">
        </div>
        <div class="flex flex-row justify-center">
          <button
              class="sign-in-button w-3/5 h-10 my-3 font-istok font-normal text-xl text-grayText rounded-2xl bg-purpleHover"
              @click="handleSignIn">
            Войти
          </button>
        </div>
      </div>
      <div class="flex flex-row justify-center border-solid border rounded-lg w-1/4 sign-up-card">
        <p class="py-7 text-grayText">Ещё не зарегистрированы?<span
            class="text-brightPurple cursor-pointer hover:text-purple"><a
            href="/signup"> Создайте аккаунт</a></span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sign-up-card {
  border-color: rgba(185, 185, 185, 0.5);
}

.sign-in-button {
  transition: background-color 0.2s ease-in-out;
}

.sign-in-button:hover {
  background-color: rgba(200, 11, 210, 0.8);
  color: #fff;
}

.sign-in-card {
  background: linear-gradient(140deg, #282828, #1E1E1E);
  border-color: rgba(185, 185, 185, 0.5);
}

.username {
  color: rgba(185, 185, 185, 0.5);
}

.RR {
  animation: colorChange 5s infinite ease-in-out;
}

@keyframes colorChange {
  50% {
    color: #C80BD2;
    filter: blur(1px);
  }
  45%, 55% {
    color: #95069a;
    filter: blur(0);
  }
  60% {
    color: #67066C;
  }
}
</style>

<script setup lang="js">
import SignInBackground from "@/components/SignInBackground.vue";
import router from "@/router.js";
import axios from "axios";
import {ref} from "vue";

const username = ref("");
const password = ref("");

function handleSignIn() {
  console.log("handleLogin вызван");
  axios
      .post("http://localhost:8080/api/v1/auth/signin", {
        username: username.value,
        password: password.value
      })
      .then((response) => {
        console.log("Ответ сервера:", response.data);
        const token = response.data.token;
        const user_id = response.data.user_id;
        if (token) {
          localStorage.setItem("token", token); // Сохраняем токен
          localStorage.setItem("user_id", user_id)
          console.log("Токен сохранён:", token); // Убедитесь, что токен сохранён
          console.log("Переходим на страницу /messages"); // Лог перед push
          router.push("/messages");
        } else {
          console.error("Токен отсутствует в ответе сервера");
        }
        localStorage.setItem("token", token); // Сохраняем токен
        console.log("dabavilos")
        router.push("/messages");
      })
      .catch((error) => {
        alert("Ошибка входа: " + error.response.data);
      });
}
</script>

