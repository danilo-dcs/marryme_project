//state
export const state = () => ({
   drawerState: false
})

//getters
export const getters = {
   getDrawer: (state) => {
      return state.drawerState
   }
}

//mutations (modifica os estados)
export const mutations = {
   SET_DRAWER(state, enable) {
      state.drawerState = enable
   },
}
