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
          <h2>Ozon.Invest</h2>
          <p>Text about my projects and technologies I'm using here.</p>
          <p>Here is a <a href="#">link</a> to the project I am working on.</p>
          <img src="/assets/img/ozon.jpg" alt="ozon">
        </template>

        <!-- credit -->
        <template slot="tab-switcher-credit">
          <p class="switcher-item">credit services</p>
        </template>
        <template slot="tab-details-credit">
          <h2>Credit services</h2>
          <p>Text about my projects and technologies I'm using here.</p>
          <img src="/assets/img/credit.jpg" alt="credit">
        </template>

        <!-- apps -->
        <template slot="tab-switcher-apps">
          <p class="switcher-item">apps</p>
        </template>
        <template slot="tab-details-apps">
          <h2>Apps</h2>
          <p>Text about my projects and technologies I'm using here.</p>
          <img src="/assets/img/apps.jpg" alt="apps">
        </template>
      </Tabs>
    </section>
  </div>
</template>


<script>
import Tabs from '/components/Tabs.vue'
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

<style>


.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

