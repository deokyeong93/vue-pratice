<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Databinding</router-link>
    |
    <router-link to="/databindinghtml">DatabindinHtml</router-link>
    |
    <router-link to="/databindinginputtext">DatabindinutText</router-link>
    |
    <router-link to="/databindinginputnumber">DatabindinutNumber</router-link>
    |
    <router-link to="/databindingtextarea">databindingtextarea</router-link>
    |
    <router-link to="/databindingselect">DatabindingSelect</router-link>
    |
    <router-link to="/databindingcheckbox">DataBindingCheckbox</router-link>
    |
    <router-link to="/databindingmulticheck">DataBindingMultiCheck</router-link>
    |
    <router-link to="/databindingradio">DataBindingRadio</router-link>
    |
    <router-link to="/databindingbutton">DataBindingButton</router-link>
    |
    <router-link to="/databindingclass">DataBindingClass</router-link>
    |
    <router-link to="/databindingclass2">DataBindingClass2</router-link>
    |
    <router-link to="/databindingstyle">DataBindingStyle</router-link>
    |
    <router-link to="/databindinglist">DataBindingList</router-link>
    |
    <router-link to="/renderingvif">RenderingVif</router-link>
    |
    <router-link to="/eventclick">EventClick</router-link>
    |
    <router-link to="/eventchange">EventChange</router-link>
    |
    <router-link to="/watch">Watch</router-link>
    |
    <router-link to="/bubbleevent">BubbleEvent</router-link>
    |
    <router-link to="/childparent">ChildParent</router-link>
    |
    <router-link to="/compositionapi">compositionapi</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
