<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <scroll class="content" ref="scroll"
                :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullingUp="loadMore">
            <home-swiper :banners="banners"/>
            <recommend-view :recommends="recommends"/>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
            <good-list :goods="showGoods"></good-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>


    </div>
</template>

<script>
    import NavBar from '../../components/common/nvabar/NvaBar'
    import TabControl from '../../components/content/tabControl/TabControl'
    import GoodList from '../../components/content/goods/GoodsList'

    import FeatureView from './childComps/FeatureView'
    import RecommendView from './childComps/RecommendView'
    import HomeSwiper from './childComps/HomeSwiper'
    import Scroll from '../../components/common/scroll/Scroll'
    import BackTop from '../../components/content/backTop/BackTop'

    import {getHomeMultidata, getHomeGoods} from "../../network/home";


    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodList,
            Scroll,
            BackTop
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop',
                isShowBackTop: false
            }
        },
        created() {
            //1 请求多个数据
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        methods: {
            //事件监听
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                }
            },
            backClick() {
                // console.log(this.$refs);
                this.$refs.scroll.scrollTo(0, 0);

            },
            contentScroll(position) {
                this.isShowBackTop = -position.y > 1000
            },
            loadMore(){
                this.getHomeGoods(this.currentType)
            },


            //网络请求
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                })
            },
            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.data.list)
                    this.goods[type].page += 1

                    this.$refs.scroll.finishPullUp()
                })

            }

        }
    }
</script>
<style scoped>
    #home {
        margin-top: 44px;
        height: 100vh;
        position: relative;
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

    .content {
        position: absolute;
        /*overflow: hidden;*/
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }

</style>

