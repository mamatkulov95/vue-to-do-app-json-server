<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="deadline" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      deadline: "",
    };
  },
  async mounted() {
    let { data } = await axios.get(
      "https://vue-json-server-202f9705172c.herokuapp.com/" + this.id
    );
    this.title = data.title;
    this.deadline = data.deadline;
  },
  methods: {
    async handleSubmit() {
      await axios.patch(
        "https://vue-json-server-202f9705172c.herokuapp.com/" + this.id,
        {
          title: this.title,
          deadline: this.deadline,
        }
      );
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style></style>
