<template>
    <div>
        <p>{{message}}</p>
       <sissi></sissi> <!-- 全局注册的组件 main.js-->
        <lxx></lxx>  <!-- 局部注册的组件 -->
        <zsy :here='message'></zsy>
        <lq></lq>

        <component :is="componentId"></component>
        <button @click="change">change</button>
    </div> 
    
</template>



<script>
import HelloWorld from '@/components/HelloWorld' //局部注册组件
var city = {
    template:`<h2>不知道什么东西</h2>`
}
var lqcomponent = {
     components:{
        'city' : city
    },
    template : `
    <div>
    <h2>父子组件示例</h2>
    <city></city>
    </div>
    ` 
      
};

var componentA = {
    template:`<div style='color:red'>componentA</div>`
};
var componentB = {
    template:`<div style='color:red'>componentB</div>`
};
var componentC = {
    template:`<div style='color:red'>componentC</div>`
};


export default {
    data() {
        return {
            message: 'lxx',
            componentId: 'componentA'
        }
    },
    components: {
        'lxx' : HelloWorld,
        'zsy' : {
            template : `<h2>{{here}} is me</h2>`,
            props:['here']
        },
        'lq' : lqcomponent,
        'componentA': componentA,
        'componentB': componentB,
        'componentC': componentC,
    },
    methods: {
        change(){
            this.componentId == 'componentA' ? this.componentId = 'componentB' : this.componentId == 'componentB' ? this.componentId = 'componentC' : this.componentId == 'componentC' ? this.componentId = 'componentA':''
        }
    },
}
</script>


<style scoped>

</style>
