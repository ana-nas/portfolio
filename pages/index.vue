<template>
  <div class="grid">
    <section class="about">
      <div class="about-text">
        <h2 class="title">
          Ana Konovalova
        </h2>
        <div class="description">
          <p>
            I’m a digital product designer, working in e-commerce project
            <a href="https://www.ozon.ru/">Ozon.ru</a> and developing financial services
            <a href="https://invest.ozon.ru/">Ozon.Invest</a>,
            <a href="https://card.ozon.ru">Ozon.Wallet</a>,
            payments and credit systems.
            </p>
            <p>
            I trying to create senses in my life,
            so you can read my principles of work.
            </p>
        </div>
      </div>
    </section>
    <section class=portfolio>
      <Tabs
        :initial="'ozon'"
        :tabs="tabs"
      >
        <!-- ozon -->
        <template slot="tab-switcher-ozon">
          <p class="switcher-item">ozon</p>
        </template>
        <template slot="tab-details-ozon">
          <h1>Ozon.Invest</h1>
          <p>Text about my projects and technologies I'm using here.</p>
          <p>Here is a <a href="#">link</a> to the project I am working on.</p>
          <img src="/assets/img/ozon.jpg" alt="ozon">
        </template>

        <!-- credit -->
        <template slot="tab-switcher-credit">
          <p class="switcher-item">credit services</p>
        </template>
        <template slot="tab-details-credit">
          <h1>Credit services</h1>
          <p>Text about my projects and technologies I'm using here.</p>
          <img src="/assets/img/credit.jpg" alt="credit">
        </template>

        <!-- apps -->
        <template slot="tab-switcher-apps">
          <p class="switcher-item">apps</p>
        </template>
        <template slot="tab-details-apps">
          <h1>Apps</h1>
          <p>Text about my projects and technologies I'm using here.</p>
          <img src="/assets/img/apps.jpg" alt="apps">
        </template>
      </Tabs>
    </section>
    <section class=footer>
      <div class=contacts>
        <p>I like to try new things and meet new people,
          so drop me an email or say hi on Telegram.
        </p>
      </div>
      <div class="social">
          <ul class="list">
            <li><a href="#"><img src="~/assets/img/facebook.svg" alt="facebook"></a></li>
            <li><a href="#"><img src="~/assets/img/instagram.svg" alt="instagram"></a></li>
            <li><a href="#"><img src="~/assets/img/linkedin.svg" alt="linkedin"></a></li>
            <li><a href="#"><img src="~/assets/img/behance.svg" alt="behance"></a></li>
          </ul>
      </div>
    </section>
  </div>
</template>


<script>
import Tabs from '~/components/Tabs.vue'
export default {
  components: {
    Tabs
  },
  data() {
    return {
      	tabs: [
          'ozon',
          'credit',
          'apps',
        ],
    };
  },
}
</script>

<style lang="scss" scoped>
.grid {
  height: 100%;
  display: grid;
  grid-template-areas: "about portfolio"
                       "footer footer";
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 2fr 1fr;
  background-color: #1C1C1C;
    &-grid-footer {
      display: grid;
      grid-template-areas: "footer social";
      grid-template-columns: 3fr 4fr;
    }
    &-grid-social {
      display: grid;
      grid-template-areas: "empty list";
      grid-template-columns: 4fr 4fr;
      background-color: $c-bg;
  }
}

.about {
  grid-area: about;
  border-right: 2px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 4rem;
  padding-top: 20vh;
  &-text,
  &-social {
    width: 360px;
    height: 300px;
  }
  &-social {
    width: 360px;
    height: auto;
    margin-bottom: 3rem;
  }
  .title {
    color: #fff;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .description {
    p {
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
      color:#fff;
    }
  }
}
.portfolio {
  grid-area: portfolio;
  height: 100%;
    p {
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
      color:#fff;
    }
    h1 {
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
      color:#fff;
    }
}

.footer {
  grid-area: footer;
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #fff;
  padding:0 4rem;
  position: relative;
  color: #fff;

  .contacts {
  }
  .list {
    padding-right: 4rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      border-left: 2px solid #fff;
      border-right: 2px solid #fff;
      list-style-type: none;
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }
}


</style>
