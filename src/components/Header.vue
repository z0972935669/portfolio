<template>
  <header class="header">
    <h1>我的作品集</h1>
    <img src="@/assets//logo.svg" alt="Logo" class="logo" />
    <nav>
      <router-link to="/">首頁</router-link>
    </nav>
  </header>
</template>
  
<script>
export default {
  name: "Header",
};
</script>
  
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #282c34;
  color: white;

  .logo {
    height: 40px;
  }

  nav {
    a {
      color: white;
      text-decoration: none;
      margin-left: 20px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
  