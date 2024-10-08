<script setup lang="ts">
import { DArrowRight } from "@element-plus/icons-vue";
import router from "@/router";

const toHome = () => {
  router.push("home");
};

const toPhoto = () => {
  router.push("photo-album");
}
</script>

<template>
  <div class="main">
    <p class="welcome">欢迎来到任刘洋的世界</p>
    <el-button size="large" type="primary" class="btn" @click="toHome">
      出发
      <el-icon class="el-icon--right">
        <DArrowRight />
      </el-icon>
    </el-button>

    <el-button type="primary" class="photo" @click="toPhoto">
      相册
      <el-icon class="el-icon--right">
        <DArrowRight />
      </el-icon>
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
  text-shadow: 0 -5px 10px rgba(255, 255, 255, 0.5),
    /* 文字的光辉效果 */
    0 10px 20px rgba(255, 255, 255, 0.3),
    /* 文字下方的模糊光源 */
    0 15px 30px rgba(255, 255, 255, 0.2);
  /* 更远的模糊光源 */
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

.photo {
  transition: all 0.5s;
  position: absolute;
  right: 30px;
  top: 100px;
}

.photo:hover .el-icon {
  animation: translate 0.8s infinite ease-out;
}

@keyframes translate {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(50%);
  }
}
</style>
