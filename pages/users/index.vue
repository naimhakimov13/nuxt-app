<template>
  <section>
    <h1>Users Page</h1>

    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="goTo(user.id)"
        >{{ user.name }} ({{ user.email }})</a
        >
      </li>
    </ul>
  </section>
</template>

<script>  
export default {
  // async asyncData({store, error}) {
  //   try {
  //     await store.dispatch('users/fetchUsers')
  //     return {}
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  // async fetch({store, error}) {
  //   try {
  //     if (!store.getters['users/users'].length) {
  //       await store.dispatch('users/fetchUsers')
  //     }
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  data() {
    return {
      pageTitle: "Users page",
    };
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    goTo(id) {
      this.$router.push("/users/" + id);
    },
  },
};
</script>