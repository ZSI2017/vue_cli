
<style  lang="css" scoped>
  .outLab{
      background: white;
  }
   .checkLab{
       color:#e6e6e6;
   }
   .addressee{
     background:white;
     border-top:1px solid #e6e6e6;
     border-bottom:1px solid #e6e6e6 !important;
     padding:0

   }

</style>

 <template>
     <my-header :msgheader.sync="mag">
         <p  style="font-weight:bold;font-size:.26rem">填写收件人地址</p>
     </my-header>
     <section>
               <!-- <p>
                  这里是第三个路由
               </p>
               <img style="width:100%;height:100%" src="/static/images/welcome.png">
               <div class="am-article" role="article">
  <h2>中石化加油卡办卡章程</h2>
  <time>2013-11-23 12:20:00</time>
  <p><img src="https://os.alipayobjects.com/rmsportal/DzdIWWtLuecXwwj.jpeg" width="290" height="200"></p>
  <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
  <div class="am-article-footer">
      <a class="am-article-more" href="#">更多</a>
  </div>
</div> -->
<div  class="addressee am-list form">
   <div style="padding:.12rem 0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
     <div class="am-list-label">收件人</div>
     <div class="am-list-control">
       <input type="text" placeholder="收件人姓名" value="">
     </div>
     <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
     <div class="am-list-button">
       <button type="button" style="color:blue" disabled="disabled">通讯录</button>
     </div>
   </div>
        <div style="padding-left:0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
          <div class="am-list-label">手机号码</div>
          <div class="am-list-control">
            <input type="telphone" placeholder="11位手机号" value="">
          </div>
          <!-- <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div> -->
          <!-- <div class="am-list-button">
            <button type="button" disabled="disabled">通讯录</button>
          </div> -->
        </div>
        <div style="padding-left:0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
          <div class="am-list-label">选择地区</div>
          <div class="am-list-control">
            <input type="telphone" placeholder="地区信息" value="">
          </div>
          <!-- <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div> -->
          <!-- <div class="am-list-button">
            <button type="button" disabled="disabled">通讯录</button>
          </div> -->
        </div>
        <div style="align-items:flex-start;padding-left:0;margin-left:.12rem; border-bottom:1px solid #e6e6e6 padding:0" class="am-list-item am-input-autoclear">
          <div class="am-list-label">详细地址</div>
          <div class="am-list-control">
            <textarea type="telphone" placeholder="街道 楼宇 门牌信息" ></textarea>
          </div>
          <!-- <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div> -->
          <!-- <div class="am-list-button">
            <button type="button" disabled="disabled">通讯录</button>
          </div> -->
        </div>
      </div>
      <div class="outLab">
          <div class="am-checkbox mini argument">
            <input id="agree1" type="checkbox" checked="checked">
            <span class="icon-check"></span>
            <label class="checkLab" for="agree1">设为默认寄件地址</label>
          </div>
        </div>
    <div style="margin:15px 15px 60px">
        <button type="button" class="am-button blue  ">完成</button>
    </div>

          </section>


</template>


<script>
    import {changeIndex} from "../vuex/actions";

    export default{
          data(){
              return{
                  mag:{
                    title:"返回"
                  }
              }
          },
         vuex:{
             actions:{
                   change:changeIndex
             }
         },
         ready(){
              this.change(3);
         }
    }
</script>
