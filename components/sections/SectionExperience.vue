<template>
  <section id="experience" data-aos="fade-up" class="pt-48">
    <div class="container max-w-3xl mx-auto">
      <h3 class="relative text-3xl font-bold text-light-grey line">
        Where I've Worked
      </h3>
      <tabs class="mt-8">
        <tab title="Cowrywise">
          <h4 class="text-2xl font-bold text-light-grey">
            Frontend Engineer <span class="text-primary">@ Cowrywise</span>
          </h4>
          <h5 class="mt-2">March 2022</h5>
          <div class="mt-4">
            <ul>
              <li
                v-for="(experience, index) in emergentLabsExperience"
                :key="index"
                class="relative pl-8 mt-2 list"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </tab>
        <tab title="Emergent Infastructure Labs">
          <h4 class="text-2xl font-bold text-light-grey">
            Frontend Developer <span class="text-primary">@ Emergent Labs</span>
          </h4>
          <h5 class="mt-2">September 2020 - Till Date</h5>
          <div class="mt-4">
            <ul>
              <li
                v-for="(experience, index) in emergentLabsExperience"
                :key="index"
                class="relative pl-8 mt-2 list"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </tab>
        <tab title="Fullware Group">
          <h4 class="text-2xl font-bold text-light-grey">
            Frontend Developer <span class="text-primary">@ Fullware</span>
          </h4>
          <h5 class="mt-2">2017 - August 2020</h5>
          <div class="mt-4">
            <ul>
              <li
                v-for="(experience, index) in fullwareExperience"
                :key="index"
                class="relative pl-8 mt-2 list"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </tab>
      </tabs>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionExperience',
  data() {
    return {
      cowrywiseExperience: [
        'Contributed to the core app, website and other internal web applications',
        'Built the Cowrywise engineering blog',
      ],
      emergentLabsExperience: [
        'Improved code quality by ensuring code standards are followed.',
        'Built modern accessible single page applications with JavaScript and Vue, Nuxt.',
        'Redesigned and kickstarted several client web apps.',
        'Implemented frontend business requirements for several client web apps using Vue, Nuxt Js',
      ],
      fullwareExperience: [
        'Redesigned and kickstarted several client web apps.',
        'Coded new features for existing web apps.',
        'Migrated existing codebase to VueJS, Nuxt',
        'Implemented frontend business requirements for web apps using VueJS, Nuxt Js',
        'Implemented improved website UI and UX for customers',
      ],
    }
  },
}
</script>
