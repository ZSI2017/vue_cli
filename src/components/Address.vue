<style lang="scss" scoped>
.iBall{
   text-align: center;
   line-height: .3rem;
    color:white;
    font-style: normal;
    display: block;
    width:.3rem;
    height:.3rem;
    border-radius: .15rem;
}
.nameColor{
     color:#8E7F7F;
}
.moreEllipsis{
  font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
      overflow:hidden;
}
.am-list-button:before{
     background:white !important;
}
.borLeft{
  display: flex !important ;
  height:.48rem !important;
    border-left:.01rem solid #e6e6e6;
    align-items: center;
    justify-content: center;
}
.addressee{
  overflow: hidden;
  background:white;
  border-top:1px solid #e6e6e6;
  border-bottom:1px solid #e6e6e6 !important;
  padding:0
}
</style>

<template lang="html">
  <div class="addressee am-list form">
       <div v-for="(index,item) in datasource" style="height:.95rem; padding:.12rem 0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
         <i   v-bind:style="{background:bgcolor[index]}" class="iBall">{{item.type}}</i>
         <div style="min-width:0" class="am-list-label">
          </div>
         <div class="am-list-control">
             <!-- <p class="nameColor" >{{item.tel}}</p> -->
             <!-- <p class="moreEllipsis"> {{item.detailAdd}}</p> -->
           <input type="text" v-bind:placeholder="item.placetitle" value="">
         </div>
         <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
         <div class="am-list-button am-flexbox borLeft">
           <button type="button" style="margin-right:.22rem;color:blue;font-size:.2rem"
           v-on:click="myClick(index)">地址䈬</button>
         </div>
       </div>
  </div>
  <div style="margin:.3rem .15rem .6rem">
      <button v-on:click="green" type="button" class="am-button blue  ">下一步</button>
  </div>
</template>


<script>
  export default{
       data(){
            return {
               bgcolor:['red','green'],
              datasource:[
                {
                    type:'寄',
                    placetitle:"从哪里寄",
                    bgcolor:'red'
                },
                {
                    type:'收',
                    placetitle:'寄到哪里',
                    bgcolor:'green'
                }

              ]

            }
       },
       methods:{

       },
       created(){
         ant.setTitle({
             title:"地址信息"
         })


       },
       ready(){

       },
       destory(){

       }
  }
</script>
