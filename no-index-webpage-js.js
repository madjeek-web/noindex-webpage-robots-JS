//no index webpage - JS
fetch("/api/products/"+productId).then((function(t){return t.json()})).then((function(t){if(t.isError){var e=document.querySelector('meta[name="robots"]');return e||((e=document.createElement("meta")).setAttribute("name","robots"),document.head.appendChild(e)),e.setAttribute("content","noindex"),void(errorMsg.textContent="This product is no longer available")}}));