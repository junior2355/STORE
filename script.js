var storeSupplies = [];
$("button").click(function() {
     var name = $(".product").val();
     storeSupplies.push(name);
     var price = $("#price").val();
     $("#items").append(name);
     $(".stuff").text(storeSupplies.length);
});
