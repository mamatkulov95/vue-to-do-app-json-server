<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input
      placeholder="Enter title here"
      type="text"
      v-model="title"
      required
    />
    <label>Information about task</label>
    <textarea
      placeholder="write description of the task"
      v-model="deadline"
      required
    ></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      deadline: "",
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post("https://vue-json-server-202f9705172c.herokuapp.com/", {
        title: this.title,
        deadline: this.deadline,
        complete: false,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
