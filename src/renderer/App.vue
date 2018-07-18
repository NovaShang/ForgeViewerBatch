<template>
  <md-app md-mode="fixed">
    <md-app-toolbar class="md-primary md-dense ">
      <md-tabs class="md-primary tabs">
        <template slot="md-tab" slot-scope="{ tab }">
          <div class="icon-text-button">
            <md-icon>{{ tab.data.icon }}</md-icon>
            <div class="text" v-if="tab.label"> {{ tab.label }}</div>
            <div class="badge" v-if="tab.data.showBadge">{{ tab.data.badge }}</div>
          </div>
        </template>
        <md-tab id="tasks" md-label="正在转换" :md-template-data="{ badge: 0,icon:'play_arrow',showBadge:true }" to="/tasks" ></md-tab>
        <md-tab id="history" md-label="已完成" :md-template-data="{ icon:'history' }" to="/history" ></md-tab>
      </md-tabs>
      <div class="md-toolbar-section-end" >
        <md-button class="md-icon-button" @click="showSetting=true">
          <md-icon>settings</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>cloud_download</md-icon>
        </md-button>
        <md-button class="md-raised greenbutton">
          <div class="icon-text-button">
            <md-icon>folder_open</md-icon>
            <div class="text">转换模型</div>
          </div>
        </md-button>
      </div>
    </md-app-toolbar>
    <md-app-content>
    <DialogSetting :showDialog.sync="showSetting"/>
        <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: "forge-viewer-batch",
  components: {},
  data: () => {
    return {
      currentPage: "tasks",
      showSetting: false
    };
  }
};
</script>

<style scoped>
.md-app {
  border: 1px solid rgba(#000, 0.12);
  font-family: "Microsoft Yahei", "PingFang SC", sans-serif;
  height: 100%;
  user-select: none;
  background-color: #eee;
}

.md-content {
  padding: 0px;
  background-color: #eee;
}

.tabs {
  flex-grow: 1;
  padding-left: 0px;
}

.greenbutton {
  background-color: rgb(57, 165, 47) !important;
  color: white !important;
  margin-left: 10px;
}

.icon-text-button {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon-text-button .md-icon {
  margin-right: 5px;
  margin-left: 0px;
}

.badge {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  color: #448aff;
  font-weight: bold;
  padding: 1px 6px;
  margin-left: 10px;
}
</style>
