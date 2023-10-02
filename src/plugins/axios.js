import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWE1ZjY5NDJiZjIzMGYxZGFiZjk3NWI0NGI5ZjBmZiIsInN1YiI6IjY1MDQ2ODcxZDdkY2QyMDBmZmVkYzQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Phd4NQs59UCw_DnkYwiiCnyNSaVRiyHPXAtVYPpfH-A`
  }
})

export default api