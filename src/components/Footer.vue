<template>
    <div class="footer">
        <div class="footer_content">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="favicon">
                            <router-link to="/#"><img src='~@/assets/Img_1/favicon.png' alt="HTML5 Icon" width="150px"></router-link>
                        </div>
                        <div class="number">
                            <p>+2347039784638, +2348111024463</p>
                            <p>hello@gradeplusafrica.com</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="address">
                            <h1>Address</h1>
                        <div class="sub_address">
                            <p>
                                <span>50, Ogbomoso-Ilorin Road,</span>
                                <span>General Area, Ogbomoso,</span>
                                <span> Oyo State</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="subscribe">
                            <h1>Subscribe to our Newsletter</h1>   
                        </div>
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="yourname@xyx.comxyz">
                          <button class="btn_input btn-light" type="button"><a href="https://forms.gle/LAPNbJzaVFWQgshn9" target="_blank">Send</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="container">
                <hr>
                <div class="row sub_content justify-content-end">
                    <div class="col-md-4">
                        <div class="social">
                          <a href="https://linkedin.com/gradeplusafrica" class="linkedin" target="_blank"><img src='~@/assets/img_2/Linkedin.png' width='25px'></a>
                          <a href="https://facebook.com/gradeplusafrica" class="facebook" target="_blank"><img src='~@/assets/img_2/facebook.png' width='25px'></a>
                          <a href="https://twitter.com/gradeplusafrica" class="twitter" target="_blank"><img src='~@/assets/img_2/Twitter.png' width='25px'></a>
                        </div>
                    </div>
                    <div class="col-md-4">
                       <div class="qeola_lab"><p>A product of eLab</p></div>
                    </div>
                    <div class="col-md-4">
                       <div class="qeola_copy"><p>© 2021 GradePlus Africa. All rights reserved</p></div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

export default {
  name: 'About',
  components: {
  
  }
}
</script>

<style scoped>
.footer{
  background-color: #030A15;
}
.footer_content{
  padding-top:10%;
  padding-bottom: 3rem;
} 
.footer_content h1{
  font-size:17px;
  color:white; 
  font-weight:bold;
}
.footer_content p{
  font-size:13px;
  color:white;  
}
input[type=text] {
  background-color: #030A15;
  width:20%;
  padding:  16px 15px;
  margin: 2px 0;
  box-sizing: border-box;
  border: none;
  color:white;
  border: 2px solid white;
  border-radius:40px;
  box-shadow: 0px 0px 0px;
}
.btn_input{
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  padding-left:1rem;
  padding-right:1rem;
  border: 2px solid white;
  font-weight: bold;
  border-radius:30px;
  box-shadow: 0px 0px 0px;
} 
a:link{
  text-decoration: none;
}
.sub_address span{
  display: block;
}
.favicon{
  padding-bottom: 2rem; 
}
.number p, .sub_address p {
  font-size:15px;
}
.address h1{
  font-size: 15px;
  padding-bottom: 2rem;
  Font-weight: bold;
}
.subscribe h1{
  font-size:15px;
  Font-weight: bold;
  padding-bottom: 1rem;
}
.qeola_lab p{ 
  color: #FFFFFFB2;
  text-align: center;
}
.qeola_copy p{ 
  color: #FFFFFFB2;
  text-align: right;
}
.footer hr{
  border: 1px solid white;
  width:100%;
  align-self:center;
  margin-bottom: 2rem;
}
.sub_content{
  padding-bottom: 2rem;
  padding-top: 3rem;
}
.twitter, .facebook{
  padding-left:1rem;
}



/* Extra small devices (phones, 600px and down) */
@media screen and (max-width:600px) {
.qeola_lab{
  padding-top: 2rem;
  text-align: center;
}
.social{
  text-align: center;
}
.qeola_copy{
  text-align: center;
  padding-left: .5rem;
}
}

</style>