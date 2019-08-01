const p = new Promise((resolve) => {
  console.log('In Promise')
  setTimeout(() => {
    resolve()
  }, 100)
})

p.then(() => {
  console.log('resolved')
})

export class Home {
  constructor(name) {
    this.name = name || 'home'
  }

  log() {
    for (const letter of this.name) {
      console.log(letter)
    }
  }
}

const myHome = new Home('myHome')

myHome.log()
