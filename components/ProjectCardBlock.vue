<template>
  <div class="flex flex-wrap sm:-mx-2 mt-5">
    <div
      v-for="(project, index) in projects"
      :key="index"
      data-aos="zoom-in"
      class="w-full flex sm:w-1/2 lg:w-1/3 sm:px-2 mb-4"
    >
      <div
        class="w-full py-6 px-8 flex flex-col bg-secondary rounded-lg shadow-lg transition transform hover:-translate-y-2 duration-200 ease-linear"
      >
        <div class="flex items-center justify-between">
          <i class="far fa-folder-open text-primary text-3xl" />
          <div class="ml-3">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              :title="project.title"
            >
              <i
                class="fab fa-github text-light-grey text-lg mr-4 hover:text-primary"
              />
            </a>
            <a target="_blank" :href="project.siteUrl" :title="project.title">
              <i
                class="fas fa-external-link-alt text-light-grey text-lg hover:text-primary"
              />
            </a>
          </div>
        </div>
        <h5 class="text-xl font-bold text-light-grey mt-5">
          {{ project.title }}
        </h5>
        <p class="mt-2 flex-grow">
          {{ project.description }}
        </p>
        <ul class="flex flex-wrap -mx-2 mt-5">
          <li
            v-for="(stack, i) in project.stacks"
            :key="i"
            class="mt-2 px-2 text-lightest-gray"
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
            'A web application for sending, schedulling and managing bulk SMS',
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
      ],
    }
  },
}
</script>
