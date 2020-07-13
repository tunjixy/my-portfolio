<template>
  <div class="flex flex-wrap md:-mx-2">
    <div class="w-full md:w-3/12 md:px-2">
      <ul class="flex overflow-x-auto md:flex-col">
        <li v-for="(tab, index) in tabs" :key="index" class="border-secondary">
          <a
            href="#"
            class="border-b md:border-b-0 md:border-l block py-3 hover:bg-secondary hover:text-primary hover:border-primary px-4 md:pl-4 whitespace-no-wrap md:whitespace-normal"
            :class="{
              'text-primary border-primary': index === selectedIndex,
            }"
            role="tab"
            @click.prevent="selectTab(index)"
          >
            {{ tab.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="w-full md:w-9/12 md:px-2 mt-4 md:mt-0" role="tabpanel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })
    },
  },
}
</script>
