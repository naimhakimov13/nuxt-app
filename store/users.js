export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
}

export const actions = {
  // async fetchUsers({commit}) {
  //   try {
  //     const users = await this.$axios.$get("http://localhost:4000/users")
  //     commit('setUsers', users)
  //   } catch (e) {
  //     throw e
  //   }
  // },
  // async fetchUserById({}, userId) {
  //   try {
  //     return await this.$axios.$get(`http://localhost:4000/users/${userId}`)
  //   } catch (e) {
  //     throw e
  //   }
  // }
}

export const getters = {
  users: state => state.users
}