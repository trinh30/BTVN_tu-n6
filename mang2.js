var arr = [];
 function save(){
    var a={
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        namepro: document.getElementById("namepro").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value,
    }
    console.log(a);
    arr.push(a);

 }
 function show(){
    var html="";
    for( var i in arr){
        var n=i;
        n++;
        html+="<tr>";
        html+="<td>"+(n)+"</td>";
        html+="<td>"+arr[i].name+"</td>";
        html+="<td>"+arr[i].id+"</td>";
        html+="<td>"+arr[i].namepro+"</td>";
        html+="<td>"+arr[i].quantity+"</td>";
        html+="<td>"+arr[i].price+"</td>";
        html+="<td>"+parseFloat(arr[i].quantity)*parseFloat(arr[i].price)+"</td>";
        html+="<tr>";


    }
    document.getElementById('tbl').innerHTML=html;
 }
 function reset(){
     document.getElementById("name").value='';
    document.getElementById("id").value='';
     document.getElementById("namepro").value='';
     document.getElementById("quantity").value='';
     document.getElementById("price").value='';
 }