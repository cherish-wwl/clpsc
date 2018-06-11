<template>
  <div class="content-mar-80 swiper-content">
    <el-row class="swiper-part1">
      <el-col :span='15'>
        <img :src="listData[activeIndex].bigImg"/>
      </el-col>
      <el-col :span='9'>
        <h2>{{ listData[activeIndex].title }}</h2>
        <p>
          {{ listData[activeIndex].descr }}
        </p>
      </el-col>
    </el-row>
    <el-row class="swiper-part2">
      <div class="pagetions" :class="activeIndex == index?'active':''" v-for='(item,index) in listData' :key="index" v-on:mouseenter="changeActive(index)">
        <img :src="item.smallImg" class="clickableImg"/>
      </div>
    </el-row>
  </div>
</template>
<script>
import '~/assets/css/swiper.scss'  
export default {
  data (){
    return {
      activeIndex:0,
      listData:[
        {
          id:1,
          smallImg:require("../../assets/index/u15.jpg"),
          bigImg:require("../../assets/index/u15.jpg"),
          title:'中国中文信息学会2017学术年会暨理事会在深圳成功召开001',
          descr:'2017年11月23-24日， 由中国中文信息学会医疗健康与生物信息处理专业委员会主办，哈尔滨工业大学（深圳）承办的第三届中国健康信息处理大会（CHIP 2017）在深圳大梅沙隆重举行。会议首先分别邀...',
          url:'www.china-nlp.com.cn'
        },
        {
          id:2,
          smallImg:require("../../assets/index/u15.jpg"),
          bigImg:require("../../assets/index/u15.jpg"),
          title:'中国中文信息学会2017学术年会暨理事会在深圳成功召开002',
          descr:'2017年11月23-24日， 由中国中文信息学会医疗健康与生物信息处理专业委员会主办，哈尔滨工业大学（深圳）承办的第三届中国健康信息处理大会（CHIP 2017）在深圳大梅沙隆重举行。会议首先分别邀...',
          url:'www.china-nlp.com.cn'
        },
        {
          id:3,
          smallImg:require("../../assets/index/u15.jpg"),
          bigImg:require("../../assets/index/u15.jpg"),
          title:'中国中文信息学会2017学术年会暨理事会在深圳成功召开003',
          descr:'2017年11月23-24日， 由中国中文信息学会医疗健康与生物信息处理专业委员会主办，哈尔滨工业大学（深圳）承办的第三届中国健康信息处理大会（CHIP 2017）在深圳大梅沙隆重举行。会议首先分别邀...',
          url:'www.china-nlp.com.cn'
        }

      ]
    }
  },
  methods:{
    changeActive(index){
      console.log("当前选中为："+index)
      this.activeIndex = index
    }
  },
  mounted(){
    // 获取数据
  }
}
</script>

<style lang="scss">
 
</style>