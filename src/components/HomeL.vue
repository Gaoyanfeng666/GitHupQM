<template>
  <div>
      <el-container>
        <el-aside width="200px">
             <el-menu
                :default-active="this.$route.meta.Gaoliang"
                class="el-menu-vertical-demo"
                @select="onSelect"
                    >
                     <el-menu-item index="/home1">
        <i class="el-icon-menu"></i>
        <span slot="title">基础设置</span>
      </el-menu-item>
       <el-menu-item index="/homel2">
        <i class="el-icon-menu"></i>
        <span slot="title">物流设置</span>
      </el-menu-item>
       <el-menu-item index="/homel3">
        <i class="el-icon-menu"></i>
        <span slot="title">管理员管理</span>
      </el-menu-item>
       <el-menu-item index="/homel4">
        <i class="el-icon-menu"></i>
        <span slot="title">交易设置</span>
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
            console.log(index);
            this.$router.push(index)
        }
    }
}
</script>

<style>

</style>