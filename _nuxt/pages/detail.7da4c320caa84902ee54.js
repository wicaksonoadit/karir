webpackJsonp([5],{"5GTP":function(t,s,a){"use strict";var i=a("UH7j");s.a={components:{appHeader:i.a},data:function(){return{job:[],location:[],jobs:[],totalJob:0}},created:function(){var t=this,s=this.$route.query.id;s&&this.$axios.get("https://id-embed.kalibrr.id/companies/adira-finance/jobs/?id="+s).then(function(s){t.job=s.data,t.location=s.data.google_location.address_components}),this.$axios.get("https://id-embed.kalibrr.id/companies/adira-finance/?offset=0&limit=4",{headers:{"Content-Type":"application/json"}}).then(function(s){t.jobs=s.data.jobs,t.totalJob=s.data.total_count})},methods:{humanDate:function(t){return new Date(t).toDateString()}}}},A1WE:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",[t._m(0),t._m(1),a("div",{staticClass:"career-nav desktop"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row menus desktop"},[a("div",{staticClass:"col-md-3 menu",class:["index"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/"}},[t._v("IKHTISAR")])],1),a("div",{staticClass:"col-md-3 menu",class:["testimonial"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/testimonial"}},[t._v("BEKERJA DI ADIRA")])],1),a("div",{staticClass:"col-md-3 menu",class:["jobs"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/jobs"}},[t._v("LOWONGAN KERJA")])],1),a("div",{staticClass:"col-md-3 menu",class:["internship"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/internship"}},[t._v("INTERNSHIP")])],1)])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row menus mobile"},[a("div",{staticClass:"col-12 menu",class:["index"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/"}},[t._v("IKHTISAR")])],1),a("div",{staticClass:"col-12 menu",class:["testimonial"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/testimonial"}},[t._v("BEKERJA DI ADIRA")])],1),a("div",{staticClass:"col-12 menu",class:["jobs"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/jobs"}},[t._v("LOWONGAN KERJA")])],1),a("div",{staticClass:"col-12 menu",class:["internship"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/internship"}},[t._v("INTERNSHIP")])],1)])])]),a("div",{staticClass:"nav-mobile mobile"},[t._m(2),a("div",{staticClass:"row menus collapse",attrs:{id:"careermobile"}},[a("div",{staticClass:"col-12 menu",class:["index"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/"}},[t._v("IKHTISAR")])],1),a("div",{staticClass:"col-12 menu",class:["testimonial"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/testimonial"}},[t._v("BEKERJA DI ADIRA")])],1),a("div",{staticClass:"col-12 menu",class:["jobs"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/jobs"}},[t._v("LOWONGAN KERJA")])],1),a("div",{staticClass:"col-12 menu",class:["internship"===t.isActive?"active":""]},[a("nuxt-link",{attrs:{to:"/internship"}},[t._v("INTERNSHIP")])],1)]),t._m(3)])])},e=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header-nav"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"logo-wrapper"},[s("img",{staticClass:"img-resp",attrs:{src:a("iPC3"),alt:""}}),s("span",{staticClass:"moto"},[this._v("Sahabat Setia Selamanya")])])]),s("div",{staticClass:"col-8 header-side-nav"},[s("div",{staticClass:"input-group"},[s("input",{attrs:{type:"text"}}),s("span",{staticClass:"input-icon"},[this._v("search")])]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[this._v("CUSTOMER")])]),s("li",[s("a",{attrs:{href:"#"}},[this._v("CSR SAHABAT LOKAL")])]),s("li",[s("a",{attrs:{href:"#"}},[this._v("MENU")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-nav"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row menus"},[a("div",{staticClass:"col menu"},[t._v("PERUSAHAAN")]),a("div",{staticClass:"col menu"},[t._v("PRODUK")]),a("div",{staticClass:"col menu"},[t._v("TATA KELOLA")]),a("div",{staticClass:"col menu"},[t._v("INFORMASI INVESTOR")]),a("div",{staticClass:"col menu"},[t._v("KARIR")]),a("div",{staticClass:"col menu"},[t._v("BERITA")]),a("div",{staticClass:"col menu"},[t._v("PUBLIKASI")]),a("div",{staticClass:"col menu"},[t._v("KINERJA")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btn-cont"},[s("div",{staticClass:"trigger-title",attrs:{"data-toggle":"collapse",href:"#careermobile"}},[s("span",[this._v("KARIR ADIRA")]),s("span",{staticClass:"drop-arrow"},[this._v("▶")])]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#menu-collapse"}},[s("span",{staticClass:"navbar-toggler-icon"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row menus2 collapse",attrs:{id:"menu-collapse"}},[a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("DERING")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("LOKASI")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("AKSES")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("TANYA JAWAB")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("PRODUK")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("PROMO")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("AKSES ADIRA FINANCE")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("KORPORAT")])]),a("div",{staticClass:"col-12 menu"},[a("a",{attrs:{href:""}},[t._v("SAHABAT LOKAL")])])])}];i._withStripped=!0;var n={render:i,staticRenderFns:e};s.a=n},HOVI:function(t,s,a){"use strict";s.a={data:function(){return{isActive:""}}}},UH7j:function(t,s,a){"use strict";var i=a("HOVI"),e=a("A1WE"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="components/detailHeader.vue",s.a=n.exports},"UeM/":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("5GTP"),e=a("W+D+"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="pages/detail.vue",s.default=n.exports},"W+D+":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"detail"}},[a("appHeader"),a("section",{staticClass:"detail"},[a("div",{staticClass:"container"},[a("div",{staticClass:"heading-wrapper"},[a("div",{staticClass:"title-job"},[t._v(t._s(t.job.function))]),a("h1",[t._v(t._s(t.job.name))]),a("div",{staticClass:"loc_deadline"},[a("span",[t._v(" "+t._s(t.location.city)+", "+t._s(t.location.country)+" ")]),a("span",{staticClass:"divider"},[t._v(" | ")]),a("span",[t._v(" Deadline: "+t._s(t.humanDate(t.job.application_end_date))+" ")])]),t._m(0),a("div",{staticClass:"job-detail"},[t._m(1),a("div",{staticClass:"list",domProps:{innerHTML:t._s(t.job.qualifications)}})]),a("div",{staticClass:"job-detail"},[t._m(2),a("div",{staticClass:"list",domProps:{innerHTML:t._s(t.job.description)}})]),t._m(3)])])]),a("section",{staticClass:"jobs detail"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("LIHAT PEKERJAAN LAIN?")]),a("div",{staticClass:"jobs-wrapper"},t._l(t.jobs,function(s,i){return a("div",{key:i,staticClass:"row job-list"},[a("div",{staticClass:"col-md-6 col-12 job-title"},[a("a",{attrs:{href:"#"}},[t._v(t._s(s.name))]),a("h3",[t._v(t._s(s.function))])]),a("div",{staticClass:"col-md-5 col-12 location"},[a("h3",[t._v(t._s(s.google_location.address_components.city)+", "+t._s(s.google_location.address_components.country)+" ")])]),a("div",{staticClass:"col-md-1 col-12 detail"},[a("nuxt-link",{staticClass:"btn btn-job",attrs:{to:{path:"detail",query:{id:s.id}}}},[t._v("Detail")])],1)])})),a("div",{staticClass:"btn-wrapper trans"},[a("nuxt-link",{attrs:{to:"/jobs/"}},[a("div",{staticClass:"btn btn-main"},[t._v("LAMAR SEKARANG ("+t._s(t.totalJob)+")")])])],1)])])],1)};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btn-wrapper"},[s("div",{staticClass:"btn btn-main"},[this._v("LAMAR SEKARANG")]),s("p",[this._v("Powered by Kalibrr")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("h2",[this._v("JOB QUALIFICATIONS")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("h2",[this._v("JOB DESCRIPTION")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btn-wrapper second"},[s("div",{staticClass:"btn btn-main"},[this._v("LAMAR SEKARANG")])])}]};s.a=e},iPC3:function(t,s,a){t.exports=a.p+"img/logo.65b18b9.png"}});