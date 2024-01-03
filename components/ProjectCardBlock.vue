<template>
  <div class="flex flex-wrap mt-5 sm:-mx-2">
    <div
      v-for="(project, index) in projects"
      :key="index"
      data-aos="zoom-in"
      class="flex w-full mb-4 sm:w-1/2 lg:w-1/3 sm:px-2"
    >
      <div
        class="flex flex-col w-full px-8 py-6 transition duration-200 ease-linear transform rounded-lg shadow-lg bg-secondary hover:-translate-y-2"
      >
        <div class="flex items-center justify-between">
          <i class="text-3xl far fa-folder-open text-primary" />
          <div class="ml-3">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              :title="project.title"
            >
              <i
                class="mr-4 text-lg fab fa-github text-light-grey hover:text-primary"
              />
            </a>
            <a target="_blank" :href="project.siteUrl" :title="project.title">
              <i
                class="text-lg fas fa-external-link-alt text-light-grey hover:text-primary"
              />
            </a>
          </div>
        </div>
        <h5 class="mt-5 text-xl font-bold text-light-grey">
          {{ project.title }}
        </h5>
        <p v-if="project.description" class="flex-grow mt-2">
          {{ project.description }}
        </p>
        <ul class="flex flex-wrap mt-5 -mx-2">
          <li
            v-for="(stack, i) in project.stacks"
            :key="i"
            class="px-2 mt-2 text-lightest-gray"
          >
            {{ stack }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardBlock',
  data() {
    return {
      projects: [
        {
          title: 'Bulksmslive',
          description:
            'A web application for sending, scheduling and managing bulk SMS',
          stacks: ['Nuxt.js', 'Tailwind CSS'],
          siteUrl: 'https://www.bulksmslive.com/',
        },
        {
          title: 'Oga Recharge',
          description:
            'A online web application for instant, recurring recharge',
          stacks: ['Nuxt.js', 'Tailwind CSS'],
          siteUrl: 'https://ogarecharge.com/',
        },
        {
          title: 'Ryddl',
          description: 'Read short essays. Get rewards.',
          stacks: ['Vue', 'Tailwind CSS', 'Firebase'],
          siteUrl: 'https://ryddl.com',
        },
        {
          title: 'HelpOS',
          description: 'Request an Ambulance, Get Help on Time',
          stacks: ['Vue', 'Tailwind CSS'],
          siteUrl: 'https://helpos.ng/',
        },
        {
          title: 'Cowrywise Engineering Blog',
          description: '',
          stacks: ['Nuxt', 'Tailwind CSS', 'Wordpress'],
          siteUrl: 'https://engineering.cowrywise.com/',
        },
      ],
    }
  },
}
</script>
