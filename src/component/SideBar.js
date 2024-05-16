"use strict";
import React from "react";
import { api_key,fetchDataFromServer } from "./api";
import {addEventOnElements} from "./Global";

function SideBar()
{
   //fetch genres => format 변경
   const genreList = {};
   fetchDataFromServer(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
      function({genres}) {
         for(const {id, name} of genres){
            genreList[id] = name;
         }
         genreLink();
      }
   );
   const sidebarInner = document.createElement("div");
   sidebarInner.classList.add("sidebar-inner");
 
   sidebarInner.innerHTML = `
     <div class="sidebar-inner">
       <div class="sidebar-list">
         <p class="title">장르</p>
       </div>
 
       <div class="sidebar-footer">
         <a href="https://github.com/MVTI-MovieAndVideo-Recommender-Platform/FE.git" alt="MVTI가 궁금해요!"/>MVTI_Github</a>
 
         <br/>
         <img
           src="../src/asset/img/icon01.jpg"
           alt="MVTI Logo"
           width="130"
           height="17"
         />
       </div>
     </div>
   `;
 
   const genreLink = function () {
     for (const [genreId, genreName] of Object.entries(genreList)) {
       const link = document.createElement("a");
       link.classList.add("sidebar-link");
       link.setAttribute("href", "./MovieList.html");
       link.setAttribute("menu-close", "");
       link.setAttribute(
         "onclick",
         `getMovieList("with_genres=${genreId}", "${genreName}")`
       );
       link.textContent = genreName;
       sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);
     }
 
     const sidebar = document.querySelector("[sidebar]");
     sidebar.appendChild(sidebarInner);
     toggleSidebar(sidebar);
   };
 
   const toggleSidebar = function (sidebar) {
     //모바일 레이아웃 - toggle Sidebar
     const sidebarBtn = document.querySelector("[menu-btn]");
     const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
     const sidebarClose = document.querySelectorAll("[menu-close]");
     const overlay = document.querySelector("[overlay]");
 
     addEventOnElements(sidebarTogglers, "click", function () {
       sidebar.classList.toggle("active");
       sidebarBtn.classList.toggle("active");
       overlay.classList.toggle("active");
     });
 
     addEventOnElements(sidebarClose, "click", function () {
       sidebar.classList.remove("active");
       sidebarBtn.classList.remove("active");
       overlay.classList.remove("active");
     });
   };
}
//
//   return (
//   <article className="sidebar">
//      {/*사이드바 컨텐츠 */}
//   </article>
//   );
// }
 export default SideBar;