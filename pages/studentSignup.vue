<template>
  <div class="container">
<div class="row">
<div class="col-2"></div>
<div class="col-7">
  <b-card class="text-left">
   <div>
<v-alert
  type="error"
   dense
   outlined
>{{ err }}</v-alert>
</div>
  <form @submit.prevent="signUp">
    <p class="h2 text-center mb-4">Student's Sign up</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">First name</label>
    <input type="text"  v-model="firstName" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">Last name</label>
    <input type="text"  v-model="lastName" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterEmailEx" class="grey-text">Your email</label>
    <input type="email" v-model="email" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterPhoneEx" class="grey-text">Your phoneno</label>
    <input type="number" v-model="phone" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterGradeEx" class="grey-text">Select Grade</label>
    <select name="Grade" v-model="grade" id="Grade" class="form-control">
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="12+">12+</option>
        <option value="college">College</option>
        <option value="other">Other</option>

    </select>
    <br/>
    
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Your password</label>
    <input type="password" v-model="password" class="form-control"/>
   
    <br/>
    <div class="text-center mt-4">
      <button class="btn btn-unique" type="submit" >Proceed to Parent Signup</button>
     
    </div>
  </form>
 
   </b-card>
</div>
 
</div>
 
</div>
</template>

<script>
  import gql from  "graphql-tag"
  export default {
    name: 'signup',
    data(){
      return {
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        grade:"",
        password:"",
        permission:"student",
        err:""
      }
    },
    components: {
     
    },
    methods:{
      async teacherSignup(){
        this.$router.push("/signup");
      },  
      async signUp(){
        console.log(this.email,this.userName);
        const result= await this.$apollo.mutate({
          mutation:gql`mutation(
            $email:String!
            $firstName:String!
            $lastName:String!
            $password:String!
            $permission:String!
            $phone:String!
            $grade:String!
          ){studentSignUp(
            email:$email,
            firstName:$firstName,
            lastName:$lastName,
            password:$password,
            permission:$permission,
            phone:$phone,
            grade:$grade,

          )}`,
        variables:{
          email:this.email,
          firstName:this.firstName,
          lastName:this.lastName,
          phone:this.phone,
          grade:this.grade,
          password:this.password,
          permission:this.permission
        }
        })
        console.log(result.data.studentSignUp)
        if(result.data.studentSignUp=="Email exists"){
          this.err="email exists"
          console.log("Email exists, Try New")
        }
        else{
          this.$router.push("/parentSignup?studentId="+result.data.studentSignUp);
        }
      },
    }
  } 
</script>