<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <!-- <label for="exampleInputEmail1">Email address</label> -->
            <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <!-- <label for="exampleInputPassword1">Password</label> -->
            <input type="text" v-model="formData.gender" class="form-control" id="gender" placeholder="英雄性别">
          </div>

          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http.post(`/heroes`, this.formData)
        .then(res => {
          if (res.status === 201) {
            // 添加成功
            this.$router.push({
              name: 'heroes'
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
