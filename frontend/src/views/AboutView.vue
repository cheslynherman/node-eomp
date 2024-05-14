<template>
  <div class="about text-center">
    <h1 class="animate__animated animate__fadeInRight">Meet The Team</h1>
  </div>
  <div class="container-fluid text-center">
    <img
      src="https://i.ibb.co/8bCsMR4/ches.png"
      alt="Cheslyn Herman"
      class="aboutImg img-fluid"
    />
  </div>
  <div class="container-fluid m-auto" id="bio">
    <p>
      Meet Cheslyn and Antonio, the dynamic duo behind our innovative appliance
      business. With a shared passion for technology and a vision for
      modernizing homes, they embarked on a journey to revolutionize the way we
      shop for appliances. Antonio's deep understanding of cutting-edge gadgets,
      coupled with Cheslyn's strategic acumen, laid the foundation for their
      thriving e-commerce venture. United by their commitment to offering
      top-notch products and unparalleled customer service, they tirelessly
      curated a selection of appliances that seamlessly blend functionality and
      style. What started as a small startup is now a go-to destination for
      those seeking state-of-the-art appliances, all thanks to Cheslyn and Antonio's
      unwavering determination and entrepreneurial spirit.
    </p>
  </div>

  <div class="info">
    <div class="contact-title text-center">
      <h3>Contact Information</h3>
    </div>
    <div class="contact-info text-center">
      <ul>
        <li>Call: 021 935 1234</li>
        <li>Email: appcartel@gmail.com</li>
        <li>Address: 314 Imam Haron Road, Lansdowne, Cape Town, 7780</li>
        <li>Business Hours: 8AM - 4PM</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  margin: 20px;
  color: #eeebdd;
}
.aboutImg {
  height: 50vh;
  border-radius: 20px;
}

.container-fluid {
  width: 60%;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  /* padding: 10px; */
  align-items: center;
}

#bio {
  border-bottom: 2px solid #ce1212;
  color: #eeebdd;
}

ul {
  list-style: none;
}

@media only screen and (max-width: 699px) {
  h1 {
    text-align: center;
  }

  .info {
    margin: auto;
  }

  
}
</style>
