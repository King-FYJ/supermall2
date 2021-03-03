<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick></tab-control>
        <good-list :goods="goods['sell'].list"></good-list>
        <ul>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
            <li>ddd</li>
        </ul>
    </div>
</template>

<script>
    import NavBar from '../../components/common/nvabar/NvaBar'
    import TabControl from '../../components/content/tabControl/TabControl'
    import GoodList from '../../components/content/goods/GoodsList'

    import FeatureView from './childComps/FeatureView'
    import RecommendView from './childComps/RecommendView'
    import HomeSwiper from './childComps/HomeSwiper'

    import {getHomeMultidata, getHomeGoods} from "../../network/home";


    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodList
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                }
            }
        },
        created() {
            //1 请求多个数据
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        methods: {
            //事件监听
            tabClick(index){
                console.log(index);
            },


            //网络请求
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                })
            },
            getHomeGoods(type) {
                const page=this.goods[type].page+1
                getHomeGoods(type, page).then(res => {
                    console.log(res);
                    this.goods[type].list.push(...res.data.data.list)
                    this.goods[type].page+=1
                })

                }

        }
    }
</script>
<style scoped>
    #home {
        margin-top: 44px;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    .tab-control {
        position: sticky;
        top: 44px;
    }

</style>

