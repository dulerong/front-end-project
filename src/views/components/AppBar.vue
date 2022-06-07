<template lang="pug">
v-app-bar(
  app
  flat
  height="64"
  outlined
)
  v-app-bar-nav-icon(@click.stop="toggle")
  v-spacer
</template>

<script>
export default {
  props: {
    toggle: {
      type: Function,
      required: true
    }
  }
}
</script>
