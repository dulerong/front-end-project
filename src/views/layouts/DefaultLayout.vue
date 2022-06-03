<template lang="pug">
v-app
	AppBar(v-bind='drawer')
	NavigationDrawer(:drawer='drawer')
	v-main
		slot
</template>

<script>
export default {
  components: {
    AppBar: require('~components/AppBar').default,
    NavigationDrawer: require('~components/NavigationDrawer').default
  },
  data: vm => ({
    drawer: {
      isVisible: true,
      toggle: vm.toggleDrawer
    }
  }),
  methods: {
    toggleDrawer() {
      this.drawer.isVisible = !this.drawer.isVisible
    }
  }
}
</script>
