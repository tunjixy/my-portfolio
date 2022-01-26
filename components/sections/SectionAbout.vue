<template>
  <section id="about" data-aos="fade-up" class="pt-40">
    <div class="container">
      <h3 class="text-light-grey font-bold text-3xl relative line">
        About Me
      </h3>
      <div class="flex flex-wrap md:-mx-2">
        <div class="md:w-1/2 md:px-2">
          <div>
            <p class="mt-10 sm:text-lg">
              Hello! I'm Olatunji, a frontend developer based in Lagos, Nigeria.
            </p>
            <p class="mt-4 sm:text-lg">
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>
            <p class="mt-4 sm:text-lg">
              Here are technologies I've been working with:
            </p>
          </div>
          <ul class="flex flex-wrap -mx-2">
            <li
              v-for="(stack, index) in technologies"
              :key="index"
              class="mt-2 relative pl-4 list w-1/2 px-2"
            >
              {{ stack }}
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 md:px-2 mt-10">
          <img
            class="block mx-auto rounded-lg h-64 w-64 object-cover object-top shadow-img"
            src="@/assets/images/me.jpg"
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
        'JavaScript',
        'HTML & (S)CSS',
        'Tailwind CSS',
        'Vue Js',
        'Nuxt Js',
        'TypeScript',
      ],
    }
  },
}
</script>
