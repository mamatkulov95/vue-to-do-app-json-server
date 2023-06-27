<template>
  <div class="home">
    <filter-nav @filterChanger="current = $event" :current="current" />
    <div v-if="users.length">
      <div v-for="user in filteredProjects" :key="user.id">
        <single-project
          :user="user"
          @delete="handleDelete"
          @complete="changeComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "HomeView",
  components: {
    SingleProject,
    FilterNav,
  },
  data() {
    return {
      users: [],
      current: "all",
    };
  },

  async mounted() {
    const response = await axios.get("http://localhost:3000/projects/");
    this.users = await response.data;
  },
  methods: {
    handleDelete(id) {
      this.users = this.users.filter((user) => user.id != id);
    },
    changeComplete(id) {
      const user = this.users.find((user) => user.id == id);
      user.completed = !user.completed;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current == "all") {
        return this.users;
      }
      if (this.current == "completed") {
        return this.users.filter((user) => user.completed);
      }
      if (this.current == "ongoing") {
        return this.users.filter((user) => !user.completed);
      }
    },
  },
};
</script>
