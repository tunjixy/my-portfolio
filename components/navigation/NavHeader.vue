<template>
  <nav
    ref="nav"
    :class="shadow"
    class="w-full fixed top-0 transition ease-in duration-500 h-16 bg-dark z-20"
  >
    <div class="px-6 sm:px-16 md:px-12 h-16 flex items-center justify-between">
      <div class="flex items-center">
        <nuxt-link to="/">
          <img
            class="h-10 w-8 animate__animated animate__slideInDown animate__faster"
            src="@/assets/images/logo.png"
            alt="Olatunji Ekisanya"
          />
        </nuxt-link>
      </div>
      <div>
        <ul class="hidden md:flex items-center">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="mr-6 animate__animated animate__slideInDown animate__faster"
          >
            <a
              v-scroll-to="`#${link.tag}`"
              href="#"
              class="text-light-grey hover:text-primary text-sm block"
            >
              {{ link.name }}
            </a>
          </li>
          <li class="animate__animated animate__slideInDown animate__faster">
            <a
              class="btn btn-outline rounded shadow-btn"
              href="/OLATUNJI EKISANYA EMMANUEl.docx"
            >
              Resume
            </a>
          </li>
        </ul>
        <a
          title="Resume"
          class="md:hidden flex flex-col items-center justify-center text-sm hover:bg-primary hover:bg-opacity-25 animate__animated animate__slideInDown animate__faster"
          href="/OLATUNJI EKISANYA EMMANUEl.docx"
        >
          <i class="fas fa-file-word text-light-grey text-2xl" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      shadow: '',
      links: [
        {
          name: 'About',
          tag: 'about',
        },
        {
          name: 'Experience',
          tag: 'experience',
        },
        {
          name: 'Projects',
          tag: 'projects',
        },
        {
          name: 'Contact',
          tag: 'contact',
        },
      ],
    }
  },
  mounted() {
    let prevScrollposition = window.pageYOffset

    window.onscroll = () => {
      const currentScrollPosition = window.pageYOffset
      if (prevScrollposition > currentScrollPosition) {
        this.$refs.nav.style.top = '0'
      } else {
        this.$refs.nav.style.top = '-100px'
      }
      prevScrollposition = currentScrollPosition

      if (window.pageYOffset === 0) {
        this.shadow = ''
      } else {
        this.shadow = 'shadow-lg'
      }
    }
  },
}
</script>
