import { createStore } from 'vuex'
import User from "../models/user"
import axios from 'axios'

export default createStore({
  state: {
    posts: [] as Array<User>,
  },
  mutations: {
    getJokes: (state) => {
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
          "content-type": "application/json"
        }
      }).then((res) => {
        res.data.forEach((post: User) => {
          state.posts.push({
            id: post.id,
            title: post.title,
            body: post.body
          })
        });
      }
      )
    }
  },
  actions: {

  },
  getters: {
    giveUser: (state) => {
      return state.posts
    }
  },
  modules: {
  }
})
