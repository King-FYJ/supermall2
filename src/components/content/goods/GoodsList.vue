<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
    </div>

</template>

<script>
    import GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
        components:{
            GoodsListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
 .goods{
     /*background-color: #f1f0f0;*/
     display: flex;
     flex-wrap: wrap;
     align-content: space-between;
     justify-content: space-evenly;
 }

</style>