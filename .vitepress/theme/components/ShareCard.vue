<template>
  <div class="shareCard" @click="go2()">
    <h1>
      <img class="share-avator" src="/cafe.svg" />
      <span> Composable Tokenized Coding System </span>
    </h1>
    <p> ---  </p>
    <div class="cardPart">
      <div class="card" v-for="item in list" @click="go(item)">
        <svg
          t="1641801440748"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2123"
          width="30"
          height="30"
        >
          <path :d="item.icon" fill="var(--c-brand)"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
	type card = {
	  text: string;
	  icon: string;
	  url: string;
};
const list: card[] = [
  {
    text: " GitHub ",
    icon: `M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z`,
    url: "https://github.com/hjvogel",
  },

  {
    text: " e-Mail ",
    icon: `M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z`,
    url: "mailto:info@ctcs.ch",
  },
];
const go = (item: card) => {
  window.location.href = item.url;
};

const go2 = () => {
	window.location.href = '/about/Me';
	router.push('/about/Me');
};
</script>
<style scoped>
.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
cursor: pointer;
}
.share-avator {
  width: 42px;
}
.cardPart {
  display: flex;
}
.card {
  cursor: pointer;
}
.card:hover {
  transform: translate(-2px, -2px);
}
</style>
