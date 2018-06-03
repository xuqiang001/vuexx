<template>
        <div>
        <h2 class="sub-header">修改武器</h2>
        <form>
          <div class="form-group">
            <input type="text" v-model="datalist.name" value="xxx" class="form-control" id="name" placeholder="武器名称">
          </div>
          <div class="form-group">
            <input type="text" v-model="datalist.gender" value="xxx" class="form-control" id="gender" placeholder="武器属性">
          </div>
          <button type="submit" @click.prevent="handleEdit" class="btn btn-success">提交</button>
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
      },
      id: -1
    };
  },
  created() {
    // 获取id上的数据
    this.id = this.$route.params.id;
    // 加载数据
    this.locadata();
  },
  methods: {
    locadata() {
      this.$http
        .get(`/heroes/${this.id}`)
        .then(res => {
          if (res.status === 200) {
            this.datalist = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit() {
      this.$http.patch(`/heroes/${this.id}`, this.datalist)
        .then(res => {
          if (res.status === 200) {
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
