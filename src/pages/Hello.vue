<script setup lang="ts">
import { DArrowRight } from "@element-plus/icons-vue";
import router from "../router";

const toHome = () => {
  router.replace("home");
};
</script>

<template>
  <div class="main">
    <p class="welcome">欢迎来到任刘洋的世界</p>
    <el-button size="large" type="primary" class="btn" @click="toHome">
      出发<el-icon class="el-icon--right"><DArrowRight /></el-icon>
    </el-button>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}

.welcome {
  color: antiquewhite;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  left: 510px;
  top: 80px;
}

.btn {
  font-size: 26px;
  transition: all 0.5s;
  position: absolute;
  left: 50px;
  top: 400px;
}

.btn:hover .el-icon {
  animation: translate 0.8s infinite ease-out;
}

@keyframes translate {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(15px);
  }
}
</style>
