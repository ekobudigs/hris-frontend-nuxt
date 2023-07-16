export const state = () => ({
    name: '',
    email: '',
    gender: '',
    age: '',
    phone: '',
    team_id: '',
    role_id: '',
    role_name: ''
})

export const mutations ={
    updateName(state,playload){
        state.name = playload
    },
    updateEmail(state,playload){
        state.email = playload
    },
    updateGender(state,playload){
        state.gender = playload
    },
    updateAge(state,playload){
        state.age = playload
    },
    updatePhone(state,playload){
        state.phone = playload
    },
    updateTeamId(state,playload){
        state.team_id = playload
    },
    updateRoleId(state,playload){
        state.role_id = playload
    },
    updateRoleName(state,playload){
        state.role_name = playload
    },

}
