export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('./pages/Services.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('./pages/Portfolio.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./pages/Contact.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('./pages/Gallery.vue')
  }
]