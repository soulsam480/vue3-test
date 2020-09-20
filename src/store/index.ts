import { createStore } from 'vuex'
import Post from "../models/user"
import axios from 'axios'
import db from "../nedb"
console.log(db);

export default createStore({
  state: {
    posts: [] as Array<Post>,
    dbData: []
  },
  mutations: {
    // todo sample test on how vuex/axios would work inside electron
    getJokes: (state) => {
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
          "content-type": "application/json"
        }
      }).then((res) => {
        res.data.forEach((post: Post) => {
          state.posts.push({
            id: post.id,
            title: post.title,
            body: post.body
          })
        });
      }
      )
    },
    fromDb: (state) => {
      console.log("fired");

      db.find({}).then((res: any) => {
        console.log(res);
        state.dbData = res

      }).catch((err: any) => {
        console.log(err);

      });
    }
  },
  actions: {
    addUser: (dat) => {
      console.log(dat);

      db.insert(dat)
        .then(() => console.log("added"))
        .catch((err: any) => console.log(err))
    }
  },
  getters: {
    giveUser: (state) => {
      return state.posts
    }
  },
  modules: {
  }
})
