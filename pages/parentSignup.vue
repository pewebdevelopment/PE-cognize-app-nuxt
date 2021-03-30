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
    <p class="h2 text-center mb-4">Parent's Sign up</p>
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
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Your password</label>
    <input type="password" v-model="password" class="form-control"/>
   
    <br/>
    <div class="text-center mt-4">
      <button class="btn btn-unique" type="submit" >Signup</button>
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
        password:"",
        permission:"parent",
        studentId:this.$router.currentRoute.query['studentId'],
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
            $phone:String!
            $studentId:String!
            $password:String!
            $permission:String!
          ){parentSignUp(
            parentEmail:$email,
            parentFirstName:$firstName,
            parentLastName:$lastName,
            parentPhone:$phone,
            studentId:$studentId
            parentPassword:$password,
            permission:$permission
          )}`,
        variables:{
          email:this.email,
          firstName:this.firstName,
          lastName:this.lastName,
          phone:this.phone,
          password:this.password,
          studentId:this.studentId,
          permission:this.permission
        }
        })
        console.log(result)
        if(result.data.parentSignUp=='parent created'){
          this.$router.push("/login");
        }
        else{
          this.err="email exists"
          console.log("Email exists, Try New")
        }
      },
    }
  } 
</script>