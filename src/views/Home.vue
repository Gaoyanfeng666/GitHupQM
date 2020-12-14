<template>
  <div class="home">
    <el-container>
        <el-header>
            <div><h2 style="color:white">UNI-ADMIN</h2></div>
            <!-- 头部 -->
            <el-menu :default-active="this.$route.meta.Home" class="el-menu-demo" mode="horizontal" background-color="#545c64" 
            @select="onSelectHome"
            text-color="white" active-text-color="yellow">
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/mall">商品</el-menu-item>
              <el-menu-item index="/dingdan">订单</el-menu-item>
              <el-menu-item index="/huiyuan">会员</el-menu-item>
              <el-menu-item index="/shezhi">设置</el-menu-item>
                <el-submenu index="6">
                   <template slot="title"><i class="el-icon-user"></i>admin</template>
                   <el-menu-item index="6-1">修改</el-menu-item>
                    <el-menu-item @click="onClickDelete">退出</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header>
        <router-view></router-view>
  </el-container>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookies";
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      activeIndex:'1'
    }
  },
  methods:{
    onSelectHome(index){
      this.$router.push(index)
    },
    onClickDelete(){
      // 调用退出节点 来退出
      axios.post("http://ceshi5.dishait.cn/admin/logout",{
          token:Cookies.removeItem("token")
      }).then(res=>{
        console.log(res);
      }).catch(error=>{
        console.log(error);
      })
        
        this.$message.success("退出成功!")
        this.$router.push("/login")
    }
  }
}
</script>

<style>
   .el-header {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 90vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-menu-vertical-demo
{
    height: 90vh;
}
</style>
