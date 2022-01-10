import router from '@system.router'

export default{
    data: {
        time_all: 0,     // 计时时间
        hour: 0,
        minutes: 0,
        seconds: 0,
        progress_percent: 0       // 进度条进度
    },
    onInit: function() {
        this.time_all = router.getParams().router_time * 60;
        // 确保开头的时间参数渲染成功，因为setInterVal是先延时再执行
        this.hour = Math.floor(this.time_all / 3600); // 小时
        this.minutes = Math.floor((this.time_all - 3600 * this.hour) / 60); // 分钟
        this.seconds = Math.floor(this.time_all - 3600 * this.hour - 60 * this.minutes); // 秒
        setInterval("",1000);
        this.time_all--;
        setInterval(() => {
            this.hour = Math.floor(this.time_all / 3600); // 小时
            this.minutes = Math.floor((this.time_all - 3600 * this.hour) / 60); // 分钟
            this.seconds = Math.floor(this.time_all - 3600 * this.hour - 60 * this.minutes); // 秒
            this.time_all--;
        }, 1000);
    }
}