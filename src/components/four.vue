<style lang="scss">

</style>

<template>
  <div>
    <my-header :msgheader.sync="mag" ></my-header>
      <vue-plugin></vue-plugin>
  </div>
</template>

<script>
    import  VuePlugin from  "../plugins/plug1.js";
    import {changeIndex} from "../vuex/actions";
    Vue.use(VuePlugin);
export default{
    data(){
        return {
          mag:{
              title:"列表2"
          }

        }
    },
    vuex:{
      actions:{
          change:changeIndex
      }

    },
    created(){

    },
    ready(){
        this.change(1);

    },
    destory(){

    }

}
</script>
