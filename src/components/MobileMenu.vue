 <template>
  <div>
    <!-- mobile menu area start -->
    <div class="mobile-menu-main">
      <nav class="nav-main mainmenu-nav mt--30">
        <ul class="mainmenu metismenu" id="mobile-menu-active">
          <li>
            <a href="#" @click.prevent="navigate('/')" class="main">Home</a>
          </li>
          <li>
            <a href="#" @click.prevent="navigate('/about')" class="main">About</a>
          </li>
          <li>
            <a href="#" @click.prevent="navigate('/services')" class="main">Services</a>
          </li>
          <li>
            <a href="#" @click.prevent="navigate('/portfolio')" class="main">Portfolio</a>
          </li>
          <li>
            <a href="#" @click.prevent="navigate('/contact')" class="main">Contact</a>
          </li>
        </ul>
      </nav>

      <div class="rts-social-style-one pl--20 mt--100">
        <ul>
          <li>
            <a href="/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- mobile menu area end -->
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>
