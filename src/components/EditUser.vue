<script setup lang="ts">
const { data } = defineProps(["data"]);

</script>

<template>
  <div>
    <el-form :model="data" label-width="auto">
      <el-form-item label="用户名">
        <el-input v-model="data.name" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="data.age" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="data.gender">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="data.tel" />
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input v-model="data.email" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
