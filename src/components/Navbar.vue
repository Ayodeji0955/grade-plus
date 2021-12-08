<template>
  <div class="container nav_content">
    <div class="navbar-nav navbar-expand-lg">
      <nav class="navbar">
          <a class="navbar-brand" href="#">
              <router-link to="/#"><img src='~@/assets/Img_1/favicon.png' alt="HTML5 Icon" width="150px"></router-link>
          </a>
          <ul class="nav navbar-nav">
              <li class="nav-item main_text">
                <a class="/" href="#scrollspyHeading2">Book a Session</a>
              </li>
              <li class="nav-item main_btn">
                <a class="nav-link" href="#scrollspyHeading1"><button class="btn_main" type="submit">Take a Course</button></a>
              </li>    
          </ul>
      </nav>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Navbar',
  components: {
  
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
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
.nav_content{
  padding-top: 0.1rem;
}
.main_btn{
  padding-left: 2rem;
}
.main_text{
  padding-top: 1.5rem;
  color: white;
}
.main_text a{
  color: white;
  text-decoration: none;
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


/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
.main_text{
  font-size: 16px;
} 
img{
  width: 120px;
  padding-top: .5rem;
}
.main_btn{
  padding-left: 0rem;
}
.main_btn .btn_main{
  padding: 0.5rem 1rem;
  font-size: 10px;
  display: none;
}
}
</style>
