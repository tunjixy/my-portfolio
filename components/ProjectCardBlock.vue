<template>
  <div class="flex flex-wrap sm:-mx-2 mt-5">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="w-full flex sm:w-1/2 lg:w-1/3 sm:px-2 mb-4"
    >
      <div
        class="py-6 px-8 flex flex-col bg-secondary rounded-lg shadow-lg transition transform hover:-translate-y-2 duration-75 ease-in"
      >
        <div class="flex items-center justify-between">
          <i class="far fa-folder-open text-primary text-3xl" />
          <div class="ml-3">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              title="Github"
            >
              <i
                class="fab fa-github text-light-grey text-lg mr-4 hover:text-primary"
              />
            </a>
            <a :href="project.siteUrl" title="External">
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
          title: 'Time to Have More Fun',
          description:
            'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
          stacks: ['Next.js', 'Tailwind CSS', 'Firebase'],
          githubUrl: 'https://github.com/bchiang7/time-to-have-more-fun',
          siteUrl: 'https://time-to-have-more-fun.now.sh/',
        },
        {
          title: 'Building a Headless Mobile App CMS From Scratch',
          description:
            'Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement',
          stacks: ['Node', 'Express', 'Firebase', 'Vue'],
          githubUrl: '',
          siteUrl:
            'https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9',
        },
        {
          title: 'Google Keep Clone',
          description:
            'A simple Google Keep clone built with Vue and Firebase.',
          stacks: ['Firebase', 'Vue'],
          githubUrl: 'https://github.com/bchiang7/google-keep-vue-firebase',
          siteUrl: 'https://keep-vue.netlify.com/',
        },
      ],
    }
  },
}
</script>
