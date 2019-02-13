$("button").click(function() {
var name = $("#name").val();
console.log(name);
 var credit = $("#credit").val();
console.log(credit);
 var security = $("#security").val();
console.log(security);
 var money = $("#money").val();
console.log(money);
 $("#message").append("Thank you "+name+", I now have "+10000+money+" dollars");
});
