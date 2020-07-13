<template>
  <div>
    <nav
      class="md:hidden fixed bottom-0 w-full h-14 bg-dark shadow-top flex overflow-hidden"
    >
      <a
        v-for="(link, index) in links"
        :key="index"
        v-scroll-to="`#${link.tag}`"
        href="#"
        class="flex flex-col flex-grow items-center justify-center whitespace-no-wrap text-xs hover:bg-primary hover:bg-opacity-25"
        @click="active = link.tag"
      >
        <i
          :class="`mb-1 ${link.icon} ${
            link.tag === active ? 'text-primary' : ''
          }`"
        />
        <span :class="`${link.tag === active ? 'text-primary' : ''}`">
          {{ link.name }}
        </span>
      </a>
      <!-- <a
        class="flex flex-col flex-grow items-center justify-center whitespace-no-wrap text-xs hover:bg-primary hover:bg-opacity-25"
        href="/OLATUNJI EKISANYA EMMANUEl.docx"
      >
        <i class="fas fa-file-word text-light-grey mb-1" />
        Resume
      </a> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data() {
    return {
      active: 'home',
      links: [
        {
          name: 'Home',
          icon: 'fas fa-home',
          tag: 'home',
        },
        {
          name: 'About',
          icon: 'fas fa-user',
          tag: 'about',
        },
        {
          name: 'Experience',
          icon: 'fas fa-briefcase',
          tag: 'experience',
        },
        {
          name: 'Projects',
          icon: 'fas fa-tasks',
          tag: 'projects',
        },
        {
          name: 'Contact',
          icon: 'fas fa-envelope',
          tag: 'contact',
        },
      ],
    }
  },
}
</script>
