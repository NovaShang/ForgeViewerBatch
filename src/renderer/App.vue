<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="clipped">
        <tasklist/>
      </md-app-drawer>
      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";

export default {
  name: "forge-viewer-batch",
  components: {
    tasklist: TaskList
  }
};
</script>

<style scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
