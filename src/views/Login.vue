<template>
  <div class="login">
      <div style="border-bottom:1px solid black;width:100%"><h1>UNI-ADMIN</h1></div>
      <div><input type="text" v-model="username" class="input" placeholder="请输入用户名"></div>
      <div><input type="password" v-model="password" class="input" placeholder="请输入密码"></div>
      <div><button @click="onClickDen">立即登录</button></div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookies";
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        onClickDen(){
            axios.post("http://ceshi5.dishait.cn/admin/login",{
                username:this.username,
                password:this.password
            }).then(res=>{
                console.log(res);
                if(res.status == 200){
                    this.$message.success("登录成功!")
                    Cookies.setItem("token",res.data.data.token,{
                        expires:2000
                    });
                    this.$router.push("/")
                }
            }).catch(error=>{
                console.log(error);
                 this.$message.error('账号密码错误!');
            })
        }
    }
}
</script>

<style>
.login
{
    width: 600px;
    height:300px;
    border: 1px solid black;
    margin: 200px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.login div
{
    width: 90%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.input
{
    width: 90%;
    height: 50%;
}
.login div button
{
    width: 90%;
    height: 50%;
    font-size: 18px;
    background: rgb(19, 19, 134);
    border: 1px solid rgb(19, 19, 134);
    color: white;
}
</style>