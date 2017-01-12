<style>


</style>


<template>
  <div>
     <div>
        <router-view>
        </router-view>
      </div>
        <footer id="footer">
        <div class="am-tab am-fixed am-fixed-bottom" role="tablist">
              <a v-for="item in list"  v-bind:class="['am-tab-item', current==$index ? 'selected':'']"
              v-on:click = "changePage($index)"
              v-link ="{path:item.path}"
                  role="tab"
                  >{{item.name}}</a>

       </div>
         </footer>
  </div>

</template>

<script>
      import  {getIndex } from "../vuex/getters";
      import  {changeIndex} from "../vuex/actions";
      export default{
          data(){
              return{
                      list:[
                        {path:"/",icon:"&#xe78b;",name:"列表1"},
                        {path:'/four',icon:'',name:'列表2'},
                        {path:"/second/默认",icon:"&#xe78b;",name:"列表3"},
                        {path:"/third",icon:"&#xe78b;",name:"列表4"}
                        ]
              }
          },
          vuex:{
              actions:{
                   change:changeIndex
              },
              getters:{
                   current:getIndex
              }
          },
          methods:{
            changePage(index){
              this.change(index);
            }
          }
     }




</script>
