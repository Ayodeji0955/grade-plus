<template>
  <div>
    <div class="attention">
        <div class="container main_content">
            <Navbar />
            <div class="row banner_text align-content-center position-relative">
                <div class="col-12 header">
                  <h1>Meta-Attention</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container info">
      <div class="row info_header">
        <div class="col-md-6">
          <h2> Introduction</h2>
        </div>
        <div class="col-md-6">
          <h3> NGN 2,000 </h3>
        </div>
      </div>
      <div class="row justify-content-around info_text">
        <div class="col-md-9">
          <p> 
            <span>Find peace, improve attention, reduce stress and anxiety in the midst</span>
            <span>of pressures. This course carefully designed to help you be better</span>
            <span>equipped to manage stress, focus and remain motivated.</span>
          </p>
          <h4>What you will learn:</h4>
        </div>
        <div class="col-md-9 sub_text">
          <ul>
            <li>The importance of mindfulness and why you should embrace it.</li>
            <li>How to quieten your mind for academic and career excellence.</li>
            <li>How to be fully present and attentive.</li>
            <li>How to increase your attention span for better academic and life results.</li>
            <li> Improve your ability to concentrate and actively listen</li>
          </ul>
          <h5>Duration</h5>
          <p>1 week to complete</p>
        </div>
      </div>
      <div class="row info_btn justify-content-center">
        <div class="col-md-3">
           <a href="https://bit.ly/Meta-AttentionBrochure" target="_blank"><button class="main_btn" type="submit">Download Brochure</button></a>
        </div>
        <div class="col-md-3 sub_btn">
          <a href="https://forms.gle/QjuraGGwakcJdcLs7" target="_blank"><button class="btn" type="submit">Enrol Now</button></a>
        </div>
      </div>
    </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default {
  name: 'Attention',
  components: {
    Navbar,
    Footer
  },
   mounted () {
  window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
@media all and (max-width:600px) {
  
}
.attention{
  background-image: url('~@/assets/img_4/group_1.jpg');
  background-position:center;
  background-size:cover;
  padding-bottom: 4rem;
}
.main_content{
  padding-top: 0.5rem;
}
.banner_text{
  padding-top:15%;
  padding-bottom:15%;
}
.header h1{
  text-align:center;
  color:white;
  font-size: 65px;
  font-weight: bold;
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.info{
  background: #FFFFFF;
  margin: -10rem auto;
  margin-bottom: 5rem;
  padding-bottom: 2rem;
  width: 60%;
  border-radius: 1rem;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.info_header{
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
  font-size: 28px;
  color:#3974DE;
}
h4{
  padding-top:2rem;
  color:#3974DE;
}
h5{
  padding-top:2rem;
  color:#3974DE;
}
.info_text{
  font-size: 18px;
}
.sub_text{
  font-size: 18px;
}
span{
  display: block;
}
.info_btn{
  padding-top: 2rem;
  padding-bottom: 4rem;
}
.main_btn{
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
.btn {
  border: none;
  color: #3974DE;
  padding: 1rem 4rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin:auto;
}
.main_btn, .btn {
  background-color: #3974DE; 
  color: white; 
  border: 2px solid #3974DE;
  border-radius: 5rem;
}
.main_btn{
  background-color: white;
  color: #3974DE;
}
.btn:hover {
  background-color: white;
  color: #3974DE;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width:600px) {
.info{
  width: 100%;
  margin: 0rem;
}
.header h1{
  font-size: 30px;
}
h3{
  display: none;
}
span{
  display: inline;
}
.main_btn{
  padding: 1rem 1rem;
  font-size: 10px;
}
.btn{
  padding: 1rem 1rem;
}
.row .info_btn{
  width: 50%;
}
}

</style>