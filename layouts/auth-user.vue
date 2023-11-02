<template>
  <v-app>
    <v-app-bar height="60" flat>
      <div class=" tw-container tw-flex tw-items-center tw-justify-between tw-p-8 tw-mx-auto tw-max-w-6xl">
        <div class=" tw-font-bold">Logo</div>
        <div class=" tw-flex tw-gap-3">
          <v-btn variant="outlined" color="grey-darken-2" class="text-body-2 font-weight-bold">Einloggen</v-btn>
          <v-btn variant="outlined" color="grey-darken-2" class="text-body-2 font-weight-bold">Registrieren</v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-main class=" tw-bg-[#F5F8FA]">
      <div class=" tw-container tw-p-5 tw-mx-auto tw-max-w-6xl">
        <div class=" tw-h-14 tw-bg-white tw-mb-5 tw-grid tw-grid-cols-4 tw-place-items-center">
          <NuxtLink v-for="(item, i) in links" :key="i" :to="item.href">
            <div :class="` tw-flex tw-items-center tw-gap-4 tw-py-2 tw-px-5 tw-rounded ${$route.path === item.href ? 'tw-bg-[#F6F6F6]' : ''}`">
              <v-icon :icon="item.icon" size="20" color="pink"/>
              <div class=" tw-font-bold">{{ item.text }}</div>
            </div>
          </NuxtLink>
        </div>
        <slot/>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
  const links = ref([
    {
      text: 'Lernen',
      icon: 'mdi-clock-outline',
      href: '/learn'
    },
    {
      text: 'Analyse',
      icon: 'mdi-clock-outline',
      href: '/analysis'
    },
    {
      text: 'Prüfungssimulation',
      icon: 'mdi-calendar-check-outline',
      href: ''
    },
    {
      text: 'Profil',
      icon: 'mdi-credit-card-outline',
      href: ''
    }
  ])
</script>