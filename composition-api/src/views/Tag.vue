<template>
  <div class="container">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';

import Spinner from '../components/Spinner.vue';
import getPosts from '../composables/getPosts';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'Tag',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const filteredPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { posts, filteredPosts, error };
  },
};
</script>
