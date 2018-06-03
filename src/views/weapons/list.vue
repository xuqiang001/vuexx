<template>
    <div>
        <h2 class="sub-header">武器列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" :to="{name:'Weaponsadd'}">添加</router-link>
        <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>序列</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in list" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                      <!-- <a href="edit.html">edit</a> -->
                      <!-- <router-link :to="{name:'Weaponsedit',params:{id:item.id}}">修改</router-link> -->
                      <router-link :to="{name: 'Weaponsedit',params:{id: item.id}}">EDIT</router-link>
                      &nbsp;&nbsp;
                      <a href="javascript:void(0)" @click.prevent="weaponsDelete(item.id)">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.locaData();
  },
  methods: {
    locaData() {
      // 发送请求
      this.$http.get('/heroes')
        .then(res => {
          // console.log(res);
          if (res.status === 200) {
            this.list = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    weaponsDelete(id) {
      // 删除数据
      if (!confirm('确定删除吗')) {
        return;
      }
      // 发送axios数据请求
      this.$http.delete(`/heroes/${id}`)
        .then(res => {
          if (res.status === 200) {
            this.locaData();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>
