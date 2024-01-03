<template>
  <div class="z-50 hidden md:block">
    <ul
      class="fixed bottom-0 z-50 flex flex-col animate__animated animate__fadeIn animate__delay-2s animate__faster left-8"
    >
      <li
        v-for="(link, index) in links"
        :key="index"
        class="flex items-center justify-center mt-3"
      >
        <a :href="link.url" target="_blank">
          <i
            :class="link.icon"
            class="text-lg transition duration-300 ease-in transform text-light-grey hover:text-primary hover:-translate-y-1"
          />
        </a>
      </li>
      <div class="mt-8 sidebefore" />
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
          icon: 'fab fa-linkedin-in',
          url: 'https://www.linkedin.com/in/olatunji-ekisanya/',
        },
        {
          icon: 'fab fa-github',
          url: 'https://github.com/tunjixy',
        },
        /* {
          icon: 'fab fa-facebook-f',
          url: 'https://www.facebook.com/ekisanya.tunji',
        }, */
        {
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/tjxy',
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
