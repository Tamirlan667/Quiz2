<!-- src/views/UserDetails.vue -->
<template>
  <div class="user-details">
    <h1>User Details</h1>
    <p>ID: {{ user.id }}</p>
    <p>Email: {{ user.email }}</p>
    <label>
      Name:
      <input v-model="user.name" />
    </label>
    <button @click="updateUser">Update User</button>
    <!-- Кнопка для обновления -->
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    <!-- Уведомление об успешном обновлении -->
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      user: { id: this.id, name: "", email: "" },
      successMessage: "", // Сообщение об успешном обновлении
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.user = data;
        });
    },
    updateUser() {
      // Имитация отправки данных на сервер
      fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user), // Отправка обновленных данных
      })
        .then((response) => {
          if (response.ok) {
            this.successMessage = "User updated successfully!";
          } else {
            throw new Error("Failed to update user.");
          }
        })
        .catch((error) => {
          console.error(error);
          this.successMessage = "Failed to update user.";
        });
    },
  },
  beforeUnmount() {
    console.log(`User with ID ${this.id} has been unmounted.`);
  },
};
</script>

<style>
.user-details {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px; /* Ширина блока с деталями пользователя */
  margin: auto; /* Центрирование блока */
}

.success-message {
  color: green; /* Цвет сообщения об успешном обновлении */
  margin-top: 10px;
}
</style>
