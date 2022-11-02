// Created by: Mark Palfi
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const lenght = parseInt(document.getElementById('lenght-of-pyramid').value)
  const width = parseInt(document.getElementById('width-of-pyramid').value)
  const height = parseInt(document.getElementById('height-of-pyramid').value)

  // process
  const volume = (lenght * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = "Volume is: " + volume.toFixed(2) + " cm³"
}