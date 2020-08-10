<template>
  <main>
    <nav-header />
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
          aria-label="Get In Touch"
          class="inline-block mt-12 btn btn-outline py-4 px-8 rounded"
          href="/OLATUNJI EKISANYA EMMANUEl.docx"
        >
          Get In Touch
        </a>
      </div>
    </section>
    <section id="about" data-aos="fade-up" class="pt-40">
      <div class="container">
        <h3 class="text-light-grey font-bold text-3xl relative line">
          About Me
        </h3>
        <div class="flex flex-wrap md:-mx-2">
          <div class="md:w-1/2 md:px-2">
            <div>
              <p class="mt-10 sm:text-lg">
                Hello! I'm Olatunji, a frontend developer based in Lagos,
                Nigeria.
              </p>
              <p class="mt-4 sm:text-lg">
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect, performant
                experiences.
              </p>
              <!-- <p class="mt-4 sm:text-lg">
                Shortly after graduating from Northeastern University, I joined
                the engineering team at Upstatement where I work on a wide
                variety of interesting and meaningful projects on a daily basis.
              </p> -->
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
    <!-- <section id="experience" data-aos="fade-up" class="pt-48">
      <div class="container max-w-3xl mx-auto">
        <h3 class="text-light-grey font-bold text-3xl relative line">
          Where I've Worked
        </h3>
        <tabs class="mt-8">
          <tab title="Fullware">
            <h4 class="font-bold text-light-grey text-2xl">
              Frontend Developer <span class="text-primary">@ Fullware</span>
            </h4>
            <h5 class="mt-2">Jan - April 2018</h5>
            <div class="mt-4">
              <ul>
                <li
                  v-for="(work, index) in work1"
                  :key="index"
                  class="relative list mt-2 pl-8"
                >
                  {{ work }}
                </li>
              </ul>
            </div>
          </tab>
          <tab title="Multitexter"></tab>
          <tab title="80kobosms">Hello From Tab 3</tab>
          <tab title="Fast Recharge">Hello From Tab 4</tab>
        </tabs>
      </div>
    </section> -->
    <section id="projects" data-aos="fade-up" class="pt-48">
      <div class="container">
        <h3 class="text-light-grey font-bold text-3xl relative line">
          Some Things I've Built
        </h3>
        <project-card-block />
      </div>
    </section>
    <section id="contact" data-aos="fade-up" class="pt-48 pb-20">
      <div class="container max-w-xl mx-auto">
        <p class="text-primary text-center">What's Next?</p>
        <h3
          class="text-light-grey font-bold text-3xl md:text-5xl mt-2 text-center"
        >
          Get In Touch
        </h3>
        <p class="text-center leading-relaxed text-base mt-5">
          I am based in Lagos but happy to either work remote or travel to your
          location. Feel free to contact me for any project request, hackathon,
          or a chess game. My inbox is always open, I’d try my best to answer
          your mail!
        </p>
        <div class="mt-16 flex items-center justify-center">
          <a
            aria-label="Say Hello"
            class="btn btn-outline rounded py-4 px-8"
            href="mailto:kendricktunji@gmail.com"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
    <social-connect />
    <email-connect />
    <bottom-navigation />
  </main>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        'JavaScript (ES6+)',
        'HTML & (S)CSS',
        'Vue',
        'Nuxt',
        'Node.js',
        'Wordpress',
      ],
      work1: [
        'Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern',
        'Helped solidify a brand direction for blistabloc that spans both packaging and web',
        'Interfaced with clients on a weekly basis, providing technological expertise',
      ],
    }
  },
}
</script>

<style></style>
