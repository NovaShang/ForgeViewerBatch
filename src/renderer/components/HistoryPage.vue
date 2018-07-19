<template>
  <md-list>
    <md-list-item @click="select">
      <div class="list-item">
        <div class="title">
          <div class="grow">哈哈哈哈啊哈哈哈哈哈.rvt</div>
          <md-button class="md-icon-button"><md-icon>folder</md-icon></md-button>
          <md-button class="md-icon-button"><md-icon>home</md-icon></md-button>
        </div>
      </div>
    </md-list-item>
    <md-list-item @click="select">
      <div class="list-item">
        <div class="title">
          <div class="grow">哈哈哈哈啊哈哈哈哈哈.rvt</div>
          <md-button class="md-icon-button"><md-icon>folder</md-icon></md-button>
          <md-button class="md-icon-button"><md-icon>home</md-icon></md-button>
        </div>
      </div>
    </md-list-item>
    <md-list-item @click="select">
      <div class="list-item">
        <div class="title">
          <div class="grow">哈哈哈哈啊哈哈哈哈哈.rvt</div>
          <md-button class="md-icon-button"><md-icon>folder</md-icon></md-button>
          <md-button class="md-icon-button"><md-icon>home</md-icon></md-button>
        </div>
      </div>
    </md-list-item>
    <md-list-item @click="select">
      <div class="list-item">
        <div class="title">
          <div class="grow">哈哈哈哈啊哈哈哈哈哈.rvt</div>
          <md-button class="md-icon-button"><md-icon>folder</md-icon></md-button>
          <md-button class="md-icon-button"><md-icon>home</md-icon></md-button>
        </div>
      </div>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  data: () => {
    return {
      amount: 20
    };
  },
  methods: {
    select() {}
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}
.list-item .title {
  margin: 4px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
}

.list-item .info {
  margin: 4px 0px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
}
.grow {
  flex-grow: 1;
}
</style>
