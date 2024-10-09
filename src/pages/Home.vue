<script setup lang="ts">
import { useRouter } from 'vue-router';
import { reactive } from "vue";

const router = useRouter();

const data = reactive([
  {
    id: 1,
    width: "48%",
    title: "《素履之往》",
    content: "所谓无底深渊，下去，也是前程万里。",
  },
  {
    id: 2,
    width: "48%",
    title: "《1Q84》",
    content: "超过一定的年龄之后，所谓人生，无非是一个不断丧失的过程而已。",
  },
  {
    id: 3,
    width: "100%",
    title: "《深海》",
    content: "希望你今后的每一次笑，都是真心的。",
  },
  {
    id: 4,
    width: "48%",
    title: "erevus",
    content: "小时候，我妈说我的手指长，将来能当钢琴家，然后我成了码农",
  },
  {
    id: 5,
    width: "48%",
    title: "《青春杂货铺》",
    content: "恋爱本质不是走向婚姻，而是探究最真实的自己。",
  },
  {
    id: 6,
    width: "30%",
    title: "王佩",
    content: "原以为一切早已结束，没想到一切才是刚刚开始。",
  },
  {
    id: 7,
    width: "30%",
    title: "《撒野》",
    content: "想跟我谈恋爱，还是想跟我谈个恋爱？",
  },
  {
    id: 8,
    width: "30%",
    title: "《人生的智慧》",
    content: "哪怕一百个愚笨的人在一起聚会，也无法产生一个智慧的人。",
  },
  {
    id: 9,
    width: "48%",
    title: "《早晨从中午开始》",
    content: "最渺小的人常关注着成绩和荣耀；最伟大的人常沉浸于创造和劳动。",
  },
  {
    id: 10,
    width: "48%",
    title: "cs2蝴蝶刀",
    content: "白天蝴蝶rush B, 晚上rush蝴蝶B",
  },
]);

const handleDetail = (current: any) => {
  router.push({
    name: 'RotateNews',
    query: {
      current: JSON.stringify(current),
      data: JSON.stringify(data)
    }
  });
}
</script>

<template>
  <div class="main">
    <div class="content">
      <div
        class="content-item"
        :style="{ width: item?.width }"
        v-for="item in data"
        :key="item?.id"
        @click="handleDetail(item)"
      >
        <div class="item-title">{{ item.title }}</div>
        <div class="item-content">{{ item.content }}</div>
      </div>
    </div>
    <div class="personal"></div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.content {
  width: 65vw;
  height: 98vh;
  overflow: auto;
  scrollbar-width: none; /* 适用于 Firefox */
  -ms-overflow-style: none; /* 适用于 IE 和 Edge */
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 30px;
}

.content-item {
  box-sizing: border-box;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin-bottom: 30px;
  color: #ccc;
  cursor: pointer;
}

.item-title {
  margin-bottom: 20px;
}

.item-content {
  height: 80px;
}

.personal {
  width: 22vw;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
</style>
