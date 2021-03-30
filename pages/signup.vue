<template>
  <div>
    <b-container fluid>
      <h3>Teacher Signup</h3>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">First Name</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="firstName"
            type="text"
            id="input-default"
            placeholder="Enter first name"
          ></b-form-input>
        </b-col>
      </b-row>
     
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Last Name</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="lastName"
            type="text"
            id="input-default"
            placeholder="Enter last name"
          ></b-form-input>
        </b-col>
      </b-row>
       <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Email</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="email"
            type="text"
            id="input-default"
            placeholder="Enter email"
          ></b-form-input>
        </b-col>
        
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Password</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="password"
            type="password"
            id="input-default"
            placeholder="Enter password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Country</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="country"
            type="text"
            id="input-default"
            placeholder="Enter country"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">City</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="city"
            type="text"
            id="input-default"
            placeholder="Enter city"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Occupation</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="occupation"
            type="text"
            id="input-default"
            placeholder="Enter occupation"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Profile Heading</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="profileHeading"
            type="text"
            id="input-default"
            placeholder="Enter profile heading"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Profile description</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="profileDescription"
            type="text"
            id="input-default"
            placeholder="Enter profile description"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Phone number</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="phone"
            type="number"
            id="input-default"
            placeholder="Enter teaching experience"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Teaching Experience</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="teachingExperience"
            type="number"
            id="input-default"
            placeholder="Enter teaching experience"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Expected hourly rate</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="expectedHourlyRate"
            type="number"
            id="input-default"
            placeholder="Enter expected hourly rate"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Availability</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="availability"
            type="number"
            id="input-default"
            placeholder="Enter availability"
          ></b-form-input>
        </b-col>
      </b-row>
      
      
      
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Date of birth</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="dob"
            type="date"
            id="input-default"
            placeholder="Enter DOB"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
            <label for="defaultFormRegisterGradeEx" class="grey-text">Gender</label>
        </b-col>
        <b-col sm="7">
        <select name="gender" v-model="gender" id="gender" class="form-control">
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        </b-col>
      </b-row>
    
    <br/>

      
       <div>
            <b-button class="button btn-primary" @click="addSubject()">Add Subject</b-button>
        </div>
      <div v-for="(subject,index) in subjects" :key="index">
          <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default">Subject {{index+1}}</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            required
            v-model="subjects[index]"
            type="text"
            id="input-default"
            placeholder="Enter permission"
          ></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1">
            <b-col sm="2">
            <label for="input-default">Levels</label>
            </b-col>
            <b-col sm="7">
            <b-form-tags
                required
                input-id="tags-pills"
                v-model="levels[index]"
                tag-variant="dark"
                tag-pills
                size="lg"
                separator=" "
                placeholder="Enter Levels separated by space"
            ></b-form-tags>
            </b-col>
      </b-row> 
      <b-row class="my-1">
            <b-col sm="2">
            <label for="input-default">BoardExams</label>
            </b-col>
            <b-col sm="7">
            <b-form-tags
                required
                input-id="tags-pills"
                v-model="exams[index]"
                tag-variant="dark"
                tag-pills
                size="lg"
                separator=" "
                placeholder="Enter Board Exams separated by space"
            ></b-form-tags>
            </b-col>
      </b-row> 
      
      </div>
      <hr />
      <b-row class="my-1">
        <b-col sm="3"> </b-col>
        <b-col sm="3">
          <b-button @click="onSubmit">Signup</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
import index from "./index.vue";

export default {
  components: { index },
  data() {
    return {
      subjects: [],
      levels:[],
      exams:[],
      gender:"",
      dob:"",
      phone:"",
      firstName:"",
      lastName:"",
      email:"",
      country:"",
      city:"",
      occupation:"",
      profileHeading:"",
      profileDescription:"",
      teachingExperience:undefined,
      expectedHourlyRate:undefined,
      availability:undefined,
      permission:"teacher",
      password:"",
    };
  },
  
  name: "addVacancy",
  methods: { 
    async  addSubject() {
     
      this.subjects.push("");
      this.levels.push([]);
      this.exams.push([]);
    },
    async onSubmit() {
      console.log(this.subjects);
      console.log(this.levels);
      console.log(this.exams);
      const result= await this.$apollo.mutate({
          mutation:gql`mutation(
            $email:String!
            $password:String!
            $firstName:String!
            $lastName:String!
            $phone:String!
            $dob:String!
            $gender:String!
            $city:String!
            $country:String!
            $occupation:String!
            $profileHeading:String!
            $profileDescription:String!
            $teachingExperience:String!
            $expectedHourlyRate:String!
            $subjects:[String]!
            $levels:[[String]!]!
            $exams:[[String]!]!
            $availability:String!
            $permission:String!
){teacherSignUp(
            email:$email,
            firstName:$firstName,
            lastName:$lastName,
            phone:$phone,
            password:$password,
            dob:$dob,
            gender:$gender,
            city:$city,
            country:$country,
            occupation:$occupation,
            profileHeading:$profileHeading,
            profileDescription:$profileDescription,
            teachingExperience:$teachingExperience,
            expectedHourlyRate:$expectedHourlyRate,
            subjects:$subjects,
            levels:$levels,
            exams:$exams,
            availability:$availability,
            permission:$permission
          )}`,
        variables:{
          subjects: this.subjects,
          levels:this.levels,
          exams:this.exams,
          gender:this.gender,
          dob:this.dob,
          phone:this.phone,
          firstName:this.firstName,
          lastName:this.lastName,
          email:this.email,
          country:this.country,
          city:this.city,
          occupation:this.occupation,
          profileHeading:this.profileHeading,
          profileDescription:this.profileDescription,
          teachingExperience:this.teachingExperience,
          expectedHourlyRate:this.expectedHourlyRate,
          availability:this.availability,
          permission:this.permission,
          password:this.password
          
        }
        })
        console.log(result)
        if(result.data.teacherSignUp=='teacher created'){
          this.$router.push("/login");
        }
        else{
          this.err="email exists"
          console.log("Email exists, Try New")
        }
      },
    },
};
</script>
<style></style>
