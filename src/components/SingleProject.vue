<template>
  <div class="project" :class="{ activeCompleted: user.completed }">
    <div class="actions">
      <h3 @click="showDeadLine = !showDeadLine">{{ user.title }}</h3>

      <div class="icons">
        <img
          class="action-icons"
          v-for="icon in icons"
          :key="icon.name"
          :src="icon.src"
          :alt="icon.alt"
          style="height: 20px"
          @click="icon.action"
        />
      </div>
    </div>
    <div class="deadline" v-if="showDeadLine">
      <p>{{ user.deadline }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["user"],
  name: "SingleProject",

  data() {
    return {
      showDeadLine: false,
      url: "https://vue-json-server-202f9705172c.herokuapp.com/" + this.user.id,
    };
  },

  methods: {
    async deleteUser() {
      await axios.delete(this.url);
      this.$emit("delete", this.user.id);
    },

    async toggleComplete() {
      await axios.patch(this.url, { completed: !this.user.completed });
      this.$emit("complete", this.user.id);
    },
  },

  computed: {
    icons() {
      return [
        {
          name: "check",
          src: require("@/assets/check.png"),
          alt: "check-icon",
          action: this.toggleComplete,
        },
        {
          name: "pencil",
          src: require("@/assets/pencil.png"),
          alt: "pencil-icon",
          action: () =>
            this.$router.push({
              name: "editproject",
              params: { id: this.user.id },
            }),
        },
        {
          name: "delete",
          src: require("@/assets/delete.png"),
          alt: "delete-icon",
          action: this.deleteUser,
        },
      ];
    },
  },
};
</script>

<style scoped></style>
