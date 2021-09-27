<template>
  <div class="container">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <div v-for="tag in post.tags" :key="tag" class="pill">#{{ tag }}</div>
      <button @click="handleDelete" class="delete">delete post</button>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '../firebase/config';

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    // const { post, error, load } = getPost(post.id);
    const { post, error, load } = getPost(route.params.id);

    load();

    const handleDelete = async () => {
      await projectFirestore.collection('posts').doc(route.params.id).delete();

      router.push('/');
    };

    return { post, error, handleDelete };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}

.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ccc;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 14px;
}

.delete {
  margin: 6rem auto 2rem auto;
  max-width: 200px;
}
</style>
