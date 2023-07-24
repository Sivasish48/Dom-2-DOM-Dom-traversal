// 1. The DOM 

// Dom includes different types of nodes which have parent , child , sibling relationships.

// 1.1 html element is the parent of the head and body element.

// 1.2 And the body element is the body to the division element.

// 1.3 but the <h1> and the <p> elements are child of the body element.

// 1.4 The <h1> and the <p> elements are the siblings of <Title> element as they are not the child of the same parent but same on the level.



// 2. CHILDNODE TRAVERSAL
// 2.1 We can actually manupilate child elements by accesing the child elements  through javascript by using childNodes() , firstChild() , lastChild() methods.

 let ul = document.querySelector('ul');


 console.log(ul.childNodes);
 console.log(ul.firstChild);
 console.log(ul.lastChild);

 ul.firstChild.style.backgroundColor = 'blue'; 

 // 3. SIBLING NODE TRAVERSAL
 // 3.1 It is as same as accessing yhe child nodes. By using previousSibling() and nextSibling() .

 const div = document.querySelector('div');

 console.log(ul.previousSibling);

// 3.2 We can also use previousElementSibling
 
 console.log(ul.nextSibling);
  
 // 3.3 We can also use nextElementSibling().