

<!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64a2c13794cf5d49dc613cfd/1h4ds5i93';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

<!--End of Tawk.to Script-->

<!--Start of visitor Script-->

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
<!----End visitor count script ------>

// Note:
// - A separate .js-* prefixed selector is used to handle JS interactions.
// - Using jQuery

$('.js-newsletter-form').on('submit', (e) => {
	e.preventDefault(); // Prevent a page reload for this example and for asynchronous calls.
	$('.newsletter__form').html('<p>Thank you!</p>');
});

    function addHTML() {
         var el, i, domEl, fileName, xmlHttp;
         
         /*Iterate all DOM*/
         el = document.getElementsByTagName("*");
         for (i = 0; i < el.length; i++) {
            domEl = el[i];
            
            /*find the element having w3-include-html attribute*/
            fileName = domEl.getAttribute("w3-include-html");
            if (fileName) {
               
               /*http request with attribute value as file name*/
               xmlHttp = new XMLHttpRequest();
               xmlHttp.onreadystatechange = function() {
                  if (this.readyState == 4) {
                     if (this.status == 200) {
                        domEl.innerHTML = this.responseText;
                     }
                     if (this.status == 404) {
                        domEl.innerHTML = "Page not found.";
                     }
                     
                     /* Remove the attribute and invoke the function again*/
                     domEl.removeAttribute("w3-include-html");
                     addHTML();
                  }
               }
               xmlHttp.open("GET", fileName, true);
               xmlHttp.send();
               
               /*function ends*/
               return;
            }
         }
      }
      addHTML();