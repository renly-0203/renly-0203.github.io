<script setup lang='ts'>

</script>

<template>
  <div class="bg">
    <div class="scene">
      <div class="cube">
        <div class="cube__face cube__face--front">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face cube__face--back">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face cube__face--left">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face cube__face--right">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face cube__face--top">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face cube__face--bottom">
          <img src="../assets/img/RenlY.png" alt="">
        </div>

        <div class="cube__small">
        <div class="cube__face__small cube__face__small--front">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face__small cube__face__small--back">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face__small cube__face__small--left">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face__small cube__face__small--right">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face__small cube__face__small--top">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
        <div class="cube__face__small cube__face__small--bottom">
          <img src="../assets/img/RenlY.png" alt="">
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.scene {
  perspective: 800px;
  /* 设置透视距离 */
  /* position: relative; */
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  /* 保留子元素的 3D 变换 */
  animation: rotateCube 18s infinite linear;
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
}

.cube__face img {
  width: 100%;
  height: 100%;
}

/* 定义立方体的 6 个面 */
.cube__face--front {
  transform: rotateY(0deg) translateZ(100px);
  transition: all .3s;
}

.cube__face--back {
  transform: rotateY(180deg) translateZ(100px);
  transition: all .3s;
}

.cube__face--left {
  transform: rotateY(-90deg) translateZ(100px);
  transition: all .3s;
}

.cube__face--right {
  transform: rotateY(90deg) translateZ(100px);
  transition: all .3s;
}

.cube__face--top {
  transform: rotateX(90deg) translateZ(100px);
  transition: all .3s;
}

.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
  transition: all .3s;
}

.cube:hover .cube__face {
  background: rgba(255, 255, 255, .8);
}

.cube:hover .cube__face--front {
  transform: rotateY(0deg) translateZ(200px);
}

.cube:hover .cube__face--back {
  transform: rotateY(180deg) translateZ(200px);
}

.cube:hover .cube__face--left {
  transform: rotateY(-90deg) translateZ(200px);
}

.cube:hover .cube__face--right {
  transform: rotateY(90deg) translateZ(200px);
}

.cube:hover .cube__face--top {
  transform: rotateX(90deg) translateZ(200px);
}

.cube:hover .cube__face--bottom {
  transform: rotateX(-90deg) translateZ(200px);
}

.cube__small {
  width: 80px;
  height: 80px;
  position: absolute;
  transform: translate3d(60px, 60px, 0px);
  transform-style: preserve-3d;
  /* 保留子元素的 3D 变换 */
}

.cube__small img {
  width: 100%;
  height: 100%;
}

.cube__face__small {
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 1);
}

.cube__face__small--front {
  transform: rotateY(0deg) translateZ(40px);
}

.cube__face__small--back {
  transform: rotateY(180deg) translateZ(40px);
}

.cube__face__small--left {
  transform: rotateY(-90deg) translateZ(40px);
}

.cube__face__small--right {
  transform: rotateY(90deg) translateZ(40px);
}

.cube__face__small--top {
  transform: rotateX(90deg) translateZ(40px);
}

.cube__face__small--bottom {
  transform: rotateX(-90deg) translateZ(40px);
}

@keyframes rotateCube {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }

  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>