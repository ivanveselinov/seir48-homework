//let button = document.getElementById('lib-button');

let $button = $('#lib-button');

$('h1').funText(100, ['#ff7400', '#cd0074', '#0c0']).css('text-align', 'center');

const makeStory = () => {
  // let story = document.createElement('p');
  let $story = $('<p>');
  // let noun = document.getElementById('noun').value;
  let noun = $('#noun').val();
  let adjective = $('#adjective').val();
  let person = $('#person').val();
  $story.html(`${person} chuckles whenever they see a ${adjective} ${noun}`);
  $story.appendTo('body');
}

$button.on('click', makeStory);