<template>
  <div class="testimonial">
    <div class="container">
      <h1 class="visible-md">5000+ Students Trained in 2 Years</h1>
      <div class="row row-cols-1 row-cols-md-3 g-3">
          <div class="col">
                <div class="card card_text bg-light mb-3" style="max-width: 30rem;">   
                    <div class="card-body">
                        <p class="card-title main_header"> &#8221; </p>
                        <p class="card-text sub_text">
                            <span>I remember days I stayed up at night</span>
                            <span> to catch up with lengthy notes and at last</span>
                            <span> in exam halls, I ended up forgetting a bulk </span>
                            <span> of what I had read. However, I took one</span>
                            <span> of GradePlus Africa's courses sometime</span>
                            <span> ago and learnt a lot. Those tips have</span>
                            <span> helped improve my retention level.</span>
                        </p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div class="card card_text bg-light mb-3" style="max-width: 30rem;">
                    <div class="card-body">
                        <p class="card-title main_header"> &#8221;</p>
                        <p class="card-text sub_text">
                            <span>My major take away from the Meta-Attention</span>
                            <span> course was how to prevent my mind from</span>
                            <span> wandering aimlessly by gaining mastery of my </span>
                            <span> thoughts. I have also learned how to engage in</span>
                            <span> productive study using amazing techniques. This</span>
                            <span> has been so helpful as I have seen improvement </span>
                            <span> in my academics</span>
                        </p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div class="card card_text bg-light mb-3" style="max-width: 30rem;">
                    <div class="card-body subcard_text">
                        <p class="card-title main_header"> &#8221;</p>
                        <p class="card-text sub_text">
                            <span>The Better Memory course was my first</span>
                            <span> encounter with GradePlus Africa, and I was</span>
                            <span> practically blown away. I regretted not knowing</span>
                            <span> about GradePlus Africa while I was an </span>
                            <span> undergraduate. If I did, I would have definitely</span>
                            <span> graduated with a better grade than I did.</span>
                        </p>
                    </div>
                </div>
          </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-3 justify-content-evenly">
            <div class="col sub_content">
                <img src='~@/assets/img_2/ellipse_1.jpg' style="width: 20%">
                 <h2>Oyindamola Ajala</h2>
                 <p>
                   <span>George Green Baptist College,</span>
                   <span>Ogbomoso.</span>
                </p>
            </div>
            <div class="col sub_content">
                <img src='~@/assets/img_2/ellipse_2.jpg' style="width: 20%">
                 <h2>Joshua Ajibade</h2>
                 <p>
                   <span>Federal University of</span>
                   <span>Technology, Akure.</span>
                </p>
            </div>
            <div class="col sub_content">
                <img src='~@/assets/img_2/ellipse_3.jpg' style="width: 20%">
                 <h2>Adenike Adeodun</h2>
                 <p>
                   <span>National Youth Service </span>
                   <span>Corps (NYSC).</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Testimonial',
  components: {
  
  }
}
</script>

<style scoped>
.testimonial{
   background-color: #3974DE;
   padding-top: 4rem;
   padding-bottom: 4rem;
}
h1{
  text-align: center; 
  padding-bottom: 4rem; 
  font-size: 47.12px;
  color: white;
}
span{
  display: block;
}
.sub_text{
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
}
.main_header{
  font-weight: bold;
  font-size: 50px;
  text-align: center;
}
.card_text{
  color: #3974DE;
  border-radius: 0.5rem;
}
.subcard_text{
  padding-bottom: 2.5rem;
}
.sub_content{
  text-align: center;
}
img{
  border-radius: 5rem;
}
h2{
  font-size: 15px;
  color: white;
  padding-top: 0.5rem;
}
.sub_content p{
  font-size: 12px;
  color: white;
}

/* for small screens */
@media only screen and (max-width:600px) {
h1{
  font-size: 30px;
}
span{
  display: inline;
}
img{
  display: none;
}
/* .sub_content h2, .sub_content p{
  display: none;
} */
}
</style>