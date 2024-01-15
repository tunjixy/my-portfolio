<template>
  <section id="about" data-aos="fade-up" class="pt-40">
    <div class="container">
      <h3 class="relative text-3xl font-bold text-light-grey line">
        About Me
      </h3>
      <div class="flex flex-wrap md:-mx-2">
        <div class="md:w-1/2 md:px-2">
          <div>
            <p class="mt-10 sm:text-lg">
              Hello! I'm Olatunji, a frontend engineer based in Lagos, Nigeria.
            </p>
            <p class="mt-4 leading-relaxed sm:text-lg">
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences. I have 4+ years of professional experience. I am
              enthusiastic about expanding my knowledge by delving into new
              technologies and applying innovative solutions to solve complex
              problems.
            </p>
            <p class="mt-4 sm:text-lg">
              Here are technologies I've been working with:
            </p>
          </div>
          <ul class="flex flex-wrap -mx-2">
            <li
              v-for="(stack, index) in technologies"
              :key="index"
              class="relative w-1/2 px-2 pl-4 mt-2 list"
            >
              {{ stack }}
            </li>
          </ul>
        </div>
        <div class="w-full mt-10 md:w-1/2 md:px-2">
          <img
            class="block object-cover object-top w-64 h-64 mx-auto rounded-lg shadow-img"
            src="@/assets/images/me.jpeg"
            alt="Olatunji Ekisanya"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAbout',
  data() {
    return {
      technologies: [
        'HTML',
        'CSS/SCSS',
        'TailwindCSS',
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'Nuxt.js',
      ],
    }
  },
}
</script>
