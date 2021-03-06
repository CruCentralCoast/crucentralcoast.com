/* eslint-disable require-jsdoc */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function checker(item1, item2, item3) {
  if (item1 || item2 || item3) {
    jQuery('.subcatagories').toggleClass('hidden');
  }

  if (item1) {
    temp = '.menu-' + item1;
    $(temp).css({
      'background-color': '#ffffff',
    });
    temp = '.m' + item1;
    $(temp).css({
      'color': '#666062',
    });
    temp = '#' + item1 + '-links';
    jQuery( temp).toggleClass('hidden');
  }

  if (item2) {
    temp = '.menu-' + item2;
    $(temp).css({
      'background-color': '#ffffff',
    });
    temp = '.m' + item2;
    $(temp).css({
      'color': '#666062',
    });
    temp = '#' + item2 + '-links';
    jQuery( temp).toggleClass('hidden');
  }

  if (item3) {
    temp = '.menu-' + item3;
    $(temp).css({
      'background-color': '#ffffff',
    });
    temp = '.m' + item3;
    $(temp).css({
      'color': '#666062',
    });
    temp = '#' + item3 + '-links';
    jQuery( temp).toggleClass('hidden');
  }
};

function main() {
  let about; let involvement; let resources; let media;
  $('.menu-about').mouseenter(function() {
    if (!about) {
      about = 'about';
      $(this).css({
        'background-color': '#f9b625',
      });
      $('.mabout').css({
        'color': '#ffffff',
      });
      jQuery('#about-links, .subcatagories').toggleClass('hidden');
    }
    checker(involvement, resources, media);
    involvement = resources = media = '';
  });

  $('.menu-involvement').mouseenter(function() {
    if (!involvement) {
      involvement = 'involvement';
      $(this).css({
        'background-color': '#f9b625',
      });
      $('.minvolvement').css({
        'color': '#ffffff',
      });
      jQuery('#involvement-links, .subcatagories').toggleClass('hidden');
    }
    checker(about, resources, media);
    about = resources = media = '';
  });

  $('.menu-resources').mouseenter(function() {
    if (!resources) {
      resources = 'resources';
      $(this).css({
        'background-color': '#f9b625',
      });
      $('.mresources').css({
        'color': '#ffffff',
      });
      jQuery('#resources-links, .subcatagories').toggleClass('hidden');
    }
    checker(involvement, about, media);
    involvement = about = media = '';
  });

  $('.menu-media').mouseenter(function() {
    if (!media) {
      media = 'media';
      $(this).css({
        'background-color': '#f9b625',
      });
      $('.mmedia').css({
        'color': '#ffffff',
      });
      jQuery('#media-links, .subcatagories').toggleClass('hidden');
    }
    checker(involvement, resources, about);
    involvement = resources = about = '';
  });
};

function sourceSwap() {
  const $this = $(this);
  const newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
};

$(function() {
  $('img.central').hover(sourceSwap, sourceSwap);
});

$(document).ready(main);
