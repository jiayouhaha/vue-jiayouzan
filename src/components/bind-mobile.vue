<template>
  <div class="modal-box bind-mobile-modal-box">
    <div class="modal-box-main add-mobile-wrapper">
      <div class="close-head red">
        <label class="line-label">绑定手机号</label>
        <span class="iconfont icon-ioscloseoutline close-btn white"></span>
        </div>
      <div class="form-box">
        <div class="form-item">
          <input type="tel"  class="normal-input mobile-input" value="" placeholder="请输入手机号">
          <div class="btn code-btn disabled get-code">获取验证码</div>
          </div>
        <div class="form-item">
          <input type="number" pattern="[0-9]*"  class="normal-input code-input" placeholder="请输入验证码">
          </div>
        </div>
      <div class="btn normal-h-btn disabled bind-mobile-btn">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bind-mobile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
