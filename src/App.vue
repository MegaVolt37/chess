

<template>
  <div :style="'display: flex;'">
    <Timer :currentPlayer="currentPlayer" @restart="restart"/>
    <Board :board="board" :currentPlayer="currentPlayer" @swapPlayer="swapPlayer" />
    <LostFigures :title="'Белые фигуры'" :figures="board.lostWhiteFigures" />
    <LostFigures :title="'Черные фигуры'" :figures="board.lostBlackFigures" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Board from './components/Board.vue';
import { CBoard } from "../models/board.model";
import { CPlayer } from "../models/player.model";
import { Colors } from "../models/colors.model";
import LostFigures from "./components/lostFigures.vue";
import Timer from "./components/Timer.vue";
const board = ref(new CBoard());
const whitePlayer = ref(new CPlayer(Colors.WHITE));
const blackPlayer = ref(new CPlayer(Colors.BLACK));
const currentPlayer = ref(whitePlayer.value);
const restart = () => {
  const newBoard = new CBoard();
  newBoard.initCells();
  newBoard.addFigures();
  board.value = newBoard
  currentPlayer.value = whitePlayer.value
}
const swapPlayer = () => {
  currentPlayer.value = currentPlayer.value.color === Colors.WHITE ? blackPlayer.value : whitePlayer.value
}
onMounted(() => {
  restart()
})
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.board {
  width: calc(64px * 8);
  height: calc(64px * 8);
  display: flex;
  flex-wrap: wrap;
}

.cell {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cell img {
  width: 48px;
  height: 48px;
  position: relative;
}

.black {
  background-color: #2f74a1;
}

.white {
  background-color: #ffba53;
}

.selected {
  background-color: brown;
}

.available {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: green;
}

.lost {
  height: calc(50vh - 60px);
  padding: 30px;
  margin-left: 50px;
  background-color: lightgray;
}
</style>
