<template>
  <Header />

   <!-- bread croumb area start -->
   <div class="breadcrumb-area-bg bg_image overlay" style="background-image: url(https://res.cloudinary.com/dz5vmj911/image/upload/v1754208003/set-designer-work-indoors_metp7h.jpg);">
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
      <!-- <div class="row g-5 mt--30">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>Toilet Repair & Upgrade</span>
            <a href="#" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239127/WhatsApp_Image_2025-08-03_at_17.37.52_h52jap.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="#">
                <h3 class="title">Toilet Repair & Upgrade</h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>Kitchen Renovation</span>
            <a href="#" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239114/WhatsApp_Image_2025-08-03_at_17.37.51_4_xyp3xv.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="#">
                <h3 class="title">Kitchen Renovation</h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>Room Remodeling</span>
            <a href="#" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239114/WhatsApp_Image_2025-08-03_at_17.37.52_2_dielwt.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="#">
                <h3 class="title">Room Remodeling </h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="single-product-one">
            <span>General Building Work</span>
            <a href="#" class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239113/WhatsApp_Image_2025-08-03_at_17.37.51_2_undtoo.jpg" alt="product" />
            </a>
            <div class="inenr-content-absolute">
              <a href="#">
                <h3 class="title">General Building Work</h3>
              </a>
              <span class="category"></span>
            </div>
          </div>
        </div>
        
      </div> -->


      <div class="container-fluid mt-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 pt-md-5">
                  <h3 class="text-center">Toilet Repair & Upgrade</h3>
                    <div class="row">
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092795/toilet-before_dposzn.jpg" alt="before toilet refurbishment" class="img-fluid">
                            <p class="text-center mt-2">Before</p>
                        </div>
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092793/toilet-after_rmpcdg.jpg" alt="toilet refurbishment" class="img-fluid">
                            <p class="text-center mt-2">After</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pt-md-5">
                  <h3 class="text-center">Wall Papering & Remodelling</h3>
                    <div class="row">
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092795/wallp-before_rymcis.jpg" alt="Wall Papering Before" class="img-fluid">
                            <p class="text-center mt-2">Before</p>
                        </div>
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092787/room-finishing_nmhuce.jpg" alt="wall papering after" class="img-fluid">
                            <p class="text-center mt-2">After</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pt-md-5">
                  <h3 class="text-center">Affordable Kitchen Makeover</h3>
                    <div class="row">
                        <div class="col-6 ">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092781/officek-before_a4ehjo.jpg" alt="before kitchen makeover" class="img-fluid">
                            <p class="text-center mt-2">Before</p>
                        </div>
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092747/kitchen-after_b9g7r2.jpg" alt="aftrer kitchen makeover" class="img-fluid">
                            <p class="text-center mt-2">After</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pt-md-5">
                  <h3 class="text-center">Office Revamp</h3>
                    <div class="row">
                        <div class="col-6 ">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756094829/offre_uw98rq.jpg" alt="before office revamp" class="img-fluid">
                            <p class="text-center mt-2">Before</p>
                        </div>
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092786/office-after_gulk9w.jpg" alt="after office revamp" class="img-fluid">
                            <p class="text-center mt-2">After</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pt-md-5">
                  <h3 class="text-center">Painting and Decoration</h3>
                    <div class="row">
                        <div class="col-6 ">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092734/IMG-20250824-WA0009_yte4ok.jpg" alt="before painting and decoration" class="img-fluid">
                            <p class="text-center mt-2">Before</p>
                        </div>
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092739/IMG-20250824-WA0010_xkkxcg.jpg" alt="after painting and decoration" class="img-fluid">
                            <p class="text-center mt-2">After</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pt-md-5">
                  <h3 class="text-center">Mould Treatment</h3>
                    <div class="row">
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756092757/mod-before_esa9is.jpg" alt="before mould treatment" class="img-fluid">
                            <p class="text-center mt-2">Before</p>
                        </div>
                        <div class="col-6">
                            <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1756094256/mouldafter_anfbv9.jpg" alt="after mould treatment" class="img-fluid">
                            <p class="text-center mt-2">After</p>
                        </div>
                    </div>
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

import { useHead } from "@vueuse/head";

export default {
  components: {
    Header,
    Footer,
    MobileMenu,
  },
  setup() {
    useHead({
      title: 'Portfolio | ApexWall\'s Finest Work',
      meta: [
        {
          name: 'description',
          content: 'Browse the portfolio of ApexWall. A showcase of our finest work in home refurbishment, interior design, and professional painting services in Peterborough.',
        },
      ],
    });
  },
};
</script>
<style lang="scss" scoped></style>