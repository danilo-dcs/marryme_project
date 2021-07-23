//state

export const state = () => ({
   mode: 'login'
})

//getters  (retorna os estados)
export const getters = {

}

//actions (realiza alguma ação com os estados)
export const actions = {
   
}

//mutations (modifica os estados)
export const mutations = {
   SET_DIALOG_MODE(state, mode){
      state.mode = mode
   },
}