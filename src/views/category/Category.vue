<template>
    <div class="wrapper">
           <ul class="content">
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
       <li>666</li>
   </ul>
    </div>

</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Category",
        mounted(){
            this.scroll=new BScroll('.wrapper',{
                probeType:3,
                pullUpLoad:true,
                // observeDOM:true
            });
            this.scroll.on('scroll',(position)=>{
                console.log(position);
            });
            this.scroll.on('pullingUp',()=>{
                console.log('上拉加载更多');
            })
        }


    }
</script>

<style scoped>
    .wrapper{
        height: 300px;
        background-color: red;
        overflow: hidden;
        /*overflow-y: scroll;*/
    }
</style>