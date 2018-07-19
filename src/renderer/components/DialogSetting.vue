<template>
  <md-dialog class="dialog" :md-active.sync="showDialog" :md-fullscreen="false">
    <md-dialog-title>Preferences</md-dialog-title>
    <md-dialog-content>
      <md-field>
        <label>Forge API Key</label>
        <md-input value="asdfasdf"></md-input>
      </md-field>
      <md-field>
        <label>Forge API Secret</label>
        <md-input value="asdfasdf"></md-input>
      </md-field>
      <md-switch  class="md-primary">上传完成后下载</md-switch>
      <md-switch class="md-primary">上传完成后下载</md-switch>
    </md-dialog-content>
    <md-dialog-actions>
        <md-button   class="md-primary">测试连接</md-button>
        <md-button  class="md-primary" @click="showDialog=false">取消</md-button>
        <md-button  class="md-primary" @click="showDialog=false">确定</md-button>
    </md-dialog-actions>
    <md-progress-bar md-mode="indeterminate" />
  </md-dialog >
</template>

<script>
const { shell } = require("electron");

export default {
  data: () => {
    return {
      showDialog: false
    };
  },
  methods: {
    openUrl(url) {
      shell.openExternal(url);
    },
    show() {
      this.showDialog = true;
    }
  }
};
</script>

<style scoped>

.dialog{
  width: 400px;
  transform: none;
  
}
</style>
