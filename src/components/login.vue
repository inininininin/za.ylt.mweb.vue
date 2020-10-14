<template>
  <div class="login">
    <div class="nav">
      <img src="../assets/beijing.png" alt="">
    </div>
    <div class="center">
      <div class="account">
        <div class="account_tel">
          <img src="../assets/iphone@2x.png" alt="">
          <input type="search" name="" id="" >
          <img src="../assets/XCopy@2x.png" alt="">
        </div>
        <div class="account_pwd">
          <img src="../assets/mima@2x.png" alt="">
          <input type="search" name="" id="" >
          <img src="../assets/XCopy@2x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.nav{
  width: 100%;
  height: 207px;
  object-fit: cover;
  overflow: hidden;
}
.nav>img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.center{
  width: 100%;
  height: calc(100% - 207px);
  padding: 48px 33px 0px;
  box-sizing: border-box
}
.account{
  width: 100%;
}
.account_tel,.account_pwd{
  width: 100%;
  height: 43px;
  line-height: 43px;
  border-radius: 23px;
  border: 1px solid #E5E5E5;
  margin-bottom: 21px;
  position: relative;
  overflow: hidden;
}
.account_tel>input,.account_pwd>input{
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  padding-left:57px;
  padding-right:10px; 
  box-sizing: border-box 
}

.account_tel>img:first-child{
  position: absolute;
  top: 0;
  left: 28px;
  right: 0;
  bottom: 0px;
  margin: auto 0px;
  width: 13px;
  height: 20px;
}
.account_pwd>img:first-child{
  position: absolute;
  top: 0;
  left: 25px;
  right: 0;
  bottom: 0px;
  margin: auto 0px;
  width: 18px;
  height: 18px;
}
.account_tel>img:last-child{
  margin: auto 0px;
  position: absolute;
  top: 0;
  right: 28px;
  bottom: 0px;
  width: 10px;
  height: 10px;
  cursor: pointer;
}
/* #838383 */
</style>
