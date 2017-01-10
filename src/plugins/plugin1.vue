<style lang="css" scoped>
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
       border-left:.01rem solid #e6e6e6;
   }
   .addressee{
     background:white;
     border-top:1px solid #e6e6e6;
     border-bottom:1px solid #e6e6e6 !important;
     padding:0
   }
</style>

<template>
<div  class="addressee am-list form">
     <div v-for="(index,item) in datasource" style="padding:.12rem 0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
       <i   v-bind:style="{background:bgcolor[index]}" class="iBall">{{item.type}}</i>
       <div style="min-width:0" class="am-list-label">
        </div>
       <div class="am-list-control">
           <p class="nameColor" >{{item.tel}}</p>
           <p class="moreEllipsis"> {{item.detailAdd}}</p>
         <!-- <input type="text" placeholder="收件人姓名" value=""> -->
       </div>
       <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
       <div class="am-list-button borLeft">
         <button type="button" style="color:blue;font-size:.2rem" disabled="disabled">地址䈬</button>
       </div>
     </div>
   </div>

</template>


<script>

  export default {
       data(){
           return{
             bgcolor:['red','green'],
             datasource:[]

           }
       },
       methods(){
       },
       created(){
         this.$http.get("/rest/list4")
           .then(
              (res) =>{
                   this.datasource = res.data.data;
                   console.log(res.data.data);
              },(response) =>{
                    console.log("http error");
              }
           )
       },
       ready(){
       }
  }
</script>
