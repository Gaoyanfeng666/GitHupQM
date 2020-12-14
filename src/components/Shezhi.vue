<template>
  <div>
                 <el-container>
        <el-aside width="200px">
             <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @select="onSelect"
                    >
                     <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">设置1</span>
      </el-menu-item>
       <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">设置2</span>
      </el-menu-item>
       <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">设置3</span>
      </el-menu-item>
       <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">设置4</span>
      </el-menu-item>
             </el-menu>
        </el-aside>
      <el-main>
          设置
      </el-main>
        </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>