### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById() ==> It select a single element using the id that is assigned.

- getElementsByClassName() ==> It gives us a HTMLCollection, which is basically the element under the same class name.

- querySelector() ==> It select and give us the first matching element.

- querySelectorAll() ==> It select the all matching element and give us as a NodeList.

### 2. How do you create and insert a new element into the DOM?

- we can create new element using createElement() and then appendChild() to insert it in dom.
  #### For example:

```js
const div = document.createElement("div");
div.innerText = "new element";
document.body.appendChild(div);
```

### 3. What is Event Bubbling and how does it work?

- Event bubbling is when a child move towards it's immediate parent node.

  - For Example: If we click on a button, event bubbling will trigger the parent div also.

### 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is when we put a event listener on a parent so that we can handle the event on child element.

  - Advantage: use less memory and can control dynamic added element.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() ==> Helps us to stop element default action(e.g., when we click a link it prevents the page reload)

- stopPropagation() ==> It prevent the DOM event bubbling and capturing, for that reason parent/ancestor element don't get any event.
