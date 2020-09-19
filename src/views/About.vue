<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h4>{{ post.id }} /\ {{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { computed, defineComponent } from "vue";
import User from "../models/user";

export default defineComponent({
  name: "About",
  setup() {
    const posts = computed<User[]>(() => store.getters.giveUser);
    return { posts };
  },
});
</script>

<style lang="scss" scoped>
li {
  padding: 5px 0;
  display: block;
  text-align: left;
  p {
    padding: 10px 0;
  }
}
</style>
