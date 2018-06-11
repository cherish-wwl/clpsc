import axios from 'axios'
let options ={
  timeous:5000,
  header:{
    post:{
      'Content-Type':'application/json'
    }
  }
} 
options.baseUrl = (process.env.SERVER ==='aws')?'http://192.168.1.1':'http://192.168.1.0'

export default axios.create(options)