<script setup lang="ts">
import type { PropertyCreate } from 'shared/types/Property'
import { ref, watch } from 'vue'
import { CATEGORY_LABELS, STATE_LABELS, TYPE_LABELS } from 'shared/constants/PropertyConstant'
import { PropertyCategory } from 'shared/enums/PropertyCategory'
import { PropertyType } from 'shared/enums/PropertyType'
import { PropertyState } from 'shared/enums/PropertyState'
import usePropertyQuery from '@/modules/property/composables/usePropertyQuery'
import BaseHeading from '@/components/base/BaseHeading.vue'
import BaseFormItem from '@/components/base/BaseFormItem.vue'
import AutocompleteAddress from '@/components/AutocompleteAddress.vue'

defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

const { addProperty } = usePropertyQuery()
const { mutate, isSuccess, isPending } = addProperty()

const property = ref<PropertyCreate>({
  location: null,
  state: null,
  category: null,
  type: null,
  price: null,
  surface: null
})

function submit() {
  mutate(property.value)
}

watch(isSuccess, (value) => {
  if (value) emit('update:modelValue', false)
})
</script>

<template>
  <Dialog
    modal
    dismissable-mask
    :visible="modelValue"
    :style="{ width: '100%', maxWidth: '40rem' }"
    @update:visible="(value) => $emit('update:modelValue', value)"
  >
    <template #header>
      <BaseHeading type="h2">Ajouter un logement</BaseHeading>
    </template>

    <div class="flex flex-col space-y-4">
      <BaseFormItem for-id="field-address" label="Adresse :">
        <AutocompleteAddress v-model="property.location" />
      </BaseFormItem>

      <BaseFormItem for-id="field-state" label="État :">
        <Dropdown
          v-model="property.state"
          input-id="field-state"
          option-label="label"
          option-value="value"
          placeholder="Sélectionner"
          :options="Object.values(PropertyState).map((state) => ({ label: STATE_LABELS[state], value: state }))"
          :style="{ width: '100%' }"
        />
      </BaseFormItem>

      <BaseFormItem for-id="field-category" label="Type :">
        <Dropdown
          v-model="property.category"
          input-id="field-category"
          option-label="label"
          option-value="value"
          placeholder="Sélectionner"
          :options="Object.values(PropertyCategory).map((category) => ({ label: CATEGORY_LABELS[category], value: category }))"
          :style="{ width: '100%' }"
        />
      </BaseFormItem>

      <BaseFormItem for-id="field-type" label="Typologie :">
        <Dropdown
          v-model="property.type"
          input-id="field-type"
          option-label="label"
          option-value="value"
          placeholder="Sélectionner"
          :options="Object.values(PropertyType).map((type) => ({ label: TYPE_LABELS[type], value: type }))"
          :style="{ width: '100%' }"
        />
      </BaseFormItem>

      <BaseFormItem for-id="field-price" label="Prix :">
        <InputNumber
          v-model="property.price"
          input-id="field-price"
          mode="currency"
          currency="EUR"
          locale="fr-FR"
          :min-fraction-digits="0"
          :input-style="{ width: '100%' }"
        />
      </BaseFormItem>

      <BaseFormItem for-id="field-surface" label="Superficie :">
        <InputNumber
          v-model="property.surface"
          input-id="field-surface"
          locale="fr-FR"
          suffix=" m²"
          :min-fraction-digits="2"
          :input-style="{ width: '100%' }"
        />
      </BaseFormItem>
    </div>

    <template #footer>
      <Button label="Valider" icon="pi pi-check" :loading="isPending" @click="submit()" />
    </template>
  </Dialog>
</template>
