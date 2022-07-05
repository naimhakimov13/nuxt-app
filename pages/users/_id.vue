<template>
  <section>
    <h1>User with id {{ user.name }}</h1>
    <hr>
    <b> {{ user.email }}</b>
  </section>
</template>

<script>
export default {
  // validate({params}) {
  //   return /^\d+$/.test(params.id)
  // },
  async asyncData({params, store}) {
    try {
      const user = await store.dispatch('users/fetchUserById', params.id)
      return {user}
    } catch (e) {
      console.log(e)
    }
  }
}
</script>