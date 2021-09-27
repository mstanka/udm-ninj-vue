<template>
  <header>
    <h1>The Dojo Blog</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem;
  background: linear-gradient(
    to bottom,
    var(--secondary-dark-color),
    var(--secondary-color)
  );
}

header h1 {
  color: var(--primary-color);
  font-size: 2.3rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  header h1 {
    font-size: 4rem;
  }
}
header a {
  color: var(--primary-dark-color);
  text-decoration: none;
  margin-left: 20px;
  font-size: 1.3rem;
}
header a.router-link-active {
  color: var(--accent-color);
  font-weight: bold;
}
</style>
