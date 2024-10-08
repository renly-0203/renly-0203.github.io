<script setup lang='ts'>
import { onBeforeUnmount, onMounted, ref, reactive } from 'vue';
const rotate = ref(-45)

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

const data = [
  {
    id: 1,
    title: "《素履之往》",
    content: "所谓无底深渊，下去，也是前程万里。",
  },
  {
    id: 2,
    title: "《1Q84》",
    content: "超过一定的年龄之后，所谓人生，无非是一个不断丧失的过程而已。",
  },
  {
    id: 3,
    title: "《深海》",
    content: "希望你今后的每一次笑，都是真心的。",
  },
  {
    id: 4,
    title: "erevus",
    content: "小时候，我妈说我的手指长，将来能当钢琴家，然后我成了码农",
  },
  {
    id: 5,
    title: "《青春杂货铺》",
    content: "恋爱本质不是走向婚姻，而是探究最真实的自己。",
  },
  {
    id: 6,
    title: "王佩",
    content: "原以为一切早已结束，没想到一切才是刚刚开始。",
  },
  {
    id: 7,
    title: "《撒野》",
    content: "想跟我谈恋爱，还是想跟我谈个恋爱？",
  },
  {
    id: 8,
    title: "《人生的智慧》",
    content: "哪怕一百个愚笨的人在一起聚会，也无法产生一个智慧的人。",
  },
  {
    id: 9,
    title: "《早晨从中午开始》",
    content: "最渺小的人常关注着成绩和荣耀；最伟大的人常沉浸于创造和劳动。",
  },
  {
    id: 10,
    title: "cs2蝴蝶刀",
    content: "白天蝴蝶rush B, 晚上rush蝴蝶B",
  },
];

const handleWheel = (e: any) => {
  if (e.deltaY > 0) {
    rotate.value -= 90
  } else {
    rotate.value += 90
  }
}

onMounted(() => {
  // 监听整个页面的滚轮事件
  window.addEventListener('wheel', handleWheel);
  data.forEach((item, index) => {
    if (dataList.length >= 4) {
      return
    }
    dataList.push({
      ...item,
      ...styleList[index]
    })
  })
});

onBeforeUnmount(() => {
  // 组件卸载时移除事件监听器
  window.removeEventListener('wheel', handleWheel);
});
</script>

<template>
  <div class="main">
    <div class="content"></div>
    <div class="detail" :style="{transform: `rotate(${rotate}deg)`}">
      <div v-for="item in dataList" :key="item.id" :class="item.class">
        <div 
          :style="{
            transform: `rotate(${item.rotate}deg)`, 
            top: `${item.top}px`, 
            left: `${item.left}px`
          }"
        >
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
  height: 98vh;
  background-color: rgba(0, 0, 0, .6);
  position: absolute;
  left: 5%;
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