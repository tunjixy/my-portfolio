<template>
  <section id="home" class="container min-h-screen pt-24 sm:pt-32">
    <h1
      class="animate__animated animate__fadeInUp animate__delay-1s animate__faster text-primary font-bold text-base"
    >
      Hi, my name is
    </h1>
    <h2
      class="animate__animated animate__fadeInUp animate__delay-1s animate__faster font-bold text-light-grey leading-tight text-4xl sm:text-5xl md:text-6xl mt-3"
    >
      Olatunji Ekisanya.
    </h2>
    <h3
      class="animate__animated animate__fadeInUp animate__delay-1s animate__faster font-bold leading-tight text-3xl sm:text-5xl md:text-6xl"
    >
      I build things for the web.
    </h3>
    <div
      class="animate__animated animate__fadeInUp animate__delay-1s animate__faster mt-12"
    >
      <p class="text-base max-w-lg leading-relaxed">
        I'm a Frontend Developer based in Lagos, Nigeria specializing in
        building and coding beautifully simple things, and I love what I do.
      </p>
    </div>
    <div
      class="animate__animated animate__fadeInUp animate__delay-1s animate__faster"
    >
      <a
        v-scroll-to="'#contact'"
        aria-label="Get In Touch"
        class="inline-block mt-12 btn btn-outline py-4 px-8 rounded"
        href="#"
      >
        Get In Touch
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>
