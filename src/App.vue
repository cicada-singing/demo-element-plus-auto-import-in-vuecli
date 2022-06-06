<template>
  <h1>演示 Element Plus 基础组件</h1>

  <h2>Button 按钮</h2>

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>

  <h2>Icon 图标</h2>

  <el-icon :size="20">
    <i-ep-edit />
  </el-icon>
  <el-icon class="no-inherit" color="#409EFC">
    <i-ep-share />
  </el-icon>
  <el-icon>
    <i-ep-delete />
  </el-icon>
  <el-icon class="is-loading">
    <i-ep-loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle">
      <i-ep-search />
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
