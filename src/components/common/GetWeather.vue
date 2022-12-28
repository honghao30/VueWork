<template>
  <div
    class="weather__wrap"
    v-bind:style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="weather__infor--wrap">
      <div class="welcom-message">
        오늘은 <strong>{{ todayWeather }} </strong>입니다.
      </div>
      <div class="weather-detail">
        <div class="location-info">
          { 서울특별시 }<br />
          {{ todayWeek }}요일 {{ todayNowtime }}<br />
          일출 : {{ sunriseTimeIs }} 일몰 : {{ sunsetTimeIs }}
        </div>
        <div class="weather-icon">
          <img :src="WeatherIcon" alt="" />
        </div>
        <div class="weather-info">
          <p>온도 : {{ todaytemp }} °C</p>
          <p>습도: {{ todayhumidity }}%,풍속: {{ todaywind }}m/s</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

import weatherDescKo from '@/api/weaTherKo';
const todayWeather = ref('');
const todaytemp = ref('');
const todaywind = ref('');
const todayhumidity = ref('');
const todayNowtime = ref('');
const todayWeek = ref('');
const sunriseTimeIs = ref('');
const sunsetTimeIs = ref('');
const WeatherIcon = ref('');
const backgroundImage = ref('');

const fetch_weather = () => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=13b55b2bf5bf4b64df063ddbfe1f3c5c&units=metric`,
    )
    .then(res => {
      console.log(res.data);
      const baseUrl =
        'http://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png';
      WeatherIcon.value = baseUrl;
      console.log(weatherDescKo[res.data.weather[0].id]);

      todayWeather.value = weatherDescKo[res.data.weather[0].id];
      todaytemp.value = res.data.main.temp;
      todaywind.value = res.data.wind.speed;
      todayhumidity.value = res.data.main.humidity;

      WeatherIcon.value = baseUrl;
      let ghours =
        new Date().getHours() < 10
          ? '0' + new Date().getHours()
          : new Date().getHours();
      let sunrise = res.data.sys.sunrise;
      let sunriseDate = new Date(sunrise * 1000);
      let morningHuous =
        sunriseDate.getHours() < 10
          ? '0' + sunriseDate.getHours()
          : sunriseDate.getHours();
      let morningMinutes =
        sunriseDate.getMinutes() < 10
          ? '0' + sunriseDate.getMinutes()
          : sunriseDate.getMinutes();
      let sunriseTime = morningHuous + '시 ' + morningMinutes + '분';
      sunriseTimeIs.value = sunriseTime;

      let sunset = res.data.sys.sunset;
      let sunsetDate = new Date(sunset * 1000);
      let sunsetHuous =
        sunsetDate.getHours() < 10
          ? '0' + sunsetDate.getHours()
          : sunsetDate.getHours();
      let sunsetMinutes =
        sunsetDate.getMinutes() < 10
          ? '0' + sunsetDate.getMinutes()
          : sunsetDate.getMinutes();
      let sunsetTime = sunsetHuous + '시 ' + sunsetMinutes + '분';
      sunsetTimeIs.value = sunsetTime;
      console.log(sunriseTime);

      const Bgbase = `https://raw.githubusercontent.com/honghao30/VueWork/master/public/images/`;
      console.log('체크', ghours, Bgbase, morningHuous, morningHuous + 1);
      if (ghours == morningHuous) {
        let img1 = Bgbase + 'morning.jpg';
        console.log(img1, Bgbase);
        backgroundImage.value = img1;
      } else if (ghours > morningHuous && ghours < sunsetHuous) {
        let img2 = Bgbase + 'clearday.jpg';
        console.log(img2);
        backgroundImage.value = img2;
      } else if (ghours == sunsetHuous) {
        let img3 = Bgbase + 'sunset.jpg';
        console.log(img3);
        backgroundImage.value = img3;
      } else {
        let img4 = Bgbase + 'night.jpg';
        console.log(img4);
        backgroundImage.value = img4;
      }
    })
    .catch(err => {
      console.log(err.message);
    });
};
fetch_weather();

const getTodayData = () => {
  let year = new Date().getFullYear();
  let month =
    new Date().getMonth() + 1 < 10
      ? '0' + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  let date =
    new Date().getDate() < 10
      ? '0' + new Date().getDate()
      : new Date().getDate();
  let hh =
    new Date().getHours() < 10
      ? '0' + new Date().getHours()
      : new Date().getHours();
  let mm =
    new Date().getMinutes() < 10
      ? '0' + new Date().getMinutes()
      : new Date().getMinutes();
  let ss =
    new Date().getSeconds() < 10
      ? '0' + new Date().getSeconds()
      : new Date().getSeconds();
  let nowtime = year + '년 ' + month + '월 ' + date + '일  ' + hh + '시 '; //+ mm + '분' + ss + '초';

  todayNowtime.value = nowtime;
};
getTodayData();

const getDayOfWeek = () => {
  //ex) getDayOfWeek('2022-06-13')
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date().getDay()];
  todayWeek.value = dayOfWeek;
  console.log(dayOfWeek);
};
getDayOfWeek();
</script>
<style>
.weather__wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center bottom;
}
.weather__infor--wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
}
.weather-info p {
  margin: 4px;
}
.weather-detail {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
}
.welcom-message {
  font-size: 25px;
}
.welcom-message strong {
  font-weight: bold;
}
</style>
