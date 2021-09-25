<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <ul v-for="project in filteredProjects" :key="project.id" class="list">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue';

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all',
    };
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.log(error.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    handleComplete(id) {
      let p = this.projects.find((project) => project.id === id);
      p.complete = !p.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === 'ongoing') {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>

<style>
.list {
  padding: 0;
}
</style>
