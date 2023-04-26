<template>
  <div class="lost">
    <h3>{{ title }}</h3>
    <div v-for="figure in figures" :key="figure.id">{{ figure.name }} <img v-if="figure.logo" :src="figure.logo" width="20" height="20" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, defineProps } from "vue"
import { CFigure } from '../../models/figures/figure.model';

defineProps({
  title: String,
  figures: Array as PropType<CFigure[]>
})
</script>

<style></style>