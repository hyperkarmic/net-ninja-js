let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@netninja.co.uk',
  blogs: [
    { title: 'my bath', likes: 30 },
    { title: 'my shower', likes: 50 },
    { title: 'my bidet', likes: 23 },
  ],
  location: 'berlin',

  login() {
    console.log('the user logged in')
  },
  logout() {
    console.log('the user logged out')
  },
  logblogs() {
    //this.blogs
    console.log('this user has written the following blogs')
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes)
    })
  },
}

console.log(user)
user.login()
user.logout()
user.logblogs()
