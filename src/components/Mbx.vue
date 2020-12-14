<template>
  <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: this.$route.meta.Home }">{{this.$route.meta.Shouye}}</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">{{this.$route.meta.title}}</a></el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>