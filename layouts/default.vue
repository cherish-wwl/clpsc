<template>
  <div>
    <div>
      <img src="../assets/index/u0.jpg" />
      <meun></meun>
    </div>
    <nuxt/>
  </div>
</template>
<script>
import '~/assets/css/main.scss' 
import Meun from '~/components/index/Meun.vue'
export default {
  components: {
    Meun
  },
  data () {
    return {
    
    }
  },
  methods:{
  
  }
}
</script>


<style>

  body{
    overflow-x: hidden;
  }

</style>
