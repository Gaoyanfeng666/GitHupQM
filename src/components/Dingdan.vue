<template>
  <div>
             <el-container>
        <el-aside width="200px">
             <el-menu
                :default-active="this.$route.meta.Gaoliang"
                class="el-menu-vertical-demo"
                @select="onSelect"
                    >
                     <el-menu-item index="/dingdan1">
        <i class="el-icon-menu"></i>
        <span slot="title">订单1</span>
      </el-menu-item>
       <el-menu-item index="/dingdan2">
        <i class="el-icon-menu"></i>
        <span slot="title">订单2</span>
      </el-menu-item>
       <el-menu-item index="/dingdan3">
        <i class="el-icon-menu"></i>
        <span slot="title">订单3</span>
      </el-menu-item>
       <el-menu-item index="/dingdan4">
        <i class="el-icon-menu"></i>
        <span slot="title">订单4</span>
      </el-menu-item>
             </el-menu>
        </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
        </el-container>
  </div>
</template>

<script>
export default {
  methods:{
    onSelect(index){
      this.$router.push(index)
    }
  }
}
</script>

<style>

</style>