---
title: 'Why does React use a virtual DOM'
date: 2021-5-10 14:25:23
category: 'react'
draft: false
---

The virtual DOM is where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” browser DOM by a library such as ReactDOM. This process is called reconciliation.

## The Document Object Model

The "real" DOM is a heirarchical data structure containing HTML nodes that appear on the web page. The "painting of the DOM" is the action which shows
content on your browser. In simpler words lets imagine the following HTML structure.

```
<html>
  <head>
  </head>
  <body>
    <p></p>
  </body>
</html>
```

can be represented as....

```
        html
       /    \
  head        body
                \
                p
```

The above representation is a Document Object Model(DOM) and each element of this tree like structure is not-so-surprisingly called as a "node".

## Enter Virtual DOM

In React, Virtual DOM exists which is like a lightweight copy of the real DOM. So for every object that exists in the real DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. We will not discuss how the manipulation of virtual DOM maps to the real DOM (called as Reconciliation) in this section, if you would like to read more about it, you can visit [React Documentation](https://reactjs.org/docs/reconciliation.html) or [Reconciliation source code](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/).

## Pulling the curtains

Since we have a little bit of a context to what virtual DOM is, let's get right to the point.

The browser DOM is stateful, meaning it can create and destroy nodes which changes the state of the web page. React is made up of components and when something changes, React re-renders the component.

Showing this change in the browser while working with real DOM can be broken down into the following steps:

- parse browser HTML to pin point the node with identifier.
- removes the child of parent element.
- update the parent node with the new value
- recalculate CSS for parent and child nodes
- traverse the tree and paint on the page

AND THIS IS EXPENSIVE!!!!

Think about it in terms of a chat application. When a new message arrives, do you want to clear all messages as a node from your ChatComponent parent, and re-render all messages at once when DOM updates? For a complex application, this small change when done with other work will be noticeable and it is not a good user experience.

That is exactly when they built a virtual DOM which is closest to your application. Virtual DOM is declarative so you do not have to worry about its internals. But remember that they use a heuristic O(n) algorithm for a task which could take at least 0(n^3).

This Virtual DOM is tightly cohesive to your React application, so that React can mutate it using its API, with instance methods such as `UNSAFE_componentWillMount()`, `componentDidMount` and `componentWillUnmount()` and React keeps two copies of Virtual DOM at any point of time, once which is a pre-updated version and other is an updated version. React can efficiently compare two versions from it's [Diffing algorithm](https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm) using ReactDOM API methods discussed above.

When we know what to update, it becomes pretty easy to update the real DOM, which is sitting idle for now. And we can pin point the exact location where the state needs to update. In that Chat application which we discussed above, imagine appending to the existing list of messages without re-rendering the entire ChatComponent. [(By recursively comparing children in a list)](https://reactjs.org/docs/reconciliation.html#recursing-on-children).
