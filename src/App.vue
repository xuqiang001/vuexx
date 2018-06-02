<template>
  <div>
      <!-- 导航 -->
      <my-header></my-header>
      <div class="container-fluid">
        <div class="row">
          <!-- 侧边栏 -->
          <my-sideber></my-sideber>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 列表 -->
          <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// 导入头部
import MyHeader from '@/components/myheader';
import MySideber from '@/components/mysideber';
export default {
  name: 'App',
  // 祖册局部变量
  components: {
    MyHeader,
    MySideber
  }
};
</script>

<style>

</style>
