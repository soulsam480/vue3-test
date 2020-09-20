<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <br />
    <input type="text" v-model="user.name" />
    <br />
    <br />
    <input type="text" v-model="user.email" />
    <br />
    <br />
    <button @click="addUser">add User</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import store from "@/store";
import db from "../nedb";
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const user = reactive({
      name: "" as string,
      email: " " as string,
    });
    const addUser = () => {
      console.log("fired?");

      db.insert({ name: "sambit" })
        .then((res: any) => console.log(res))
        .catch((err: any) => console.log(err));
    };
    return {
      user,
      addUser,
    };
  },
});
</script>
