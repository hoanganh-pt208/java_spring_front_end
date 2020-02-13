// // Domain of Back-End (Java Spring)
// $_SERVER_DOMAIN = "http://localhost:8080/Sping_MVC_Project/",
// // Spring_MVC_Annotation
// // Function set Height for main menu after render and window resize
// setTimeout(function () {
//   	document.getElementById('content').style.height = ($(window).height() - (55)).toString()+'px';
//   	document.getElementById('home_content').style.height = ($(window).height() - (55)).toString()+'px';
//   	document.getElementById('search_content').style.height = ($(window).height() - (55)).toString()+'px';
// }, 1);
// window.addEventListener('resize', function(event){
// 	document.getElementById('content').style.height = ($(window).height() - (55)).toString()+'px';
//   	document.getElementById('home_content').style.height = ($(window).height() - (55)).toString()+'px';
//   	document.getElementById('search_content').style.height = ($(window).height() - (55)).toString()+'px';
// })

// // Funtion load template after render
// // $("#search_content").load("templates/search_page.html");
// // $("#home_content").load("templates/home_page.html");

// // Start set active for top Menu
// $("#top_menu li.cls_home_menu").click(function() {
//     $("#top_menu li.cls_search_menu").removeClass('active');
//     $(this).addClass('active');
//     $("#content>div#home_content").removeClass('hidden');
//     $("#content>div#search_content").addClass('hidden');
// });

// $("#top_menu li.cls_search_menu").click(function() {
//     $("#top_menu li.cls_home_menu").removeClass('active');
//     $(this).addClass('active');
//     $("#content>div#home_content").addClass('hidden');
//     $("#content>div#search_content").removeClass('hidden');
// });
// // End set active for top Menu