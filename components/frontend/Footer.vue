<template>
  <footer class="main-footer">
    <div class="footer-overly"></div>
    <div class="container">
      <div class="row padding-footer">
        <div class="col-md-3 col-12" data-aos="fade-right" data-aos-duration="1800">
          <div class="footer-logo">
            <nuxt-link to="/" class="logo">
              <img
                :src="footersactive.logo"
                class="w-100"
                :alt="footersactive.adderss"
              />
            </nuxt-link>
            <div class="logo-area">
              <p v-text="footersactive.adderss"></p>
              <ul>
                <li>
                  <span>PABX:{{ footersactive.pabx }}</span>
                </li>
                <li>
                  <span>FAX:{{ footersactive.fax }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div
              v-for="(menu, i) in footermenus"
              :key="'col_' + i"
              class="col-md-3 col-6 footer-col"
              data-aos="fade-up" :data-aos-duration="menu.duration"
            >
              <ul class="navbar-nav">
                <li
                  v-for="(item, key) in menu.links"
                  :key="'menu_' + key"
                  class="nav-item"
                >
                  <nuxt-link class="nav-link" :to="item.link"
                    >{{ item.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center footer-socal-area">
        <div class="col-md-6 ">
          <ul class="nav justify-content-center ">
            <li v-for="(item, i) in socalicons" :key="i" class="nav-item">
              <nuxt-link class="nav-link " to=""><img :src="item.img"></nuxt-link>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
    <section class="footer-bottom">
         <p>© University of Asia Pacific</p>
      </section>




  </footer>
</template>
<script>
import footerlogo from '../../static/images/footerlogo.png'

import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],

  data() {
    return {
      footersactive: {
        logo: footerlogo,
        adderss: '74/A, Green Road, Farmgate Dhaka-1205, Bangladesh ',
        pabx: '+8802-58157091-4,6',
        fax: '+8802-58157097',
      },
      footermenus: [
        {
             duration: 1000,
          links: [
            {
              text: 'Automation(UCAM) Login',
              link: '/about-us',
            },
            {
              text: 'Library OPAC Faculty',
              link: '/library',
            },
            {
              text: 'Members Resources',
              link: '/our-services',
            },
            {
              text: 'Vacancies UAP Webmail',
              link: '/our-clients',
            },
            {
              text: 'Academic Calendar UAP',
              link: '/our-partners',
            },
            {
              text: 'Annual Report: 2018-2019',
              link: '/our-blog',
            },
          ],
        },
        {
             duration: 1200,
          links: [
            {
              text: 'Plagiarism checker',
              link: '/about-us',
            },
            {
              text: 'Papers & Publications',
              link: '/our-team',
            },
            {
              text: 'Call for Paper UAP Media',
              link: '/our-services',
            },
            {
              text: 'Journals IQAC Statistics',
              link: '/our-clients',
            },
            {
              text: 'Faculty and Students',
              link: '/our-partners',
            },
          ],
        },
        {
             duration: 1400,
          links: [
            {
              text: 'UAP News Letter Picture',
              link: '/about-us',
            },
            {
              text: 'Gallery E-Journals',
              link: '/our-team',
            },
            {
              text: 'Access Advertisement',
              link: '/our-services',
            },
            {
              text: 'Tender News & Events',
              link: '/our-clients',
            },
            {
              text: 'Vacancies Notice',
              link: '/our-partners',
            },
          ],
        },
        {
             duration: 1600,
          links: [
            {
              text: 'Plagiarism checker',
              link: '/about-us',
            },
            {
              text: 'Papers & Publications',
              link: '/our-team',
            },
            {
              text: 'Call for Paper UAP Media',
              link: '/our-services',
            },
            {
              text: 'Release Class Schedule',
              link: '/our-clients',
            },
            {
              text: 'Journals IQAC Statistics',
              link: '/our-partners',
            },
            {
              text: 'Faculty and Students',
              link: '/our-blog',
            },
          ],
        },
      ],
      socalicons:[
        {img:require('../../static/images/icon/Path 1.png')},
        {img:require('../../static/images/icon/Path 2.png')},
        {img:require('../../static/images/icon/Path 3.png')},
        {img:require('../../static/images/icon/Path 4.png')},
        {img:require('../../static/images/icon/Path 5.png')},
      ]
    }
  },
}
</script>
