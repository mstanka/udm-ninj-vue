<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>Loading job details...</div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    };
  },
  mounted() {
    fetch(` http://localhost:3000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style></style>
