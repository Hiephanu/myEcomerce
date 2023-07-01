<template>
    <div>
        <silderHome/>
        <newProduct/>
        <newTopic/>
    </div>
</template>
<script>
import silderHome from './silder/silderHome.vue';
import newProduct from './productHome/newProduct.vue'
import newTopic from '../home/newTopic/newTopic.vue'
export default{
    components:{
        silderHome,
        newProduct,
        newTopic
    }
    
}
</script>