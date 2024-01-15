<template>
  <section id="home" class="container min-h-screen pt-24 sm:pt-32">
    <h1
      class="text-base font-bold animate__animated animate__fadeInUp animate__delay-1s animate__faster text-primary"
    >
      Hi, my name is
    </h1>
    <h2
      class="mt-3 text-4xl font-bold leading-tight animate__animated animate__fadeInUp animate__delay-1s animate__faster text-light-grey sm:text-5xl md:text-6xl"
    >
      Olatunji Ekisanya.
    </h2>
    <h3
      class="text-3xl font-bold leading-tight animate__animated animate__fadeInUp animate__delay-1s animate__faster sm:text-5xl md:text-6xl"
    >
      I build things for the web.
    </h3>
    <div
      class="mt-12 animate__animated animate__fadeInUp animate__delay-1s animate__faster"
    >
      <p class="max-w-2xl text-base leading-loose">
        I'm a Frontend Engineer based in Lagos, Nigeria specializing in building
        and coding beautifully simple things, and I love what I do.
      </p>
    </div>
    <div
      class="animate__animated animate__fadeInUp animate__delay-1s animate__faster"
    >
      <a
        v-scroll-to="'#contact'"
        aria-label="Get In Touch"
        class="inline-block px-8 py-4 mt-12 rounded btn btn-outline"
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
