<template>
  <div class="container">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
}

@media (min-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
}
</style>
