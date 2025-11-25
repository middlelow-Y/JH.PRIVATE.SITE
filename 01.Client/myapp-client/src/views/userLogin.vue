<template>
  <div class="flex items-center justify-center min-h-screen">
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <div class="flex justify-center">
          <img src="../assets/images/moomin.png" style="width: 15rem; height: 15rem;"/>
        </div>
      </template>
      <template #title>
        <div class="relative flex justify-center items-center">
          <span>LOG IN</span>
          <div class="absolute right-0 flex items-center gap-2">
            <i class="pi pi-sun"></i>
            <ToggleSwitch v-model="isDarkMode" @update:modelValue="toggleDarkMode" />
            <i class="pi pi-moon"></i>
          </div>
        </div>
      </template>
      <template #content>
        <div class="card flex justify-center">
          <Form
            v-slot="$form"
            :resolver="resolver"
            :initialValues="initialValues"
            @submit="onFormSubmit"
            class="flex flex-col gap-4 w-full sm:w-56"
          >
            <div class="flex flex-col gap-1">
              <InputText name="username" type="text" placeholder="Username" fluid />
              <Message
                v-if="$form.username?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.username.error?.message }}</Message
              >
            </div>
            <div class="flex flex-col gap-1">
              <InputText name="email" type="text" placeholder="Email" fluid />
              <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
                $form.email.error?.message
              }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
          </Form>
        </div>
      </template>
    </Card>
  </div>
</template>
<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { ref, onMounted } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useToast } from 'primevue/usetoast'
import { z } from 'zod'
import Form from '@primevue/forms/form'
import Message from 'primevue/message'
import ToggleSwitch from 'primevue/toggleswitch'
import 'primeicons/primeicons.css'

const toast = useToast()
const initialValues = ref({
  username: '',
  email: '',
})

const resolver = ref(
  zodResolver(
    z.object({
      username: z.string().min(1, { message: 'Username is required.' }),
      email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Invalid email address.' }),
    }),
  ),
)

const onFormSubmit = ({ valid }: { valid: boolean }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
  }
}

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
</script>
