<template>
  <div class="hidden md:block z-50">
    <ul
      class="animate__animated animate__fadeIn animate__delay-2s animate__faster fixed z-50 bottom-0 left-8 flex flex-col"
    >
      <li
        v-for="(link, index) in links"
        :key="index"
        class="flex items-center justify-center mt-3"
      >
        <a :href="link.url" target="_blank">
          <i
            :class="link.icon"
            class="text-lg text-light-grey transition duration-300 ease-in transform hover:text-primary hover:-translate-y-1"
          />
        </a>
      </li>
      <div class="sidebefore mt-8" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SocialConnect',
  data() {
    return {
      links: [
        {
          icon: 'fab fa-facebook-f',
          url: '',
        },
        {
          icon: 'fab fa-twitter',
          url: '',
        },
        {
          icon: 'fab fa-instagram',
          url: '',
        },
        {
          icon: 'fab fa-linkedin-in',
          url: '',
        },
        {
          icon: 'fab fa-github',
          url: '',
        },
      ],
    }
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
</style>
