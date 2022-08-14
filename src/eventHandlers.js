import { useState } from "react";

export function click(event, data) {
  console.log(event, data);
  let parent = getParent(event.target);
  parent.style.zIndex = 1;
}

export function drop(event, data) {
  let parent = getParent(event.target);
  parent.style.zIndex = 0;
}

export function track(e, data) {
  // setPosition({ x: data.x, y: data.y });
  console.log(e.pageX, e.pageY);
}

function getParent(element) {
  while (!element.className.includes('arrow')) {
    element = element.parentNode;
  }
  return element;
}