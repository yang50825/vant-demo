<template>
  <div>
    <!-- <van-button type="primary" @click="btn">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button> -->
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="250px" :interval="1000" indicator-position="outside">
        <el-carousel-item v-for="(val, index) in list" :key="index">
          <img :src="val" style="width: 100%; height: 100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
// import { Dialog } from 'vant'

export default {
  name: 'App',
  data() {
    return {
      list: [
        'https://img1.baidu.com/it/u=133990705,310893509&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1667667600&t=a29e7543c3f08fa9b38d6931b7529f95',
        'https://img1.baidu.com/it/u=3009731526,373851691&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667667600&t=bfd1723cd32d57c0ed2cd8f81b61f611',
        'https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667667600&t=fe770fc4add8ab676decf212d3756ede',
        'https://img1.baidu.com/it/u=3622442929,3246643478&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667667600&t=0d55483a1ce8281bcc4c5a2b05ba66eb',
        'https://t9.baidu.com/it/u=902946645,2320843792&fm=218&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=5EA49544FE03134D3E8DED820300708B&sec=1667667600&t=245ba5000b811aa3bd3cf3343409712a',
      ],
    }
  },
  methods: {
    // btn() {
    //   alert(1)
    //   Dialog({ message: '提示', showCancelButton: true })
    // },
  },
}
</script>

<style>
.block {
  width: 500px;
}

.block .el-carousel__button {
  border-radius: 50%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel-item {
  border-radius: 50%;
}
</style>
