<template>
    <div>
        <h2 class="sub-header">添加武器</h2>
        <form>
          <div class="form-group">
            <input type="text" v-model="datalist.name" class="form-control" id="name" placeholder="武器名称">
          </div>
          <div class="form-group">
            <input type="text" v-model="datalist.gender" class="form-control" id="gender" placeholder="武器属性">
          </div>
          <button type="submit" @click.prevent="handleAdd" class="btn btn-success">提交</button>
        </form>
    </div>
</template>

<script>
export default {
  // 获取数据
  data() {
    return {
      datalist: {
        name: '',
        gender: ''
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http.post(`/heroes`, this.datalist)
        .then(res => {
          if (res.status === 201) {
            this.$router.push({
              name: 'weapons'
            });
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
