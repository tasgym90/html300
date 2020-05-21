
// Blog generation section

window.onload = function() {
  console.log('Page loaded');

const blogContainer = document.getElementsByClassName('blog-container')[0];
const blogHeader = document.createElement('h1');

blogHeader.textContent = 'Adopt a blog';
blogContainer.appendChild(blogHeader);

const blogParagraphText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

blogContainerItems = [{blockImage: 'images/blog-1.jpg',
                       blockText: {h2: 'travel...',
                                   p: blogParagraphText}},
                      {blockImage: 'images/blog-2.jpg',
                       blockText: {h2: 'travel more...',
                                   p: blogParagraphText}},
                      {blockImage: 'images/blog-3.jpg',
                       blockText: {h2: 'stay home cuz corano V dawg',
                                   p: blogParagraphText}}]

for (let i = 0; i < blogContainerItems.length; i +=1) {

  blockItem = blogContainerItems[i];

  const blogBlock = document.createElement('div');
    blogBlock.setAttribute('class', 'blog-block');
    blogContainer.appendChild(blogBlock);

  const blogImage = document.createElement('div');
    blogImage.setAttribute('class', 'blog-image');
    blogBlock.appendChild(blogImage);

  const blogRealImage = document.createElement('img');
    blogRealImage.src = blockItem.blockImage;
    blogImage.appendChild(blogRealImage);

  const blogText = document.createElement('div');
    blogText.setAttribute('class', 'blog-text');
    blogBlock.appendChild(blogText);

  const blogH2 = document.createElement('h2');
    blogH2.textContent = blockItem.blockText.h2;
    blogText.appendChild(blogH2);

  const blogP = document.createElement('p');
    blogP.textContent = blockItem.blockText.p;
    blogText.appendChild(blogP);

  }
}

//Add Total Section

let totalCost = 0;
let counter = 0;

// localStorage.setItem("totalCost", 0);
// let totalCost = Number(localStorage.getItem("totalCost"));


function handleCounter(cost) {
  totalCost = Number(cost) + totalCost;
  counter++;
  alert(`You have selected ${counter} dog(s) to adopt. Your total price is $${totalCost}`);


}

// Dog-Info-Image Section

function handleClick(dogName, breed, adoptFee) {
  let result = null;
  result = `You clicked on ${dogName}. They are a ${breed} and cost $${adoptFee}`;
  alert(result);
}


// Checkout Submit Section
    // On the form page, display an alert that says "Thank you.
    // The form information has been received" when the form has been submitted.
    // Console log the values inside the form, you can build a string or build an object.

//Use JQuery to refactor the form submission
//

$(document).ready(function() {
  console.log('ready');

  $('#form-box-irate').submit(function(event) {
    event.preventDefault();

    const formInfo = {};

    for (let i = 0; i < event.target.elements.length - 1; i++) {
      // console.log(event.target);
      // console.log(event.target.elements);
      // console.log(event.target.elements.name);
      // console.log(event.target.elements.name.value);
      formInfo[event.target.elements[i].id] = event.target.elements[i].value;
    }

      // formInfo.name = document.getElementById('name').value;
      // formInfo.email = document.getElementById('email').value;
      // formInfo.street = document.getElementById('street').value;
      // formInfo.city = document.getElementById('city').value;
      // formInfo.state = document.getElementById('state').value;
      // formInfo.zipcode = document.getElementById('zipcode').value;
      // formInfo.yes = document.getElementById('yes').value;
      // formInfo.no = document.getElementById('no').value;
      // formInfo.region = document.getElementById('region').value;

      result2 = `Thank you! The form has been received.`;
      alert(result2);
      console.log(formInfo);

    });
});
//
// })

//

// const form = document.getElementById('form-box-irate');
//   console.log(form);
//
//   form.addEventListener('submit', function(event) {
//     event.preventDefault()
//     let formInfo = {};//create an empty object
//       formInfo.name = document.getElementById('name').value;
//       formInfo.email = document.getElementById('email').value;
//       formInfo.street = document.getElementById('street').value;
//       formInfo.city = document.getElementById('city').value;
//       formInfo.state = document.getElementById('state').value;
//       formInfo.zipcode = document.getElementById('zipcode').value;
//       formInfo.yes = document.getElementById('yes').value;
//       formInfo.no = document.getElementById('no').value;
//       formInfo.region = document.getElementById('region').value;
//     result2 = `Thank you! The form has been received.`;
//     alert(result2);
//     console.log(formInfo);
//
// });






// Manual way of Blog Generation section:
          // const blogBlock = document.createElement('div');
          //   blogBlock.setAttribute('class', 'blog-block');
          //   blogContainer.appendChild(blogBlock);
          //
          // const blogImage = document.createElement('div');
          //   blogImage.setAttribute('class', 'blog-image');
          //   blogBlock.appendChild(blogImage);
          //
          // const blogRealImage = document.createElement('img');
          //   blogRealImage.src = 'images/blog-1.jpg';
          //   blogImage.appendChild(blogRealImage);
          //
          // const blogText = document.createElement('div');
          //   blogText.setAttribute('class', 'blog-text');
          //   blogBlock.appendChild(blogText);
          //
          // const blogH2 = document.createElement('h2');
          //   blogH2.textContent = 'Traveling with your dog';
          //   blogText.appendChild(blogH2);
          //
          // const blogP = document.createElement('p');
          //   blogP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
          //   blogText.appendChild(blogP);


// Homework #9
          // Implement jQuery on your dog site. Use the CDN option to keep file size smaller.
          // Use jQuery to effect on the dog tiles in some way. It's up to you, it can be something
          // very simple or something more complicated. Some ideas...

          // A hover effect that gives the tile an outline, or give it a box shadow.
          // Zooms in on the dog photo
          // Add a ripple effect to your button.

          // $('.dog-box').hover(function(e) {
          //   $('img', this).addClass('dog-box-shadow');
          // })







          // Use jQuery and refactor the form submission. Simply console log the form data as before.
          // Use jQuery to update the checkout total on the index page with each click of an adopt button.
          // This won't persist if you refresh or navigate to a new page, this is expected.
