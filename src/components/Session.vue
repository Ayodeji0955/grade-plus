<template>
  <div class="session">
    <div class="container main_content">
      <div class="row justify-content-around">
          <div class="col-md-5">
              <img src='~@/assets/img_3/book_img.jpg' class="img-fluid" >
          </div>
          <div class="col-md-5 sub_content" id="scrollspyHeading2">
            <h2 class="main_text">
              <span>Book a Private</span>
              <span> Training Session</span>
            </h2>
            <p class="card-text sub_text">
                <span>You can also book a one-on-one customized</span>
                <span> intensive coaching with us to upgrade your mental</span>
                <span> capacity on any of our courses or the four courses</span>
                <span> combined for your overall development and</span>
                <span> productivity.</span>
            </p>
            <a href="https://calendly.com/gradeplus-africa/book-a-private-training-session" target="_blank"><button class="btn" type="submit">Book a Session</button></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Session',
  components: {
  }
}
</script>

<style scoped>
.session{
    background-color: white;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
span{
  display: block;
}
.main_content{
  padding-top: 7rem;
  padding-bottom: 4rem;
}
.sub_content{
 padding-top: 5rem;
}
.sub_text {
  font-size: 22px;
  padding-bottom: 4rem;
}
.main_text{
  font-size: 48px;
  padding-bottom: 1rem;
  color:#3974DE;
}
img{
   border-radius: 1rem;
}
.btn{
  border: none;
  color: #3974DE;
  padding: 1rem 4rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin:auto;
}
.btn{
  background-color: #3974DE; 
  color: white; 
  border: 2px solid #3974DE;
  border-radius: 5rem;
  box-shadow: 0px 0px 0px;
}
.btn:hover {
  background-color: white;
  color: #3974DE;
}

/* For small screen devices*/
@media only screen and (max-width:600px) {
.main_text{
  font-size: 25px;
  text-align: center;
}
span{
  display: inline;
}
.sub_text {
  font-size: 18px;
  padding-bottom: .2rem;
  padding-left: .5rem;
}
.btn{
  padding: 0.5rem 1rem;
  font-size: 10px;
  /* align-items: center; */
}
.sub_content a button{
 text-align: center;
}
}
</style>