<template>
  <nav v-if="user">
    <div>
      <p>Hey there, {{ userName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';
import { computed } from 'vue';

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();

      if (!error.value) {
        console.log('user logged out');
      }
    };

    const userName = computed(() => {
      return (
        user.value.displayName[0].toUpperCase() +
        user.value.displayName.slice(1)
      );
    });

    return { handleClick, user, userName };
  },
};
</script>

<style></style>
