<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Preferences</md-dialog-title>
    <md-card>
      <md-card-content>
        <div class="md-title">Forge设置</div>
        <md-field>
          <label>Forge API Key</label>
          <md-input value="asdfasdf"></md-input>
        </md-field>
        <md-field>
          <label>Forge API Secret</label>
          <md-input value="asdfasdf"></md-input>
        </md-field>
        <md-divider></md-divider>
        <div class="md-title">转换设置</div>
        <md-field>
          <label>Forge API Key</label>
          <md-input value="asdfasdf"></md-input>
        </md-field>
        <md-switch v-model="download" class="md-primary">上传完成后下载</md-switch>
        <md-switch v-model="download" class="md-primary">上传完成后下载</md-switch>
      </md-card-content>        
      <md-card-actions>
        <md-button   class="md-primary">测试连接</md-button>
        <md-button  class="md-primary" @click="showDialog=false">取消</md-button>
        <md-button  class="md-primary" @click="showDialog=false">确定</md-button>
      </md-card-actions>
        <md-progress-bar md-mode="indeterminate" />
    </md-card>
  </md-dialog >
</template>

<script>
const { shell } = require("electron");

export default {
  data:()=>{return {
    download:false
  }},
  props:['showDialog'],
  methods: {
    openUrl(url) {
      shell.openExternal(url);
    }
  }
};
</script>

<style scoped>

.page{
  background-color: #EEE;
  padding: 10px;
}

.md-card{
  margin: 0px;
}

.md-card-content .md-title{
  font-size: 1.2em
}

.md-divider{
  margin-bottom: 10px;
}
</style>
