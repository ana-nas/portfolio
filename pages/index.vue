<template>
  <div class="grid">
    <section class="about">
      <div class="vertical_text">
        <p> Ana Konovalova
        </p>
        </div>
    	<div class="about-text">
        <h2 class="title">
        I’m a digital product designer with an interest in user research and development.
        </h2>
        <div class="description">
          <p>
          Currently work at <a href="https://www.ozon.ru/">Ozon</a> (Moscow, Russia).
          Mostly developing financial services inside the e-commerce product.
          Passionate about creating senses in my life, so you can read my principles of work.
          I like to try new things and meet new people, so drop me
          an email or say hi on Telegram.
          </p>
          <div class="projects">
            <ul class="list">
              <li><a href="https://www.ozon.ru/"> Ozon Invest </a></li>
              <li><a href="https://www.ozon.ru/"> Credit services </a></li>
              <li><a href="https://www.ozon.ru/"> Ozon Card </a></li>
              <li><a href="https://www.ozon.ru/"> Infographics </a></li>
           </ul>
          </div>
        </div>
			</div>
	  </section>
    <section class="photo">
      <div class=social>
        <ul class="social_list">
            <li><a href="#"><img src="~/assets/img/behance.svg" alt="behance"></a></li>
            <li><a href="#"><img src="~/assets/img/linkedin.svg" alt="linkedin"></a></li>
            <li><a href="#"><img src="~/assets/img/facebook.svg" alt="facebook"></a></li>
            <li><a href="#"><img src="~/assets/img/instagram.svg" alt="instagram"></a></li>


          </ul>
      </div>
      <div class=bg>
        <a href="#"><img src="~/assets/img/rectangle.png"></a>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped>
.grid {
  height: 100%;
  display: grid;
  grid-template-areas: "about photo";
  grid-template-columns: 7fr 5fr;
}

.vertical_text{
  p{
    transform: rotate(-90deg);
    position: absolute;
    left: 10px;
    color: #CD0242;
    font-family: Inconsolata;
  }
}

.about {
  grid-area: about;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 4rem;
  padding-top: 10vh;

  .title {
    color: #162C83;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .description {
    p {
      padding: 0;
      margin: 0;
      margin-bottom: 1rem;
      color:#02090F;
    }
    .list {
      padding-top: 7rem;
      padding-left: 0rem;
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
        list-style-type: none;
        display: inline-block;
      }

      a {
        text-decoration: none;
        color: #8D8C90;
        font-family: Inconsolata;
      }
    }
  }
}
.photo{
  .bg {
    img{
      grid-area: photo;
      height: 100%;
    }
  }
  .social{
    .social_list{
      padding-top: 3rem;
      padding-left: 20rem;
      padding-right: 4rem;
      padding-bottom: 3rem;
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
      list-style-type: none;
      display: inline-block;
      }
    }
  }
}
</style>
