var products=[];
var cproducts=[];
var i=0,flag=0;
var ad=0,tta=0;
window.onbeforeunload = addtoarr();
function addtoarr()
{
	var retrievedData = localStorage.getItem("List");
	if(retrievedData!=null)
		products = JSON.parse(retrievedData);
}
window.onbeforeunload=loadd();
function loadd()
{
   	var retrievedData = localStorage.getItem("key1");
   	if(retrievedData!=null)
   	cproducts = JSON.parse(retrievedData);
}
function checknodeo(w)
{
	var c=0;
	for(var j=0;j<products.length;j++)
	{
		if(products[j].Name==w)
		{
			c=1;
		}
	}
	if(c==1)
	{
		return "0";
	}
	else
	{
		return "1";
	}
}
function fu()
{
	document.getElementById("demo").innerHTML = "";
	var w=document.getElementById("101").value;
	var x=document.getElementById("102").value;
	var y=document.getElementById("103").value;
	var z=document.getElementById("104").value;
	if(w==""||x==""||y==""||z=="")
	{
		alert("Please fill all the input feilds");
	}
	else
	{
		if(isNaN(y))
		{
			alert("Please enter valid product price");
		}
		else if(isNaN(z))
		{
			alert("Please enter valid product quantity");
		}
		else if(z<=0)
		{
			alert("Quantity cannot be zero");
		}
		else if(x.length<20)
		{
			alert("Description should be more");
		}
		else
		{
			var check=checknodeo(w);
			if(check=="1")
			{
				var objProduct = new Object();
 				objProduct.Name = w;
    			objProduct.Desc = x;
				objProduct.Price = y;
				objProduct.Quantity =z;
    			products.push(objProduct);
    			i++;
    			addlocks(products);
				document.getElementById("101").value="";
				document.getElementById("102").value="";
				document.getElementById("103").value="";
				document.getElementById("104").value="";
			}
			else 
			{
				alert("please enter unique product name");
			}
		}
	}
}
function createNode()
{
	document.getElementById("demo").innerHTML="";
	for(var j=0;j<products.length;j++)
	{
	var str1=products[j].Name;
	var str2=products[j].Desc;
	var str3=products[j].Price;
	var str4=products[j].Quantity;
	var par1=document.getElementById("demo");
	var child1=document.createElement("p");
	par1.setAttribute("class",j);
	var node1=document.createTextNode(str1);
	child1.appendChild(node1);
	par1.appendChild(child1);
	var par2=document.getElementById("demo");
	var child2=document.createElement("p");
	par2.setAttribute("class",j);
	var node2=document.createTextNode(str2);
	child2.appendChild(node2);
	par2.appendChild(child2);
	var par3=document.getElementById("demo");
	var child3=document.createElement("p");
	par3.setAttribute("class",j);
	var node3=document.createTextNode(str3);
	child3.appendChild(node3);
	par3.appendChild(child3);
	var par4=document.getElementById("demo");
	var child4=document.createElement("p");
	par4.setAttribute("class",j);
	var node4=document.createTextNode(str4);
	child4.appendChild(node4);
	par4.appendChild(child4);
	var par5=document.getElementById("demo");
	var child5=document.createElement("button");
	child5.innerHTML="Delete";
	child5.setAttribute("onclick","deletenode("+j+")");
	child5.setAttribute("class",j);
	child5.setAttribute("style","color:white;text-decoration:none;background:red;padding:10px;border-radius: 20px;display:inline-block;border: none;");
	par5.appendChild(child5);
	var par6=document.getElementById("demo");
	var child6=document.createElement("button");
	child6.innerHTML="Edit";
	child6.setAttribute("onclick","editnode("+j+")");
	child6.setAttribute("class",j);
	child6.setAttribute("style","color:white;margin-left:10px;text-decoration:none;background:green;padding:10px;border-radius: 20px;display:inline-block;border: none;");
	par6.appendChild(child6);
	var space=document.createElement("br");
	document.getElementById("demo").appendChild(space);
	var par7=document.getElementById("demo");
	var child7=document.createElement("button");
	child7.innerHTML="Add to cart";
	child7.setAttribute("onclick","addtocart("+j+")");
	child7.setAttribute("style","color:white;margin-top:5px;text-decoration:none;background:pink;padding:5px;border-radius:10px;display:inline-block;border: none;");
	par7.appendChild(child7);
	}
}
function deletenode(j)
{
	products.splice(j,1);
	i--;
	addlocks(products);
	createNode();
}
function addlocks(e)
{
	localStorage.setItem('List',JSON.stringify(e));
}
function editnode(o)
{
	document.getElementById("demo").innerHTML = "";
	var par1=document.getElementById("demo");
	var child1=document.createElement("input");
	child1.setAttribute("type","text");
	child1.setAttribute("id","111");
	child1.setAttribute("placeholder","Product Name");
	child1.value=products[o].Name;
	par1.appendChild(child1);
	var space=document.createElement("br");
	var par2=document.getElementById("demo");
	var child2=document.createElement("input");
	child2.setAttribute("type","text");
	child2.setAttribute("id","222");
	child2.setAttribute("placeholder","Product Description");
	child2.value=products[o].Desc;
	par2.appendChild(child2);
	var par3=document.getElementById("demo");
	var child3=document.createElement("input");
	child3.setAttribute("type","text");
	child3.setAttribute("id","333");
	child3.setAttribute("placeholder","Product Price");
	child3.value=products[o].Price;
	par3.appendChild(child3);
	var par4=document.getElementById("demo");
	var child4=document.createElement("input");
	child4.setAttribute("type","text");
	child4.setAttribute("id","444");
	child4.setAttribute("placeholder","Product Quantity");
	child4.value=products[o].Quantity;
	par4.appendChild(child4);
	document.getElementById("demo").appendChild(space);
	var par5=document.getElementById("demo");
	var child5=document.createElement("button");
	child5.innerHTML="Update";
	child5.setAttribute("onclick","addedit("+o+")");
	child5.setAttribute("style","color:white;text-decoration:none;background:orange;padding:5px;border-radius:10px;display:inline-block;border: none;");
	par5.appendChild(child5);
	addlocks(products);
}
function addedit(w)
{
	var check1,check2,check3,check4,uni;
	check1=document.getElementById("111").value;
	if(check1!='')
	{
		products[w].Name=check1;
	}
	check2=document.getElementById("222").value;
	if(check2!='')
	{
		if(check2.length<20)
		{
			alert("Description should be more");
		}
		else
		{
			products[w].Desc=check2;
		}
	}
	check3=document.getElementById("333").value;
	if(check3!='')
	{
		products[w].Price=check3;
	}
	check4=document.getElementById("444").value;
	if(check4!='')
	{
		products[w].Quantity=check4;
	}
	addlocks(products);
	document.getElementById("demo").innerHTML="";
}
function printcart()
{
	tta=0;
	document.getElementById("cart").innerHTML="";
	for(var opi=0;opi<cproducts.length;opi++)
	{
		var par1=document.getElementById("cart");
		var child1=document.createElement("p");
		var child11=document.createTextNode(cproducts[opi].Name);
		par1.appendChild(child11);
		par1.appendChild(child1);
		var child2=document.createElement("p");
		var child21=document.createTextNode(cproducts[opi].Desc);
		par1.appendChild(child21);
		par1.appendChild(child2);
		var child3=document.createElement("p");
		var child31=document.createTextNode(cproducts[opi].Price);
		par1.appendChild(child31);
		par1.appendChild(child3);
		var child4=document.createElement("p");
		var child41=document.createTextNode(cproducts[opi].Quantity);
		par1.appendChild(child41);
		par1.appendChild(child4);
		var child51=document.createElement("button");
		child51.innerHTML="delete";
		child51.setAttribute("onclick","deletecart("+opi+")");
		child51.setAttribute("style","color:white;text-decoration:none;background:orange;padding:5px;border-radius:10px;display:inline-block;border: none;");
		par1.appendChild(child51);
		var space2=document.createElement("br");
		par1.appendChild(space2);
		tta=tta+cproducts[opi].Price*cproducts[opi].Quantity;
	}
	if(cproducts.length!=0)
	{
		var paren=document.getElementById("cart");
		var child1=document.createElement("p");
		var child12=document.createTextNode("Total amount is Rupees ");
		var child3=document.createTextNode(tta);
		paren.appendChild(child12);
		paren.appendChild(child3);
		paren.appendChild(child1);
	}
}
function deletecart(p)
{
	var checking=0;
	for(var l=0;l<products.length;l++)
	{
		if(products[l].Name==cproducts[p].Name)
		{
			checking=l;
			break;
		}
	}
	products[checking].Quantity+=cproducts[p].Quantity;
	cproducts.splice(p,1);
	addlocks(products);
	toddlos(cproducts);
	document.getElementById("cart").innerHTML="";
	printcart();
	document.getElementById("demo").innerHTML="";
	createNode();
}
function addtocart(index)
{
	var y=index;
	if(products[index].Quantity==0)
	{
		alert("Invalid quantity");
	}
	else
	{
		var op=tosearch(products[index].Name);
		if(op==1)
		{
			createit(y);
		}
		products[index].Quantity=products[index].Quantity-1;
		addlocks(products);
		toddlos(cproducts);
		document.getElementById("demo").innerHTML="";
		createNode();
	}
}
function tosearch(c)
{
	for(var o=0;o<cproducts.length;o++)
	{
		if(cproducts[o].Name==c)
		{
			cproducts[o].Quantity=cproducts[o].Quantity+1;
			return 0;
		}
	}
	return 1;
}
function createit(ind)
{
	var objProduct = new Object();
 	objProduct.Name = products[ind].Name;
    objProduct.Desc = products[ind].Desc;
	objProduct.Price = products[ind].Price;
	objProduct.Quantity =1;
    cproducts.push(objProduct);
}
function toddlos(d)
{
	localStorage.setItem('key1',JSON.stringify(d));
}