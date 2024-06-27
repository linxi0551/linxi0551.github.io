<!-- WelcomeMessage.vue -->
<template>
  <div class="tags-wrapper card-box">
    <h2>🎉 欢迎信息 🎉</h2>
    <p>
      欢迎来自 {{ province }} {{ city }} {{ district }} 的小伙伴！现在您正使用{{
        browser
      }}浏览器版本{{browser_ver}}！
    </p>
    <p>📅 {{yl}}</p>
    <p>🌡️ 天气小助手</p>
    <p>今日气温：☀️{{ temperature_low }}~🔥{{ temperature_high }}</p>
    <p>天空的表情：{{ bq }} {{ tq }}</p>
    <p>📍 IP地址<br>{{ ipAddress }}</p>
    <p>🐱‍🏍友情提示</p>
    <p>{{ poetry === '-' ? '享受美好的一天~😊' : poetry + ' 😘' }}</p>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "WelcomeMessage",
  data() {
    return {
      browser_ver:"",
      browser:"",
      temperature_high :"",
      temperature_low :"",
      province: "",
      city: "",
      district: "",
      ipAddress: "",
      poetry: "",
      tq:"",
      xq:"",
      bq:"",
      yl:""
    };
  },
  async mounted() {
    try {
      const ipAddressResponse = await axios.get(
        "https://api.ipify.org?format=json"
      );
      this.ipAddress = ipAddressResponse.data.ip;

      const response = await axios.get(
        "https://api.vvhan.com/api/visitor.info"
      );

      
      // 使用免费的GeoIP服务获取大致位置信息，注意这类服务可能不够精确且有使用限制
      const chineseLocationResponse = await axios.get(
        "https://api.oioweb.cn/api/weather/GetWeather"
      );

      if(response.data.success){
        console.log(response.data);
        this.browser = response.data.browser;//浏览器名称
        this.browser_ver = response.data.browser_ver;//浏览器版本
        this.poetry  = response.data.tip;
        this.temperature_high  = response.data.high;//最高温度
        this.temperature_low  = response.data.low.split("°C")[0];//最低温度
        this.xq  = response.data.week;
        this.tq  = response.data.tq;  // 天气
        this.yl = this.getDailyWisdom(); // 添加这行来设置每天的语录
        
      
      }
    

      if (chineseLocationResponse.data.msg === "success") {

        // 分割后的数组中，索引0通常是省，索引1通常是市
        this.province = chineseLocationResponse.data.result.city.Province; // "福建省"
        this.city = chineseLocationResponse.data.result.city.City; // "福州市"
        
        if(this.temperature_high === "-" || this.temperature_low === "-" || this.tq === "-"){
          this.temperature_high  = chineseLocationResponse.data.result.condition.max_degree+"°C";//最高温度
          this.temperature_low  = chineseLocationResponse.data.result.condition.min_degree;//最低温度
          this.tq  = chineseLocationResponse.data.result.condition.day_weather;  // 天气
        }
        if(this.tq==="晴"){
          this.bq = "😀"
        }else{
          this.bq = "😞"
        } 
       
      } else {
        console.error("未能成功获取中文位置信息");
      }
    } catch (error) {
      console.error("获取用户信息失败", error);
    }
  },
  methods: {
    getDailyWisdom() {
      const wisdoms = {
        '星期一': '一周之计在于周一，充满希望地开始吧！',
        '星期二': '周二了，保持动力，继续前行！',
        '星期三': '周三，加油，胜利的曙光就在前方！',
        '星期四': '周四，再坚持一下，周末就在不远处！',
        '星期五': '周五啦，准备好迎接愉快的周末吧！',
        '星期六': '周末第一天，尽情放松，享受生活！',
        '星期日': '周日，充电日，为新的一周蓄能！',
      };
      return wisdoms[this.xq] || '享受每一天的美好时光！';
    },
  },

};
</script>

<style lang='stylus'>
.tags-wrapper {
  text-align: center;
  padding: 0 0.95rem;

  .title {
    color: var(--textColor);
    opacity: 0.9;
    font-size: 1.2rem;

    &::before {
      margin-right: 0.3rem;
    }
  }

  .tags {
    text-align: justify;
    padding: 0.8rem 0.5rem 0.5rem 0.5rem;
    margin: 0 -0.5rem -0.5rem -0.5rem;

    a {
      opacity: 0.8;
      display: inline-block;
      padding: 0.2rem 0.4rem;
      transition: all 0.4s;
      background-color: var(--textColor);
      color: var(--mainBg);
      border-radius: 3px;
      margin: 0 0.3rem 0.5rem 0;
      min-width: 2rem;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.8rem;
      text-align: center;

      @media (max-width: $MQMobile) {
        font-weight: 400;
      }

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }

      &.active {
        box-shadow: 0 5px 10px -5px var(--randomColor, rgba(0, 0, 0, 0.15));
        transform: scale(1.22);
        opacity: 1;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>

