<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags';

export default {
  setup(props) {
    const { tags } = useTags(props.posts);

    return { tags };
  },
  props: ['posts'],
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid var(--primary-ligth-color);
  padding: 16px 8px;
  color: var(--accent-color);
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: var(--primary-ligth-color);
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: var(--accent-color);
  font-weight: bold;
}
</style>
