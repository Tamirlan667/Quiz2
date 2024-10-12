<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <div class="nav-brand">User Management</div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Общие стили */
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  background-image: url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDh8fGdyYW5kJTIwYmFja2dyb3V0fGVufDB8fHx8MTY4MTM0MTQzNA&ixlib=rb-1.2.1&q=80&w=1080");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Стили для навигации */
nav {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 20px 0; /* Увеличен отступ */
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 28px; /* Увеличен размер шрифта */
  font-weight: bold;
  color: #42b983;
  margin-left: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin: 0 30px; /* Увеличен отступ между элементами */
}

nav ul li a {
  color: #42b983;
  font-weight: 600;
  text-decoration: none;
  padding: 15px 20px; /* Увеличены отступы */
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 18px; /* Увеличен размер шрифта */
}

nav ul li a:hover {
  background-color: rgba(66, 185, 131, 0.1);
}

nav ul li a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}

/* Основной контент */
main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
}

/* Стили для UserCard.vue */
.user-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 25px; /* Увеличен отступ внутри карты */
  margin: 15px; /* Увеличен отступ между картами */
  width: 300px; /* Увеличена ширина карты */
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.user-card h3 {
  color: #42b983;
  margin: 0;
  font-size: 20px; /* Увеличен размер заголовка */
}

.user-card p {
  color: #7f8c8d;
  font-size: 16px; /* Увеличен размер текста */
}

/* Кнопки и поля ввода */
button {
  background-color: #42b983;
  border: none;
  padding: 12px 20px; /* Увеличены отступы */
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px; /* Увеличен размер шрифта кнопки */
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #35495e;
}

input {
  padding: 12px; /* Увеличены отступы */
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px; /* Увеличен размер шрифта */
}

label {
  display: block;
  margin-bottom: 5px;
  color: #2c3e50;
  font-weight: bold;
  font-size: 16px; /* Увеличен размер шрифта */
}
</style>
