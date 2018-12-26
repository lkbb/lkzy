<template>
    <div class="wrap">
        <div class="top">
            <img class="pic" src="../assets/mic.png" alt="">
            <input class="inp" type="text" placeholder="猜你喜欢 浮生">
            <img class="pic" src="../assets/liebiaos.png" alt="">
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="个性推荐" name="first" class="first" style="text-align:center">
                <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img class="banner" src="../assets/banner.jpg" alt="">
                </el-carousel-item>
                </el-carousel>
                <div class="count">
                    <ul>
                        <li>
                            <img src="../assets/shouyinjishoutingguangboyinle.png" alt="">
                            <span>私人FM</span>
                        </li>
                        <li>
                            <img src="../assets/iconset0208-copy.png" alt="">
                            <span>每日推荐</span>
                        </li>
                        <li>
                            <img src="../assets/gedan.png" alt="">
                            <span>歌单</span>
                        </li>
                        <li>
                            <img src="../assets/paihangbang.png" alt="">
                            <span>排行榜</span>
                        </li>
                    </ul>
                </div>
                <div class="font">推荐歌单></div>
            </el-tab-pane>
            <el-tab-pane label="主播电台" name="second">主播电台</el-tab-pane>
        </el-tabs>
        <div class="foot">
            <ul>
                <li>
                    <img src="../assets/wangyiyunyinle.png" alt="">
                    <span>发现</span>
                </li>
                <li>
                    <img src="../assets/shipin.png" alt="">
                    <span>视频</span>
                </li>
                <li>
                    <img src="../assets/yinyue.png" alt="">
                    <span>我的</span>
                </li>
                <li>
                    <img src="../assets/pengyou.png" alt="">
                    <span>朋友</span>
                </li>
                <router-link :to="{path:'/login'}">
                <li>
                    <img src="../assets/pengyou_1.png" alt="">
                    <span>账号</span>
                </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
        data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    }
}
</script>
<style scoped>
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .top{
        width: 100%;
        height: 50px;
        padding-top: 20px;
        display: flex;
        justify-content: space-around;
        background: #000;
    }
    .inp{
        width: 250px;
        height: 30px;
        text-align: center;
        border-radius: 20px;
        outline: none;
        border: 0;
        background: #666;
        color: #eee;
    }
    .pic{
        width: 30px;
        height: 30px;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .banner{
      width: 100%;
  }
    .count{
        width: 100%;
        margin-top: 10px;
    }
    .count ul{
        list-style: none;
        display: flex;
    }
    .count ul li{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
    }
    .count ul li img{
        width: 25px;
        height: 25px;
        margin-bottom: 15px;
    }
    .foot {
        width: 100%;
        }
    .foot ul {
    list-style: none;
    display: flex;
    }
    .foot ul li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    }
    .foot ul li img {
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
    }
    .font{
        width: 100%;
        margin-top: 15px;
        display: flex;
        font-weight: bold;
        font-size: 18px;
    }
</style>

