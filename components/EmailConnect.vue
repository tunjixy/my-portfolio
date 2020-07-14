<template>
  <div class="hidden md:block z-50">
    <div
      class="animate__animated animate__fadeIn animate__delay-2s animate__faster fixed z-50 bottom-0 right-8 flex flex-col"
    >
      <a
        class="text-light-grey vertical-text hover:text-primary transition-colors duration-300 ease-in"
        href="mailto:kendricktunji@gmail.com"
      >
        kendricktunji@gmail.com
      </a>

      <div class="sidebefore mt-8" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailConnect',
  data() {
    return {}
  },
}
</script>

<style scoped>
.sidebefore::before {
  content: '';
  display: block;
  width: 1px;
  height: 90px;
  z-index: 1;
  margin: 0 auto;
  @apply bg-light-grey;
}

.vertical-text {
  width: 100%;
  position: absolute;
  right: 0.7rem;
  transform: rotate(270deg);
  transform-origin: 0 0;
}
</style>
