<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive include="Dk_index">
        <router-view  :key="key" ></router-view>
      </keep-alive>
      <!-- <router-view v-if="$route.meta.noCache" :key="key" ></router-view> -->
    </transition>
   
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      console.log("Aaaaaaaaa",this.$store.state.tagsView.cachedViews)
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 17px;
  }
}
</style>
