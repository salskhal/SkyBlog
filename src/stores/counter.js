import { defineStore } from 'pinia'

export const useBlogStore = defineStore({
  id: 'blogs',
  state: () => ({
    blogs: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2022",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1, 2022",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2022",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 1, 2022",
      }
    ],
    editPost: null
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  // actions: {
  //   increment() {
  //     this.counter++
  //   }
  // }
})
