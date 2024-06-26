<template>
  <div class="tags-wrapper card-box">
    <h1>{{ currentMonthYear }}</h1>
    <table>
      <thead>
        <tr>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, weekIndex) in calendarRows" :key="weekIndex">
          <td
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            :class="{ 'current-day': isCurrentDay(day) }"
          >
            {{ day.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
      calendar: [],
    };
  },
  computed: {
    currentMonthYear() {
      return `${this.currentDate.toLocaleDateString("default", {
        month: "long",
      })} ${this.currentDate.getFullYear()}`;
    },
    calendarRows() {
      let rows = [];
      let week = [];
      for (let i = 0; i < this.calendar.length; i++) {
        week.push(this.calendar[i]);
        if ((i + 1) % 7 === 0) {
          rows.push(week);
          week = [];
        }
      }
      return rows;
    },
  },
  methods: {
    generateCalendar() {
      let startDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        1
      );
      let daysInMonth = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      ).getDate();
      let firstDayOfMonth = startDate.getDay(); // 获取本月第一天是周几

      // 计算上个月的最后一天
      let lastDayOfPrevMonth = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        0
      ).getDate();

      // 填充上个月的最后几天到日历数组
      for (let i = 0; i < firstDayOfMonth; i++) {
        this.calendar.push({
          value: lastDayOfPrevMonth - (firstDayOfMonth - i - 1),
          month: this.currentDate.getMonth() - 1,
        });
      }

      // 填充当月日期
      for (let day = 1; day <= daysInMonth; day++) {
        this.calendar.push({ value: day, month: this.currentDate.getMonth() });
      }

      // 计算下个月的前几天
      let nextMonthDays = 6 * 7 - this.calendar.length; // 需要的总单元格数减去已填充的单元格数
      let nextMonth = this.currentDate.getMonth() + 1;
      let year = this.currentDate.getFullYear();
      if (nextMonth > 11) {
        // 处理跨年情况
        nextMonth = 0;
        year++;
      }

      // 填充下个月的前几天
      for (let day = 1; day <= nextMonthDays; day++) {
        this.calendar.push({ value: day, month: nextMonth });
      }
    },
    getFirstDayOfMonth() {
      return new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        1
      ).getDay();
    },
    // 修改isCurrentDay方法以考虑月份
    isCurrentDay(dayObj) {
      return (
        dayObj.month === this.currentDate.getMonth() &&
        dayObj.value === this.currentDate.getDate()
      );
    },
  },
  mounted() {
    this.generateCalendar();
  },
};
</script>

<style lang='stylus'>
h2 {
  border-bottom: none !important; /* 使用!important确保覆盖其他样式 */
}

.tags-wrapper {
  width: 100%;
  border-collapse: collapse;
}

.tags-wrapper th, .tags-wrapper td {
  border: none; /* 移除了边框 */
  padding: 5px;
  text-align: center;
}

.current-day {
  background-color: #f0e68c; /* 亮黄色，表示今天 */
}

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