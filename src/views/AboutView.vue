!
<template>
  <div class="container">
    <div class="introduce__top--visual">
      <h2>About Me</h2>
      <p>I'am a Publisher</p>
    </div>
    <div class="page__title">
      <h2>About Me</h2>
    </div>
    <div class="page__content">
      <div class="introduce__wrap">
          <h3>최선을 다하기 위해 노력하는</h3>
          <p class="text1"><strong>퍼블리셔</strong> 입니다.</p>
          <p class="text2">HTML,CSS,JAVASCRIPT</p>
          <p class="text3">...Vue.js를 포함한 Framework</p>
          <p class="text4">...Webpack,Git,Bem</p>
          <p class="text5">Web Accessibility and</p>
          <p class="text6">Adobe Experience Manager...</p>          
      </div>
      <div class="introduce__full">

      </div>
      <div class="instroduce__map">
        <h3>아래 어딘가에 살고 있다~</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6959.679110578305!2d126.92943332494198!3d37.35938421677643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b67b691680c27%3A0xb477a255b914adf3!2z6rK96riw64-EIOq1sO2PrOyLnA!5e0!3m2!1sko!2skr!4v1672625252202!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .container {width:100%;max-width: 100%;}
  .introduce__top--visual {
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height:250px;
    background-color: bisque;
  }
  .introduce__wrap {
    text-align: center;
    font-size: 17px;
    font-weight: 300;
    color: #474747;
    padding-top: 20px;
    p {margin-bottom: 0;
      line-height: 170%;
    }
    h3 {font-size:15px}
    .text1 {
      font-size: 22px;
      margin:5px 0 10px;
    }
    }
    .text2 {
      font-size: 28px;
      margin:5px 0 10px;
    }
    .text3 {
      font-size: 25px;
      margin:5px 0 10px;
    }    
    .text4 {
      font-size: 21px;
      margin:5px 0 10px;
    }      
    .text5 {
      font-size: 16px;
      margin:5px 0 10px;
    }   
    .text6 {
      font-size: 13px;
      margin:5px 0 10px;
    }       
    .instroduce__map {
      text-align: center;
    font-size: 17px;
    font-weight: 300;
    color: #474747;
    margin-top: 30px;
      iframe {
        margin-top: 20px;
      }
    }   
    .introduce__full {
      width: 100%;
      height:200px;
      background-color: #474747;
      margin: 80px 0;
    }
</style>
