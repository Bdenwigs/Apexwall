<template>
  <Header />

   <!-- bread croumba rea start -->
   <div class="breadcrumb-area-bg bg_image">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bread-crumb-area-inner">
                        <div class="breadcrumb-top">
                            <router-link to="/">Home</router-link> /
                            <router-link class="active" to="/portfolio">Portfolio</router-link>  
                        </div>
                        <div class="bottom-title">
                            <h1 class="title">Portfolio </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- bread croumba rea end -->

  <div class="rts-project-area rts-section-gap bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-area-product-one">
            <div class="title-style-left">
              <div class="pre-title-area">
                <img src="/assets/images/about/02.png" alt="about" />
                <span class="pre-title">Our Project</span>
              </div>
              <h2 class="title">
                Discover Our Stunning <br>
                Transformations
              </h2>
            </div>
            <p class="disc">
                At Apex Wall, every project is a canvas for creativity and craftsmanship. From elegant home refurbishments to vibrant commercial spaces, our portfolio showcases the artistry and precision we bring to every transformation in Peterborough. Explore our work and see how we turn visions into reality.
            </p>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>01</span>
            <a href="" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239127/WhatsApp_Image_2025-08-03_at_17.37.52_h52jap.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="">
                <h3 class="title">Toilet Repair & Upgrade</h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>02</span>
            <a href="" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239114/WhatsApp_Image_2025-08-03_at_17.37.51_4_xyp3xv.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="">
                <h3 class="title">Kitchen Renovation</h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>03</span>
            <a href="" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239114/WhatsApp_Image_2025-08-03_at_17.37.52_2_dielwt.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="">
                <h3 class="title">Room Remodeling </h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>04</span>
            <a href="" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239113/WhatsApp_Image_2025-08-03_at_17.37.51_2_undtoo.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="">
                <h3 class="title">General Building Work</h3>
              </a>
              <span class="category"></span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped></style>