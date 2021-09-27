<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input type="text" required v-model="title" />

      <label for="content">Content</label>
      <textarea required v-model="body"></textarea>

      <label for="tags">Tags</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />

      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>

      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { projectFirestore, timestamp } from '../firebase/config';

export default {
  setup() {
    const title = ref('');
    const body = ref('');
    const tag = ref('');
    const tags = ref([]);
    const error = ref(null);

    const router = useRouter();

    const handleKeydown = () => {
      tag.value = tag.value.trim();

      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }

      tag.value = '';
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp(),
      };

      try {
        const res = await projectFirestore.collection('posts').add(post);

        router.push('/');
      } catch (err) {
        error.value = err.message;
      }
    };

    return { title, body, tag, tags, handleKeydown, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 680px;
  margin: 0 auto;
  text-align: left;
  padding: 2rem;
  border: 1px dashed var(--primary-ligth-color);
  box-shadow: 2px 4px 10px var(--secondary-dark-color);
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid var(--primary-ligth-color);
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: var(--ligth-color);
  margin-bottom: 10px;
  background: var(--accent-color);
  padding: 5px 20px;
  border-radius: 3px;
}
button {
  display: block;
  margin-top: 30px;
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 10px 40px;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
}
</style>
