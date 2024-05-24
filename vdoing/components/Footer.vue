<template>
  <div class="footer">
    <div class="icons" v-if="social && social.icons">
      <a
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        v-for="(item, index) in social.icons"
        :key="index"
        target="_blank"
      ></a>
    </div>
    <div style="font-size:13px;font-weight:bold" v-html="displayInfo"></div>
    
    <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
    Theme by
    <a style="font-size:15px;font-weight:bold"
      href="https://github.com/linxi0551/blogs.github.io"
      target="_blank"
      title="本站主题"
      >Vdoing</a
    >
    <template v-if="footer">
      | Copyright © {{ footer.createYear }}-{{ new Date().getFullYear() }}
      <span v-html="footer.copyrightInfo"></span>
    </template>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
        displayInfo: '',
        now: new Date(),
        start:new Date("08/01/2022 00:00:00"),
        dnum: 0,
        hnum: 0,
        mnum: 0,
        snum: 0,
        dis: 0,
        unit: 0
    };
  },
  computed: {
    social() {
      return this.$themeConfig.social;
    },
    footer() {
      return this.$themeConfig.footer;
    },
  },
  mounted() {
    this.updateTime();
    setInterval(() => {
      this.now = new Date();
      this.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      this.dis = Math.trunc(23400000000 + ((this.now - this.start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
      this.unit = (this.dis / 149600000).toFixed(6);  // 天文单位
      const grt = new Date("04/26/2024 00:00:00");
      this.dnum = Math.floor((this.now - grt) / 1e3 / 60 / 60 / 24);
      this.hnum = Math.floor((this.now - grt) / 1e3 / 60 / 60 - 24 * this.dnum);
      this.mnum = Math.floor(
        (this.now - grt) / 1e3 / 60 - 1440 * this.dnum - 60 * this.hnum
      );
      this.snum = Math.round(
        (this.now - grt) / 1e3 -
          86400 * this.dnum -
          3600 * this.hnum -
          60 * this.mnum
      );
      this.displayInfo = `
        本站居然运行了 ${this.dnum} 天 ${this.hnum} 小时 ${this.mnum} 分 ${this.snum} 秒 <i id="heartbeat" class='fas fa-heartbeat' style="color: red;"></i><br />
        旅行者 1 号当前距离地球 ${this.dis} 千米，约为 ${this.unit} 个天文单位 🚀
      `;
    },
  },
};
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer {
  padding: 5rem 1.5rem 2.5rem;
  text-align: center;
  color: #666;
  box-sizing: border-box;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  > span {
    line-height: 1.5rem;
  }

  .icons {
    margin-bottom: 12px;

    .iconfont {
      padding: 0 10px;
      font-size: 1.3rem;
    }
  }

  a {
    color: inherit;

    &:hover {
      color: $accentColor;
    }
  }
}

@media (min-width: ($MQMobile + 1px)) {
  .sidebar-open .footer {
    width: auto;
    padding-left: ($sidebarWidth + 1.5rem);
  }
}

@media (min-width: 1520px) {
  .have-rightmenu .footer {
    padding-right: ($rightMenuWidth + 1.5rem);
  }
}

.no-sidebar .footer {
  width: auto;
  padding-left: 1.5rem;
}

//页脚心跳图标跳动样式
#heartbeat {
  animation: heartbeat-animation 1s infinite alternate;
}

@keyframes heartbeat-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
