<template>
  <nav class="filter-nav">
    <button
      class="sub-nav"
      v-for="filter in filters"
      :key="filter.value"
      @click="updateFilter(filter.value)"
      :class="{ active: current === filter.value }"
    >
      {{ filter.label }}
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChanger", by);
    },
  },
  computed: {
    filters() {
      return [
        { label: "View all", value: "all" },
        { label: "Completed", value: "completed" },
        { label: "In Process", value: "ongoing" },
      ];
    },
  },
};
</script>

<style></style>
