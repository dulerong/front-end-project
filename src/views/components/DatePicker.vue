<template lang="pug">
v-menu(
  v-model="menu"
  :close-on-content-click="false"
  :nudge-right="40"
  transition="scale-transition"
  offset-y
  min-width="auto"
)
  template(v-slot:activator="{ on, attrs }")
    v-text-field(
      style="max-width: 200px"
      v-model="date"
      :label="label"
      prepend-inner-icon="mdi-calendar"
      readonly
      v-bind="attrs"
      v-on="on"
    )
  v-date-picker(
    v-model="date"
    @input="onInput"
  )
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data: vm => ({
    menu: false,
    date: vm.$_dayjs().format('YYYY-MM-DD')
  }),
  methods: {
    onInput() {
      this.menu = false
      this.$emit('date-change', this.date)
    },
    initializeDate(date) {
      this.date = date
    }
  }
}
</script>
