<script setup lang="ts">
import Header from '@/components/Header.vue';
import Pageheader from '@/components/Pageheader.vue';
import Workprocess from '@/components/Workprocess.vue';
import Footer from '@/components/Footer.vue';  
</script>
<template>
    <Header />
     <!-- header three area start -->
    <!-- bread croumba rea start -->
    <div class="breadcrumb-area-bg bg_image">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bread-crumb-area-inner">
                        <div class="breadcrumb-top">
                            <a href="contact.html#">Home</a> /
                            <a class="active" href="contact.html#">Contact Us</a>
                        </div>
                        <div class="bottom-title">
                            <h1 class="title">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- bread croumba rea end -->
    <!-- header three area end -->


    <div class="contact-info-area-start rts-section-gapTop">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="top">
                        <h2 class="title">Contact Us</h2>
                    </div>
                </div>
            </div>
            <div class="row mt--0 g-5">
                <div class="col-lg-4 col-md-6">
                    <div class="left-contact">
                        <p class="top mb--30">
                            Innovat Interior & Architecture Firm
                        </p>
                        <p class="disc mb--20">
                            An architecture firm is a professional organization that is our specializes in providing
                            architectural services are typically comprised of a team of architects, designers, engineers
                            and other professionals.
                        </p>
                        <a href="contact.html#">Hot Line: +23 656 665 455</a>
                        <div class="rts-social-style-one">
                            <ul>
                                <li>
                                    <a href="contact.html#">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html#">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html#">
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html#">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 pl--50 pl_md--15 pl_sm--15">
                    <div class="contact-info-mid">
                        <p class="top-contact mb--20">Contact Details</p>
                        <div class="single-information mt--30">
                            <span>Address:</span>
                            <p class="address" style="text-decoration: underline;">
                                1058 Helton Ave, Stky <br>
                                Berlin, Germany
                            </p>
                        </div>
                        <div class="single-information">
                            <span>Phone:</span>
                            <a href="Tel:123-456-7890">
                                +23 5825-32535
                            </a>
                        </div>
                        <div class="single-information">
                            <span>Mail:</span>
                            <a href="mailto:webmaster@example.com">
                                inno@gmail.com
                            </a>
                        </div>
                    </div>
                    <div class="contact-info-mid mt--40">
                        <p class="top-contact mb--20">Contact Details Two</p>
                        <div class="single-information mt--30">
                            <span>Address:</span>
                            <p class="address" style="text-decoration: underline;">
                                1062 Helton Ave, Stky <br>
                                Berlin, Germany
                            </p>
                        </div>
                        <div class="single-information">
                            <span>Phone:</span>
                            <a href="Tel:123-456-7890">
                                +536-825-32535
                            </a>
                        </div>
                        <div class="single-information">
                            <span>Mail:</span>
                            <a href="mailto:webmaster@example.com">
                                innovat@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <form class="contact-form-conatct-page" method="post" action="https://themewant.com/products/html/innovat/mailer.php" id="contact-form">
                        <p class="top-contact mb--20">Contac Form</p>
                        <input type="text" name="name" id="name" placeholder="Your Name" required>
                        <input type="email" name="email" id="email" placeholder="Your Email" required>
                        <input type="tel" name="phone" id="phone" placeholder="Your Number" required>
                        <textarea name="message" id="message" placeholder="Your message"></textarea>
                        <div id="form-messages"></div>
                        <button class="rts-btn btn-primary mt--30" type="submit">Send Now</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="container mt--120 mb--120">
            <div class="row">
                <div class="col-lg-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8254.021045171208!2d-95.11818240981121!3d29.563301798292883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sbd!4v1697535735266!5m2!1sen!2sbd" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
    <Footer/>    
</template>