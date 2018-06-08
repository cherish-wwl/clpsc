<template>
  <div>
    <div>
      <img src="../assets/index/u0.jpg" />
    </div>
    <el-row>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo content-80"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">学会概况</template>
          <el-menu-item index="2-1">学会简介</el-menu-item>
          <el-menu-item index="2-2">学会章程</el-menu-item>
          <el-menu-item index="2-3">学会领导</el-menu-item>
          <el-menu-item index="2-4">学术自律规范</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">新闻资讯</el-menu-item>
        <el-menu-item index="5">学术活动</el-menu-item>
        <el-menu-item index="6">荣誉奖项</el-menu-item>
        <el-menu-item index="7">专题周刊</el-menu-item>
        <el-menu-item index="4">联系我们</el-menu-item>
      </el-menu>
    </el-row>
    <nuxt/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex:"1"
    }
  },
  methods:{
    handleSelect(val) {
      console.log(val)
    }
  }
}
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
img {
  width:100%;
}
.content-80{
  padding: 0 10%;
}
</style>
