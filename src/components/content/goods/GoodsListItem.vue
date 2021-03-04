<template>
    <div class="goods-list-item">
        <img :src="goodsItem.show.img" class="goods-list-img" @click="itemClick">
        <div class="goods-list-text">
            <div class="goods-list-name one-txt-cut">{{goodsItem.title}}</div>
            <div class="goods-list-price">
                <div class="text-pink">{{goodsItem.price}}</div>
                <div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsItem: {
                // type:object,
                default() {
                    return {}
                }
            }
        },
        methods:{
            itemClick(){
                this.$router.push('/detail/'+this.goodsItem.iid)
            }
        }
    }
</script>

<style scoped>

    .goods-list-item {
        width: 45%;
        height: auto;
        padding-top: 6px;
        font-size: 14px;
    }

    .goods-list-img {
        width: 100%;
        height: auto;
        border-radius: 4px;
    }
.goods-list-name{
    /*background-color: #000000;*/
}
    .goods-list-price {
        display: flex;
        justify-content: space-between;
        margin: 6px 0;
    }

    .collect-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(../../../assets/images/home/collect_icon.png) no-repeat;
        background-size: cover;
        vertical-align: bottom;
    }


</style>