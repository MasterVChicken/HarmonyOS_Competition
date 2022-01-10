import router from '@system.router'

export default {
    data: {
        time:"",        // 时间
        time_option: [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180]         // Swiper滚动的时间片
    },
    getTime: function(event){
        this.time = event.index;
        console.log("fuck"+event.index);
    },
    start_time: function(){
        router.replace({
            uri: 'pages/concentration/concentration',
            params: {router_time:parseInt(this.time)*10}
        });
    }
}
