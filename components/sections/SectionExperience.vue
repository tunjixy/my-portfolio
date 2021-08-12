<template>
  <section id="experience" data-aos="fade-up" class="pt-48">
    <div class="container max-w-3xl mx-auto">
      <h3 class="text-light-grey font-bold text-3xl relative line">
        Where I've Worked
      </h3>
      <tabs class="mt-8">
        <tab title="Fullware Group">
          <h4 class="font-bold text-light-grey text-2xl">
            Frontend Developer <span class="text-primary">@ Fullware</span>
          </h4>
          <h5 class="mt-2">2018 - September 2020</h5>
          <div class="mt-4">
            <ul>
              <li
                v-for="(experience, index) in fullwareExperience"
                :key="index"
                class="relative list mt-2 pl-8"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </tab>
        <tab title="Emergent Infastructure Labs">
          <h4 class="font-bold text-light-grey text-2xl">
            Frontend Developer <span class="text-primary">@ Emergent Labs</span>
          </h4>
          <h5 class="mt-2">September 2020 - Present</h5>
          <div class="mt-4">
            <ul>
              <li
                v-for="(experience, index) in emergentLabsExperience"
                :key="index"
                class="relative list mt-2 pl-8"
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
      fullwareExperience: [
        'Create new features and functionality for several client web apps using Vue/Nuxt Js',
        'Implement coding standards and rules to ensure better code quality.',
        'Redesigned and kickstarted the development of several client web apps',
      ],
      emergentLabsExperience: [
        'Create new features and functionality for several client web apps using Vue/Nuxt Js',
        'Implement coding standards and rules to ensure better code quality.',
        'Redesigned and kickstarted the development of several client web apps',
      ],
    }
  },
}
</script>
