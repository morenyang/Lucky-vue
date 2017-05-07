<template>
  <div id="app">
    <div class="main">
	    <input id="title" v-model="title">
    	<h1 @click="handleFlash">{{display}}</h1>
		<div class="list-layout">
			<transition-group class="list" name="list" tag="ul">
				<li v-for="item in list" :key="item">{{item}}</li>
			</transition-group>
		</div>
	</div>
	<div class="control">
		<div class="control-layout">
			<span>输入总人数</span>
			<input v-model="max">
		</div>
		<div class="control-layout">
			<button @click="handleClear">清空</button>
			<button @click="handleClearCache">清空缓存</button>
		</div>
	</div>
	<span>Powered by MorenYANG</span>
  </div>
</template>

<script>
import Store from './store'

const findRepeat = (value, list, max, self) => {
	if(list.length >= max) return;
	let flag = false;
	list.map((val,index,_list) => {
		if (val === value){
			console.log(false)
			flag = true;
			findRepeat(Math.floor(Math.random() * max + 1), _list, max, self)
		} 
	})
	if(!flag)
		self.result = value
}

export default {
  name: 'app',
  data(){
    return{
        flashing: false,
        random: 1,
        max: 100,
        result: null,
        title: '一等奖',
		list: []
    }
  },
  methods:{
    handleFlash(){
      this.flashing = !this.flashing
	  this.result = this.random;
	  let _list = Store.fetch();
	  let self = this;
	  if(!this.flashing){
		findRepeat(this.result, _list, this.max, self)
		this.list.push(this.result);
		_list.push(this.result);
		Store.save(_list);
	  }
    },
	handleClear(){
		this.list = [];
		this.result = null;
	},
	handleClearCache(){
		Store.clear()
	}
  },
  computed:{
    display(){
      return this.flashing ? this.random : this.result ? this.result : '点我开始抽奖'
    }
  },
  beforeMount(){
    let self = this;
    setInterval(function(){
      self.random = Math.floor(Math.random() * self.max + 1)
    }, 100)

    window.onkeyup = function(){
      if(self.flashing)
      self.handleFlash()
    }
  }
}
</script>

<style>
body{
	margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main{
	height: 100vh
}

h1{
  font-size: 120px
}

#title{
  font-size: 50px;
  border: none;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  outline: none
}

.list-layout{
	position: absolute;
	text-align: center;
	width: 100%;
	bottom: 20px;
}
.list{
	list-style: none;
	display: table;
	margin: 20px auto;
	padding: 0
}

.list li{
	font-size: 32px;
	margin: 0 20px;
	float: left;
	text-align: center
}

.control{
	margin: 50px 0
}

.list-move {
  transition: transform 1s;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
</style>
