<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl1"
                     class="tab-control"
                     v-show="isTabFixed"></tab-control>
        <scroll class="content" ref="scroll"
                :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
            <recommend-view :recommends="recommends"/>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']"
                         @tabClick="tabClick"
                         ref="tabControl2"></tab-control>
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
                isShowBackTop: false,
                tabOffsetTop: 0,
                isTabFixed: false,
                saveY: 0
            }
        },
        created() {
            //1 请求多个数据
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        destroyed() {
            console.log('666');
        },
        mounted() {
            // 获取tabcontrol的offsettop  所有的组件都有一个属性$el，用于获取组件中的元素
            // console.log(this.$refs.tabControl.$el.offsetTop);
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            },

        },
        activated() {
            this.$refs.scroll.scrollTo(0, this.saveY, 0)
            this.$refs.scroll.refresh()
        },
        deactivated() {
            this.saveY = this.$refs.scroll.getScrollY()
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
                this.$refs.tabControl1.currentIndex = index;
                this.$refs.tabControl2.currentIndex = index;
            },
            backClick() {
                // console.log(this.$refs);
                this.$refs.scroll.scrollTo(0, 0);

            },
            contentScroll(position) {
                //判断backtop是否显示
                this.isShowBackTop = -position.y > 1000
                //决定tabControl 是否吸顶（position:fixed）
                this.isTabFixed = (-position.y) > this.tabOffsetTop
            },
            loadMore() {
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad() {
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
        /*margin-top: 44px;*/
        height: 100vh;
        position: relative;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        /*position: fixed;*/
        /*left: 0;*/
        /*right: 0;*/
        /*top: 0;*/
        /*z-index: 9;*/
    }

    .tab-control {
        position: relative;
        z-index: 9;
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

