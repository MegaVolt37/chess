<template>
  <div :class="['cell', cell?.color, { selected: selected }]" @click="select" :style="{background: cell?.available && cell?.figure ? 'green' : ''}">
    <div v-if="cell?.available && !cell?.figure" class="available"></div>
    <img v-if="cell?.figure?.logo" :src="cell?.figure?.logo" alt="">
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { CCell } from "../../models/cell.model";
const emit = defineEmits(['select'])

const { cell, selected } = defineProps({
  cell: CCell,
  selected: Boolean,
})

const select = () => {
  emit('select', cell)
}
</script>

<style></style>