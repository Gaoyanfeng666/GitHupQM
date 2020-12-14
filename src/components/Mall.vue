<template>
  <div>
       <el-container>
        <el-aside width="200px">
             <el-menu
                :default-active="this.$route.meta.Gaoliang"
                class="el-menu-vertical-demo"
                @select="onSelectMall"
                    >
                     <el-menu-item index="/mall1">
        <i class="el-icon-menu"></i>
        <span slot="title">商品1</span>
      </el-menu-item>
       <el-menu-item index="/mall2">
        <i class="el-icon-menu"></i>
        <span slot="title">商品2</span>
      </el-menu-item>
       <el-menu-item index="/mall3">
        <i class="el-icon-menu"></i>
        <span slot="title">商品3</span>
      </el-menu-item>
       <el-menu-item index="/mall4">
        <i class="el-icon-menu"></i>
        <span slot="title">商品4</span>
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
    onSelectMall(index){
      this.$router.push(index)
    }
  }
}
</script>

<style>

</style>