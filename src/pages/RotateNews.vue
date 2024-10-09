<script setup lang='ts'>
import { onBeforeUnmount, onMounted, ref, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const rotateCube = ref(0)
const rotate = ref(-45)

const listData: any[] = reactive([])

const listStyle = [
  {
    class: 'content-item-one',
    rotateY: "0",
    translate: 48,
    show: true
  },
  {
    class: 'content-item-two',
    rotateX: "-90",
    translate: 48,
    show: false
  },
  {
    class: 'content-item-three',
    rotateY: "180",
    rotateZ: "180",
    translate: 48,
    show: false
  },
  {
    class: 'content-item-four',
    rotateX: "90",
    translate: 48,
    show: false
  },
]

const styleList = [
  {
    rotate: "45",
    top: '250',
    left: '180',
    class: 'round__one',
  },
  {
    rotate: "135",
    top: '250',
    left: '60',
    class: 'round__two',
  },
  {
    rotate: "-45",
    top: '140',
    left: '180',
    class: 'round__three',
  },
  {
    rotate: "-135",
    top: '140',
    left: '60',
    class: 'round__four',
  },
]
const dataList: any[] = reactive([])

const handleWheel = (e: any) => {
  if (e.deltaY > 0) {
    rotate.value -= 90
    rotateCube.value += 90
  } else {
    rotate.value += 90
    rotateCube.value -= 90
  }
}

const getList = (data: any, startId: number, count: number) => {
  // 1. 找到目标元素的起始索引
  const startIndex = data.findIndex((item: { id: number }) => item?.id === startId);

  // 如果目标 ID 不存在，直接返回空数组
  if (startIndex === -1) return [];

  // 2. 从 startIndex 开始取 count 个元素（可能会超出数组末尾）
  const part1 = data.slice(startIndex, startIndex + count);

  // 3. 检查是否取够 count 个元素，如果不足，从头部再取剩余的元素
  if (part1.length < count) {
    const remainingCount = count - part1.length;
    const part2 = data.slice(0, remainingCount);  // 从头开始取剩余的元素
    return part1.concat(part2);
  }

  return part1;  // 取够了，直接返回
}

onMounted(() => {
  // 监听整个页面的滚轮事件
  window.addEventListener('wheel', handleWheel);
  const { data, current }: any = route?.query

  if (data && current) {
    const list = getList(JSON.parse(data), JSON.parse(current).id, 4)

    list.forEach((item: any, index: number) => {
      if (dataList.length >= 4) {
        return
      }
      dataList.push({
        ...item,
        ...styleList[index]
      })
    })

    const removedElement = list.splice(2, 1);
    const format = [...list, removedElement[0]]
    format.forEach((item: any, index: number) => {
      listData.push({
        ...item,
        ...listStyle[index]
      })
    })
  }
});

onBeforeUnmount(() => {
  // 组件卸载时移除事件监听器
  window.removeEventListener('wheel', handleWheel);
});
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="cube" :style="{ transform: `rotateX(${rotateCube}deg)` }">
        <div v-for="item in listData" :key="item.id" :class="item.class" :style="{
          transform:
            `rotateX(${item.rotateX ? item.rotateX : 0}deg) 
              rotateY(${item.rotateY ? item.rotateY : 0}deg) 
              rotateZ(${item.rotateZ ? item.rotateZ : 0}deg) 
              translateZ(${item.translate}vh)`
        }">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div class="detail" :style="{ transform: `rotate(${rotate}deg)` }">
      <div v-for="item in dataList" :key="item.id" :class="item.class">
        <div :style="{
          transform: `rotate(${item.rotate}deg)`,
          top: `${item.top}px`,
          left: `${item.left}px`
        }">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.content {
  width: 40vw;
  height: 95vh;
  position: absolute;
  left: 5%;
  overflow: hidden;
  perspective: 3000px;
}

.cube {
  width: 40vw;
  height: 90vh;
  position: relative;
  transform-style: preserve-3d;
  transition: all .8s;
}

/* 立方体的每个面 */
.content-item-one,
.content-item-two,
.content-item-three,
.content-item-four {
  padding: 0 100px;
  box-sizing: border-box;
  position: absolute;
  width: 40vw;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .6);
  backface-visibility: hidden;
  /* 隐藏背面 */
  /* 初始状态下隐藏所有面 */
}

.detail {
  width: 1500px;
  height: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  left: 60%;
  transition: all .5s;
}

.detail>div>div {
  width: 500px;
  height: 350px;
  position: relative;
}

.round__one {
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, .6);
  box-sizing: border-box;
  border: 10px solid rgba(0, 0, 0, .6);
  border-top: none;
  border-left: none;
}

.round__two {
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, .6);
  box-sizing: border-box;
  border: 10px solid rgba(0, 0, 0, .6);
  border-top: none;
  border-right: none;
}

.round__three {
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, .6);
  box-sizing: border-box;
  border: 10px solid rgba(0, 0, 0, .6);
  border-bottom: none;
  border-left: none;
}

.round__four {
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, .6);
  box-sizing: border-box;
  border: 10px solid rgba(0, 0, 0, .6);
  border-bottom: none;
  border-right: none;
}

.item-title {
  color: #ff6666;
  font-size: 20px;
  margin-bottom: 10px;
}

.item-content {
  color: #fff0f0;
  font-size: 20px;
}
</style>