<template>
  <form @submit.prevent="handleUpdate">
    <label for="title">Title:</label>
    <input type="text" v-model="title" required />
    <label for="details">Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      url: `http://localhost:3000/projects/${this.id}`,
    };
  },
  mounted() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      });
  },
  methods: {
    handleUpdate() {
      fetch(this.url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then(() => this.$router.push('/'))
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style></style>
