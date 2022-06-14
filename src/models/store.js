/**
 * Vuex store example
 */
export default {
    /** Application state */
    state: {
        loggedIn: false,
        server: 'http://192.168.2.88/Projects/PushUpBackend',
    },

    /** Methods that read the application state */
    getters: {
        friendlyCounter(state) {
            return `counter = ${state.counter}`
        },
    },

    /** Methods that change the application state synchronously */
    mutations: {
        addImage(state, image) {
            state.images.push(image)
        },
    },

    /** Methods that change the application state asynchronously */
    actions: {
        countLater({ commit }) {
            setTimeout(() => { commit('count')}, 1000)
        },
    },
}

