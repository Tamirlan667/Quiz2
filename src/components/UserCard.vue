<!-- src/components/UserCard.vue -->
<template>
  <div @click="handleClick" class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    handleClick() {
      this.$emit("userClick", this.user);
    },
  },
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}
</style>
