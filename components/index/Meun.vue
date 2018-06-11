<template>
   <el-row>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo content-pad-80"
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
</template>
<script>
export default {
  data (){
    return{
      activeIndex:'1'
    }
  },
  methods:{
    handleSelect (val) {

    }
  }
}
</script>
