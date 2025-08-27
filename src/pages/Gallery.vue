<script setup lang="ts">
import Header from '@/components/Header.vue';
import Pageheader from '@/components/Pageheader.vue';
import Footer from '@/components/Footer.vue';

import { useHead } from '@vueuse/head';

useHead({
  title: 'Gallery | ApexWall Project Showcase',
  meta: [
    {
      name: 'description',
      content: 'Explore our gallery of completed projects. See the quality craftsmanship and stunning transformations we\'ve delivered for homes and businesses in Peterborough.',
    },
  ],
});
</script>

<template>
  <Header />
  <Pageheader title="Gallery" />
  <div class="rts-project-area rts-section-gap">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="single-product-one">
            <span>01</span>
            <a class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239114/WhatsApp_Image_2025-08-03_at_17.37.51_4_xyp3xv.jpg" alt="product">
            </a>
            <div class="inenr-content-absolute">
              <a>
                <h3 class="title">Kitchen Renovation</h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="single-product-one">
            <span>02</span>
            <a class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239127/WhatsApp_Image_2025-08-03_at_17.37.52_h52jap.jpg" alt="product">
            </a>
            <div class="inenr-content-absolute">
              <a>
                <h3 class="title">Toilet Repair & Upgrade</h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="single-product-one">
            <span>03</span>
            <a class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239114/WhatsApp_Image_2025-08-03_at_17.37.52_2_dielwt.jpg" alt="product">
            </a>
            <div class="inenr-content-absolute">
              <a>
                <h3 class="title">Room Remodeling</h3>
              </a>
              <span class="category">Interior Design</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="single-product-one">
            <span>04</span>
            <a class="thumbnail">
              <img src="https://res.cloudinary.com/dz5vmj911/image/upload/v1754239113/WhatsApp_Image_2025-08-03_at_17.37.51_2_undtoo.jpg" alt="product">
            </a>
            <div class="inenr-content-absolute">
              <a>
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