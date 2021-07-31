function toggle() {
  const aboutMeBtn = document.querySelector('.about-me-button');
  const examplesBtn = document.querySelector('.examples-button');
  const aboutMeText = document.querySelector('.about-me-text');
  const examples = document.querySelector('.examples-of-works');
  

  aboutMeBtn.addEventListener('mouseup', () => {
    aboutMeBtn.classList.forEach( elem => {
      if(elem === 'inactive-button'){
        changeStyles(aboutMeBtn, examplesBtn, aboutMeText, examples);
      }
    })
  })

  examplesBtn.addEventListener('mouseup', () => {
    examplesBtn.classList.forEach( elem => {
      if(elem === 'inactive-button'){
        changeStyles(aboutMeBtn, examplesBtn, aboutMeText, examples);
      }
    })
  })

}

function changeStyles(aboutMeBtn, examplesBtn, aboutMeText, examples) {
  aboutMeText.classList.toggle('show-content');
  aboutMeText.classList.toggle('hide-content');
  examples.classList.toggle('show-content');
  examples.classList.toggle('hide-content');

  examplesBtn.classList.toggle('inactive-button');
  examplesBtn.classList.toggle('active-button');
  aboutMeBtn.classList.toggle('active-button');
  aboutMeBtn.classList.toggle('inactive-button');
}

export default toggle;