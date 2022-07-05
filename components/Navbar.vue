<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">NuxtJS</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active" to="/" class="nav-link"
            >Home
            </nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" to="/users" class="nav-link"
            >Users
            </nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" to="/about" class="nav-link"
            >About
            </nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" to="/login" class="nav-link"
            >Login
            </nuxt-link
            >
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link"
            >Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>