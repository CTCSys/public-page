<template>
   <div align="center">
     <iframe width="640" height="360" src="/CTCS_MetaShow.html"></iframe>
   </div>
   <div class="absolute bottom-0 flex p-3 bg-white ">
          <img class="object-cover object-center w-10 h-10 rounded-full"
                      src="/img0.jpg?compress=1&resize=1000x750&vertical=top"
                      alt="">
   </div>
   
   <div class="absolute bottom-0 flex p-3 bg-white ">
          <img class="object-cover object-center w-10 h-10 rounded-full"
                      src="/img1.jpg?compress=1&resize=1000x750&vertical=top"
                      alt="">
   </div>

      <div class="absolute bottom-0 flex p-3 bg-white ">
          <img class="object-cover object-center w-10 h-10 rounded-full"
                      src="/img2.jpg?compress=1&resize=1000x750&vertical=top"
                      alt="">
   </div>
   
   <div class="absolute bottom-0 flex p-3 bg-white ">
          <img class="object-cover object-center w-10 h-10 rounded-full"
                      src="/img3.jpg?compress=1&resize=1000x750&vertical=top"
                      alt="">
   </div>   <div class="absolute bottom-0 flex p-3 bg-white ">
          <img class="object-cover object-center w-10 h-10 rounded-full"
                      src="/img4.jpg?compress=1&resize=1000x750&vertical=top"
                      alt="">
   </div>
   

   
  <h1 class="blog-title">Blog</h1>
  <div class="blogList">
    <a class="blog" v-for="item in posts" :href="withBase(item.regularPath)">
      <div class="title">{{ item.frontMatter.title }}</div>
   
      <div class="tags">{{ transDate(item.frontMatter.date) + ", " +  item.frontMatter.description + " {" + item.frontMatter.tags+ "}"}}</div>
    </a>
  </div>
  <div class="pagination">
    <div
      class="link"
      :class="{ activeLink: pageCurrent === i }"
      v-for="i in pagesNum"
      :key="i"
      @click="go(i)"
    >
      {{ i }}
    </div>
  </div>
  
  <ShareCard />
  
</template>
<script lang="ts" setup>
interface post {
  regularPath: string;
  frontMatter: object;
}
import { onMounted, ref, reactive } from "vue";
import ShareCard from "./ShareCard.vue";
import { useData, withBase } from "vitepress";
const { theme } = useData();

// get posts
let postsAll = theme.value.posts || [];
// get postLength
let postLength = theme.value.postLength;
// get pageSize
let pageSize = theme.value.pageSize;
//  pagesNum
let pagesNum =
  postLength % pageSize === 0
    ? postLength / pageSize
    : postLength / pageSize + 1;
pagesNum = parseInt(pagesNum.toString());
//pageCurrent
let pageCurrent = ref(1);
// filter index post
postsAll = postsAll.filter((item: post) => {
  return item.regularPath.indexOf("index") < 0;
});
// pagination
let allMap = {};
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = [];
}
let index = 0;
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1;
  }
  allMap[index].push(postsAll[i]);
}
// set posts
let posts = ref([]);
posts.value = allMap[pageCurrent.value - 1];

// click pagination
const go = (i) => {
  pageCurrent.value = i;
  posts.value = allMap[pageCurrent.value - 1];
};
// timestamp transform
const transDate = (date: string) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  switch (dateArray[1]) {
    case "1":
    case "01":
      month = `Jan`;
      break;
    case "2":
    case "02":
      month = `Feb`;
      break;
    case "3":
    case "03":
      month = `Mar`;
      break;
    case "4":
    case "04":
      month = `Apr`;
      break;
    case "5":
    case "05":
      month = `May`;
      break;
    case "6":
    case "06":
      month = `Jun`;
      break;
    case "7":
    case "07":
      month = `Jul`;
      break;
    case "8":
    case "08":
      month = `Aug`;
      break;
    case "9":
    case "09":
      month = `Sep`;
      break;
    case "10":
      month = `Oct`;
      break;
    case "11":
      month = `Nov`;
      break;
    case "12":
      month = `Dec`;
      break;
    default:
      month = `Month`;
  }
  return `${month} ${day}, ${year}`;
};
</script>

<style scoped>
.blog-title {
  text-align: center;
  font-weight: bold;
}
.blogList {
  padding: 30px 0;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blog {
  width: 85%;
  display: block;
  border-radius: 15px;
  padding: 0 20px;
  margin: 10px;
  background: var(--c-bg);
  max-width: 700px;
  box-shadow: 3px 3px var(--c-brand);
  border: 2px solid #2826;
  cursor: pointer;
}
.blog:hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
  box-shadow: 5px 10px var(--c-brand);
}
.title {
  color: var(--c-brand-light);
  font-size: 2.6em;
  font-weight: bold;
}
.date {
  padding-bottom: 7px;
}
.tags {
	  padding-bottom: 6px;
	}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 232px;
  width: 100%;
}
.link {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border: 1px solid #28295;
  cursor: pointer;
  border-right: none;
  transition: 0.2s;
  border-radius: 2px;
}
.link:last-child {
  border-right: 1px solid #282936;
}
.link:hover {
  transform: translate(-1px, -1px);
}
.activeLink {
  background-color: var(--c-brand);
  color: white;
}
</style>
