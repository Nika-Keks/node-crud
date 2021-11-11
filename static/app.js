const App = {
  data() {
    return {
      servers: [],
      name: '',
      surname: '',
      patronymic: ''
    }
  }, 
  methods: {
    async addStudent() {
      if (this.name.lenght == 0 || this.surname == 0)
        return 
      const data = {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic
      }
      
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      this.name = ''
      this.surname = ''
      this.patronymic = ''
      const newStudent = await res.json()
      this.servers.push(newStudent)
    },
    async remove(id) {
      await fetch(`/api/server/${id}`, {method: 'DELETE'})
      this.servers = this.servers.filter(s => s.id !== id)
    }
  },
  async mounted() {
    const res = await fetch('/api/server')
    this.servers = await res.json()
  }
} 

Vue.createApp(App).mount('#app')