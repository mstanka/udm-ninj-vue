<template>
  <div class="create">
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
      };

      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      try {
        let data = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        });

        if (!data.ok) {
          throw Error('the post cannot be submitted');
        }
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
.create {
  background: #eee;
  padding: 2rem 0 5rem 0;
  max-width: 900px;
  margin: 0 auto;
}
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ccc;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  background: #58df58;
  padding: 5px 20px;
  border-radius: 3px;
}
button {
  display: block;
  margin-top: 30px;
  background: #58df58;
  color: white;
  border: none;
  padding: 10px 40px;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
}
</style>
