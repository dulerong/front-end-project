<template lang="pug">
v-navigation-drawer(
  app
  height="100%"
  v-model="drawer.isVisible"
)
  v-list-item(style="height: 63px")
    v-list-item-icon(class="mr-2")
      v-icon mdi-desktop-classic
    v-list-item-content
      v-list-item-title(class="text-h6") Covid-19 Monitor
      v-list-item-subtitle Front-end web app
  v-divider
  v-list(style="padding: 0px")
    v-list-item(
      v-for="(tab, i) in $_navigation[0].children"
      :key="i"
      :to="{ name: tab.name }"
      exact
    )
      v-list-item-icon(class="mr-2")
        v-icon {{ tab.icon }}
      v-list-item-content
        v-list-item-title {{ tab.title }}
</template>

<script>
export default {
  props: {
    drawer: {
      type: Object,
      required: true,
      isVisible: { type: Boolean, required: true }
    }
  }
}
</script>
