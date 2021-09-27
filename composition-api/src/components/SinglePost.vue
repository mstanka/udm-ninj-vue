<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="pill"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...';
    });

    return { snippet };
  },
};
</script>

<style>
.post {
  margin: 0 10px 40px 0;
  padding-bottom: 30px;
  border-bottom: 1px dashed var(--primary-ligth-color);
  line-height: 1.5em;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: var(--ligth-color);
  margin-bottom: 10px;
  max-width: 400px;
  background: var(--accent-color);
  padding: 8px 20px;
  border-radius: 3px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: var(--secondary-dark-color);
  background: var(--primary-dark-color);
  padding: 3px 12px;
  border-radius: 5px;
  font-size: 14px;
}
</style>
