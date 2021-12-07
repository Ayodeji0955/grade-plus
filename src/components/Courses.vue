<template>
  <div class="course">
    <div class="container main_content">
      <h1 id="scrollspyHeading1"> Our Courses </h1>
      <div class="container">
          <div class="row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                <div class="card course_content" style="width: 18rem;">
                  <img src="~@/assets/img_3/course_img1.jpg" class="card-img-top img-fluid" alt="/">
                  <div class="main_text">
                    <h5 class="card-title">Better Memory</h5>
                    <p class="sub_text memory_text">
                      <span>Discover proven techniques that will make</span>
                      <span>you capable of recalling things easily. You </span>
                      <span>will learn how to remember more, anytime</span>
                      <span>and any day.</span>
                    </p>
                    <div class="row justify-content-center btn_text">
                        <div class="col-6">
                           <p class="card_link green">Free Now</p>
                        </div>
                        <div class="col-6">
                           <router-link to="/Memory"><button class="btn" type="submit">Enrol Now</button></router-link>
                        </div>
                      </div> 
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card course_content" style="width: 18rem;">
                  <img src="~@/assets/img_3/course_img2.jpg" class="card-img-top" alt="/">
                  <div class="main_text">
                    <h5 class="card-title">Meta-Attention</h5>
                    <p class="sub_text meta_text">
                      <span>Find peace, improve attention, reduce</span>
                      <span>stress and anxiety in the midst of</span>
                      <span>pressures. This course is designed to</span>
                      <span>help remain motivated.</span>
                    </p>
                    <div class="row justify-content-center btn_text">
                        <div class="col-6">
                           <p class="card_link">NGN 2,000</p>
                        </div>
                        <div class="col-6">
                           <router-link to="/Attention"><button class="btn" type="submit">Enrol Now</button></router-link>
                        </div>
                      </div> 
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card course_content" style="width: 18rem;">
                  <img src="~@/assets/img_3/course_img3.jpg" class="card-img-top" alt="/">
                  <div class="main_text">
                    <h5 class="card-title">Speed Reading</h5>
                    <p class="sub_text">
                      <span>Don't lag behind in the 21st-century</span>
                      <span>space of numerous contents by being a</span>
                      <span>slow reader. Master the right techniques</span>
                      <span>to speed-read without sacrificing</span>
                      <span>comprehension.</span>
                    </p>
                    <div class="row justify-content-center btn_text">
                        <div class="col-6">
                           <p class="card_link">NGN 2,000</p>
                        </div>
                        <div class="col-6">
                           <router-link to="/speed"><button class="btn" type="submit">Enrol Now</button></router-link>
                        </div>
                      </div> 
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card course_content" style="width: 18rem;">
                  <img src="~@/assets/img_3/course_img4.jpg" class="card-img-top" alt="/">
                  <div class="main_text">
                    <h5 class="card-title">Purposeful Living</h5>
                    <p class="sub_text">
                      <span>Find the intersection between career</span>
                      <span>choice, fulfilment and wealth, and</span>
                      <span>discover the best paths for achieving</span>
                      <span>your dreams. This course will help you</span>
                      <span>learn to live a more fulfilling life.</span>
                    </p>
                      <div class="row justify-content-center btn_text">
                        <div class="col-6">
                           <p class="card_link">NGN 2,000</p>
                        </div>
                        <div class="col-6">
                           <router-link to="/Purpose"><button class="btn" type="submit">Enrol Now</button></router-link>
                        </div>
                      </div>   
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'course',
  components: {
  
  }
}
</script>

<style scoped>
.course{
  background-color: #F6F9FE;
  padding-top: 3rem;
  padding-bottom: 5rem;
}
h1{
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
  font-size: 48px;
  color:#3974DE;
}
.btn {
  border: none;
  color: #3974DE;
  padding: 0.5rem 1rem;
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
  background-color: #3974DE; 
  color: white; 
  border: 2px solid #3974DE;
  border-radius: 5rem;
}
.btn:hover {
  background-color: white;
  color: #3974DE;
}
h5{
  font-weight: bold;
  font-size: 24px;
}
span{
  display: block;
}
.sub_text{
  font-size: 13px;
}
.main_text{
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1rem;
}
.course_content{
  border-radius: 1.5rem;
  box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.btn_text{
  padding-bottom: 2rem;
}
.btn_text .green{
  color: #21cbb0;
  font-size: 15px;
}
.memory_text{
  padding-bottom: 1rem;
}
.meta_text{
  padding-bottom: 1rem;
}
.card_link{
  padding-top: 0.5rem;
  color:#3974DE;
  font-weight: bold;
}

/* Extra small devices (phones, 600px and down) */
@media only screen  and (max-width:600px) {
h1{
  font-size: 25px;
  padding-top: .1rem;
}
.course_content{
  margin-left: .9rem;
}
}
</style>