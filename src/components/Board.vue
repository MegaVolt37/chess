

<template>
  <div>
    <h1>Текущий игрок: {{ currentPlayer?.color }}</h1>
    <div class="board">
    <div v-for="(row, index) in board?.cells" :key="index">
      <Cell v-for="(cell, idx) in row" :key="idx" :cell="cell"
        :selected="cell.x === selectedCell?.x && cell.y === selectedCell?.y" @select="select" />
    </div>
  </div>
  </div>
  
</template>

<script lang="ts" setup>
import Cell from "./Cell.vue";
import { defineProps, nextTick, ref, defineEmits } from "vue";
import { CBoard } from "../../models/board.model";
import { CCell } from "../../models/cell.model";
import { CPlayer } from "../../models/player.model";
const selectedCell = ref<CCell | null>(null);
const props = defineProps({
  board: CBoard,
  currentPlayer: CPlayer,
})
const emit = defineEmits(['swapPlayer'])
const select = (cell: CCell) => {
  if (selectedCell.value && selectedCell.value !== cell && selectedCell.value.figure?.canMove(cell)) {
    selectedCell.value.moveFigure(cell)
    emit('swapPlayer')
    nextTick(() => {
      selectedCell.value = null;
    })
  } else {
    if (cell.figure?.color === props.currentPlayer?.color) {
      selectedCell.value = cell
    }
  }
  hightLightCells();
}
const hightLightCells = () => {
  props.board.hightLightCells(selectedCell.value)
}

</script>

<style>
.board>div {
  display: contents;
}
</style>