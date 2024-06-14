<template>
  <header class="header">
    <h1>作品集<img src="@/assets/logo.svg" alt="Logo" class="logo" /></h1>
    
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
  padding: 10px 20px;
  background: #282c34;
  color: #ffffff;

  .logo {
    height: 18px;
    margin-left: 10px;
  }

  nav {
    a {
      color: #ffffff;
      text-decoration: none;
      margin-left: 20px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
  