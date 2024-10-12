<!-- src/views/Home.vue -->
<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <UserCard :user="user" @userClick="goToUserDetails" />
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
      ],
    };
  },
  methods: {
    goToUserDetails(user) {
      this.$router.push(`/user/${user.id}`);
    },
  },
};
</script>
