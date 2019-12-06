//JavaScript Code

// JavaScript Document

//Declaring variables to slecet header and section
let header = document.querySelector('header');
let section = document.querySelector('section');

//The request URL for JSON File in server
let requestURL = "https://guraseessingh.github.io/Assignment-3/js/deals.json";

//creates an XHR object
let obj = new XMLHttpRequest();

//Open a new request
obj.open('GET', requestURL);

//set up the request to accept JSON file
obj.responseType = 'json';

//request is send
obj.send();


// Eventhandler that listnes to onload() function
obj.onload = function() {
  let deals = obj.response;
  console.log(deals);
  setHeader(deals);
  features(deals);
}

//Popluates the header with company name
function setHeader(jsonObj) {
  //Gets the company name and sets the value in header
  let h1 = document.createElement('h1');
  h1.textContent = jsonObj['companyName'];
  header.appendChild(h1);

  //Creates an h2 element with some string in it
  let h2 = document.createElement('h2');
  h2.textContent = 'Deals of the Day ! Limited Time Offer Only....Checkout the latest deals !';
  header.appendChild(h2);
}

// define the topflavours function to show the flavours

function features(jsonObj) {

  //gets all the deals
  let deals = jsonObj['deals'];

  for (let i = 0; i < deals.length; i++) {
    //Dclearing few elements to store the deals information
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    h2.setAttribute('id', 'nameofDeal' );
    let image = document.createElement('img');
    let p1 = document.createElement('p');
    let list = document.createElement('ul');

    //grab the data associated with image to set the src and alt attribute
    image.setAttribute('src', 'https://guraseessingh.github.io/Assignment-3/pictures/' + deals[i].image);
    image.setAttribute('alt', deals[i].image );

    //Sets name, price, description
    h2.textContent = deals[i].name;
    p1.innerHTML = 'Cost : $' + deals[i].price + '<br> Description : ' + deals[i].dealDescription;

    //Appends all the features of the product into a list
    let features = deals[i].itemFeatures;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li');
      listItem.textContent = features[j];
      list.appendChild(listItem);
    }

    // Append each element in order it get displayed
    article.appendChild(image);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(list);
    section.appendChild(article);

  }
}
