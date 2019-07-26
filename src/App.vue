<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">About</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
#components-layout-demo-fixed,
#app {
  height: 100%;
}
.ant-layout-content {
  text-align: center;
  padding-top: 100px;
}
</style>
