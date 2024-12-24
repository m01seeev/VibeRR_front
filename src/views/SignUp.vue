<template>
  <div>
    <!-- Background -->
    <div class="relative z-0">
      <SignInBackground />
    </div>

    <!-- Registration Form -->
    <div class="flex flex-col absolute z-10 top-0 left-0 w-full justify-center items-center mt-10">
      <div>
        <p class="text-grayText text-3xl font-istok">Регистрация Vibe<span class="RR text-purpleHover">RR</span></p>
      </div>
      <div class="sign-up-card my-5 w-3/12 border-solid border rounded-lg">
        <!-- Full Name -->
        <p class="pt-3 pb-1.5 pl-4 font-istok text-grayText text-sg">Логин</p>
        <div class="flex flex-row justify-center">
          <input
              type="text"
              v-model="username"
              placeholder="Введите ваш логин"
              class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none"
          />
        </div>

        <!-- Email -->
        <p class="pt-3 pb-1.5 pl-4 font-istok text-grayText text-sg">Email</p>
        <div class="flex flex-row justify-center">
          <input
              v-model="email"
              type="email"
              placeholder="Введите ваш email"
              class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none"
          />
        </div>
        <p class="pt-3 pb-1.5 pl-4 font-istok text-grayText text-sg">Имя</p>
        <div class="flex flex-row justify-center">
          <input
              v-model="firstName"
              type="text"
              placeholder="Введите ваше имя"
              class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none"
          />
        </div>
        <p class="pt-3 pb-1.5 pl-4 font-istok text-grayText text-sg">Фамилия</p>
        <div class="flex flex-row justify-center">
          <input
              v-model="surname"
              type="email"
              placeholder="Введите вашу фамилию"
              class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none"
          />
        </div>

        <!-- Password -->
        <p class="pt-3 pb-1.5 pl-4 font-istok text-grayText text-sg">Пароль</p>
        <div class="flex flex-row justify-center">
          <input
              v-model="password"
              type="password"
              placeholder="Введите пароль"
              class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none"
          />
        </div>

        <!-- Confirm Password -->
        <p class="pt-3 pb-1.5 pl-4 font-istok text-grayText text-sg">Повторите пароль</p>
        <div class="flex flex-row justify-center">
          <input
              v-model="confirmPassword"
              type="password"
              placeholder="Повторите пароль"
              class="username mx-4 mb-1.5 pl-2 rounded bg-blackField border-solid border-grayText border w-11/12 text-sg focus:outline-none focus:outline-purple focus:border-none"
          />
        </div>

        <!-- Register Button -->
        <div class="flex flex-row justify-center">
          <button
              class="sign-in-button w-3/5 h-10 my-3 font-istok font-normal text-xl text-grayText rounded-2xl bg-purpleHover hover:bg-purple"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>

      <!-- Sign In Redirect -->
      <div class="flex flex-row justify-center border-solid border rounded-lg w-1/4 sign-in-card">
        <p class="py-7 text-grayText">
          Уже зарегистрированы?<span
            class="text-brightPurple cursor-pointer hover:text-purple"><a href="/signin"> Войдите</a></span>
        </p>
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
<script setup>
import SignInBackground from "@/components/SignInBackground.vue";
import {ref} from "vue";
import axios from "axios";


const username = ref("");
const email = ref("");
const password = ref("");
const firstName = ref("");
const surname = ref("");

function handleSignUp() {
  axios
      .post("http://localhost:8080/api/v1/auth/signup", {
        username: username.value,
        password: password.value,
        email: email.value,
        name: firstName.value,
        surname: surname.value,
      })
}

</script>
