<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ToggleSwitch from 'primevue/toggleswitch'
import Checkbox from 'primevue/checkbox'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'

const isDarkMode = ref<boolean>(false)

const toggleDarkMode = (value: boolean) => {
  isDarkMode.value = value

  // 다크모드 클래스 토글
  if (value) {
    document.documentElement.classList.add('dark-mode')
  } else {
    document.documentElement.classList.remove('dark-mode')
  }

  // 로컬스토리지에 저장
  localStorage.setItem('darkMode', value.toString())
}

// 초기 로드 시 저장된 설정 불러오기
onMounted(() => {
  const savedMode = localStorage.getItem('darkMode') === 'true'
  if (savedMode) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark-mode')
  }
})

const pizza = ref()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt',
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
          },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
  },
])
</script>

<template>
  <div class="card mb-4">
    <Menubar :model="items">
      <template #end>
        <div class="flex items-center gap-2">
          <i class="pi pi-sun"></i>
          <ToggleSwitch v-model="isDarkMode" @update:modelValue="toggleDarkMode" />
          <i class="pi pi-moon"></i>
        </div>
      </template>
    </Menubar>
  </div>
  <div class="flex justify-center">
    <Card style="width: 30rem; overflow: hidden">
      <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>
