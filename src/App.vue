<template>
  <header>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
  </header>
  <div id="app">
        <div class="leftTab">
            <h1>Input Table</h1>
            <input v-model.trim="packageName" class="form-control" type="text">
            <button v-on:click="searchPackage(packageName)" class="search btn btn-success">search</button>
        </div>   
        <div class="mainTab">
            <h1><b>Simple package searcher</b></h1>
            <h1>{{msg}}</h1>
            <div class="info">
              <h3 v-if="visible">Name: {{packName}}</h3>
              <h4 v-if="visible">Package Manager: {{packageManager}}</h4>
              <h4 v-if="visible">Version: {{version}}</h4>
              <h4 v-if="visible">License: {{license}}</h4>
              <h4 v-if="visible">Home Page: <a :href="homePage" target="_blank">{{homePage}}</a></h4>
              <h4 v-if="visible">Author Name: {{authorName}}</h4>
              <h4 v-if="visible">Author Link: <a :href="authorEmail" target="_blank">{{authorEmail}}</a></h4>
              <h4 v-if="visible">Description: {{description}}</h4>
              <h4 v-if="visibleDeps">Dependencies: </h4>
              <div :key="dep.id" v-for="dep in deps">
                <a v-on:click="searchPackage(dep)" href="#" class="item btn btn-secondary">{{dep}}</a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      visible: false,
      visibleDeps: false,
      msg: 'Enter package name and click search!',
      packName: 'Enter package name..',
      packageManager: '',
      homePage: '',
      description: '',
      version: '',
      authorName: '',
      authorEmail: '',
      license: '',
      deps: [],
    }
  },
  methods: {
    async searchPackage(packageName) {
      this.packName = this.description = this.version 
        = this.authorName = this.authorEmail = this.license = this.packageManager = this.homePage = ''
      this.deps = []
      this.visible = false
      this.visibleDeps = false
      if (packageName.trim() === '') {
        this.msg = 'Empty package name line!'
        return
      }
      try{
        let res = await fetch(`https://registry.npmjs.org/${packageName.toLowerCase()}/latest`);
        let info = await res.json()
        this.packName = info.name;
        this.packageManager = 'NPM'
        this.description = info.description
        this.homePage = info.homepage
        this.version = info.version
        this.authorName = info.author.name
        this.authorEmail = info.author.url
        this.license = info.license
        for (let dep in info.dependencies) {
          this.deps = [...this.deps, dep]
          this.visibleDeps = true
        }
        this.msg = 'Find this one!'
        this.visible = true
        console.log(info)
      }
      catch(e) {
        try {
          let res = await fetch(`https://pypi.org/pypi/${packageName.toLowerCase()}/json`);
          let info = await res.json();
          this.packName = packageName.toLowerCase()
          this.packageManager = 'PIP'
          this.homePage = info.info.home_page
          this.description = info.info.description
          this.version = info.info.version
          this.authorName = info.info.author
          this.authorEmail = info.info.author_email
          this.license = info.info.license
          this.msg = 'Find this one!'
          this.visible = true
          console.log(info)
        }
        catch(e) {
          this.msg = "Couldn't find this package!"
          this.visible = false
          this.visibleDeps = false
        }
      }
    }
  }
}
</script>

<style>
#app {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', Times, serif;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: auto;
    padding: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search {
   margin: 10px;
   width: 100%;
}
.leftTab {
    width: 30%;
    height: 80vh;
    background-color: whitesmoke;
    border: 1px black solid;
    border-right: none;
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mainTab {
    width: 100%;
    height: 80vh;
    background-color: whitesmoke;
    border: 1px black solid;
    overflow-y:scroll;
    padding: 1vw;
}

.cardField {
  background-color: whitesmoke;
  border-top: 1px black solid;
  width: 80vw;
  height: 80vh;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-items: left;
}
.item {
  width: 30%;
  margin: 1% 0 1% 0;
}
h1{
    text-align: center;
    padding-bottom: 5vh;
}
</style>