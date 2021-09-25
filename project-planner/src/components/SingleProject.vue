<template>
  <li class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <div @click="toggleDetail" class="title">
        <span>{{ project.title }}</span>
        <span class="material-icons"> expand_more </span>
      </div>

      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons"> edit </span>
        </router-link>
        <span class="material-icons" @click="deleteProject"> delete </span>
        <span class="material-icons tick" @click="toggleComplete"> done </span>
      </div>
    </div>
    <div class="detail" v-if="showDetail">
      <p>{{ project.details }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetail: false,
      url: `http://localhost:3000/projects/${this.project.id}`,
    };
  },
  methods: {
    toggleDetail() {
      this.showDetail = !this.showDetail;
    },
    deleteProject() {
      fetch(this.url, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch((error) => console.log(error.message));
    },
    toggleComplete() {
      fetch(this.url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          complete: !this.project.complete,
        }),
      })
        .then(() => this.$emit('complete', this.project.id))
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
  list-style: none;
}
.title {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1rem 0;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>
