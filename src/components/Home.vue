<template>
  <div class="home">
    <div class="main_content">
      <Navbar />
      <div class="container nav_text">
      <div class="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
        <div class="col-md-12">
          <h1> 
            <span>Unearth what you were </span>
            <span>not taught in school.</span>
            </h1>
          <p> 
            <span>Unlock the super-learning potentials in you with our courses specially </span> 
            <span>designed for your academic and career excellence.</span>
          </p>
        </div>
        <div class="col-md-12 sub_btn">
          <a class="nav-link" href="#scrollspyHeading1"><button class="btn btn-outline-success" type="submit">Take a Course</button></a>
       </div>
    </div>
    </div>
    </div>
    <Banner />
    <Courses />
    <Testimonial />
    <Session />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Courses from '@/components/Courses'
import Testimonial from '@/components/Testimonial'
import Session from '@/components/Session'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
   Navbar,
   Banner,
   Courses,
   Testimonial,
   Session,
   Footer
  }
}
</script>

<style scoped>
@media all and (max-width:600px) {
.nav_text{
  padding-top: 2rem;
}
h1 span{
  font-size:25px;
}
p span{
  font-size: 17px;
}
.sub_btn .btn{
  padding: 0.5rem 2rem;
  font-size: 15px;
}
  }
  
body{
  margin:0px;
 }
.main_content{
  background-image: url('~@/assets/Img_1/banner_2.jpg');
  background-position:center;
  background-size:cover;
}
.btn {
  border: none;
  color: #3974DE;
  padding: 1rem 3rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin:auto;
}
.btn {
  background-color: white; 
  color: #3974DE; 
  /* border: 2px solid white; */
  border-radius: 5rem;
}
.btn:hover {
  background-color: #3974DE;
  color: white;
}
.btn_main {
  border: none;
  color: #3974DE;
  padding: 1rem 2rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin:auto;
}
.btn_main {
  background-color: #3974DE; 
  color: white; 
  border: 2px solid #3974DE;
  border-radius: 5rem;
}
.btn_main:hover {
  background-color: white;
  color: #3974DE;
}
.main_content{
  padding-top: 2rem;
}
.main_btn{
  padding-left: 2rem;
}
.main_text{
  padding-top: 1rem;
  color: white;
}
.main_text a{
  color: white;
}
.nav_text{
  padding-top: 7rem;
}
.nav_text h1, .nav_text p, .nav_text span{
  text-align: center;
  display: block;
}
h1{
  font-size: 80px;
  font-weight: bold;
  color: white;
}
p{
  font-size: 25px;
  padding-top: 1rem;
  color: white;
}
.sub_btn{
  padding-top: 2rem;
  padding-bottom: 7rem;
  text-align: center;
}
</style>