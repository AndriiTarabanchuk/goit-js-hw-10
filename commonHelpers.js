import"./assets/styles-41e93212.js";import{i as v}from"./assets/vendor-ad859c2f.js";const a=document.querySelector(".section button[data-start]"),h=document.querySelectorAll(".timer .field span.value");a.classList.add("inactive");let c;const p=new Date;let r,i,g={theme:"dark",timeout:5e3,message:"Please choose a date in the future",position:"topRight",progressBarColor:"rgb(254, 80, 68)",closeOnClick:!0,displayMode:"once",iconUrl:"./img/x-circle.svg",close:!1};const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:I};flatpickr("#datetime-picker",y);function I(e){c=e[0];let t=c.getTime()-p.getTime();if(t<0){v.error(g),a.classList.add("inactive");return}t!==i&&(a.classList.remove("inactive"),i=t,C(i))}function C(e){let t=e;a.addEventListener("click",n=>{r&&clearInterval(r);let o=setInterval(()=>{let s=k(t);D({objDateData:s,timerDom:h}),t-=1e3,t<0&&(console.log("Done"),clearInterval(o))},1e3);r=o,a.classList.add("inactive")},{once:!0})}function D({objDateData:e,timerDom:t}){for(const n in e)for(let o=0;o<t.length;o++)t[o].dataset[n]===""&&t[o].textContent!==l(e[n])&&(t[o].textContent=l(e[n]))}function l(e){return`${e}`.padStart(2,"0")}function k(e){const d=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:f,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
