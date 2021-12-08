<template>
  <div class="banner">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-md-6 main_text">
          <h1>About GradePlus Africa</h1>
          <p> 
            <span>GradePlus Africa is a two in one online platform that helps</span>
            <span> you explore career options and discover the path for </span>
            <span> achieving your dreams. The career matching module gives  </span>
            <span> you the ability to analyze your personality, values and interests</span>
            <span> to better understand career paths that are a good fit. </span>
          </p>
          <p class="sub_text"> 
            <span>The cognitive ability module allows you to improve your</span>
            <span> cognitive abilities for success in that career through our</span>
            <span> wholesome, cost-friendly and personalized courses. The </span>
            <span> career matching module is coming soon, meanwhile, you </span>
            <span> can explore our courses for improved cognitive abilities.</span>
          </p>
        </div>
        <div class="col-md-4">
          <img src='~@/assets/Img_1/Banner_img.jpg' alt="HTML5 Icon" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Banner',
  components: {
  
  }
}
</script>

<style scoped>
.banner{
  background-image: url('~@/assets/Img_1/Bg_img.jpg');
  background-position:center;
  background-size:cover;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.main_text h1{
  padding-top: 1rem;
   padding-bottom: 2rem;
   color:#3974DE;
   font-size: 48px;
}
.main_text p{
  font-size: 22px;
}
.sub_text{
  font-size: 22px;
}
span{
  display: block;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width:600px) {
.main_text h1{
  padding-top: .1rem;
  padding-bottom: .1rem;
  padding-left: .5rem;
  font-size: 25px;
  }
.main_text p span{
  font-size: 18px;
}
.main_text p{
  padding-left: .5rem;
}
span{
  display: inline;
}
}
</style>