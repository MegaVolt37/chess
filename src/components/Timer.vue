<template>
  <div>
    <button @click="restart">Restart</button>
    <h4>Черные - {{ blackTime }}</h4>
    <h4>Белые - {{ whiteTime }}</h4>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, ref, watch, defineEmits,onMounted } from "vue";
import { CPlayer } from "../../models/player.model";
import { Colors } from "../../models/colors.model";
const blackTime = ref(300);
const whiteTime = ref(300);
const timer = ref<null | typeof setInterval>(null);
const props = defineProps({
  currentPlayer: Object as PropType<CPlayer>
})
const emit = defineEmits(['restart'])
const restart = () => {
  blackTime.value = 300
  whiteTime.value = 300
  emit('restart')
}
watch(
  () => props.currentPlayer?.color,
  () => {
    startTimer();
  }
)
const startTimer = () => {
  if (timer.value) {
    clearInterval(timer.value)
  }
  const callback = props.currentPlayer.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
  timer.value = setInterval(callback, 1000)
}
const decrementBlackTimer = () => {
  blackTime.value = blackTime.value - 1
}
const decrementWhiteTimer = () => {
  whiteTime.value = whiteTime.value - 1
}
onMounted(() => {
  startTimer();
})
</script>

<style></style>