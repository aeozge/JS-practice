const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');


// First Alternative for HTTP Request
// XMLHTTPREQUEST 
/*
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
      const hr = new XMLHttpRequest;
      

      //We get the data from this url.
      //hr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

      hr.open(method, url);
      hr.responseType = 'json'

      hr.onload = function () {
          //const listOfProps = JSON.parse(hr.response);
          //console.log(listOfProps);

          if (hr.status >= 200 && hr.status < 300) {
              resolve(hr.response);
          } else {
              hr.response;
              reject(new Error('Something went wrong!'));
          }
      };
      hr.onerror = function () {
          reject(new Error('Failed to send request!'));
      }

      //send it the request.
      hr.send(JSON.stringify(data));
  });
  return promise;
}
*/

// Second Alternative for HTTP Request
// FETCH API = It's globally available func and Promise based.
function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method: method,
        // body: JSON.stringify(data),
        body: data,
        // headers: {'Content-Type': 'application/json'},
    })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return response.json().then((errData) => {
                    console.log(errData);
                    throw new Error('Something went wrong -server-side.');
                });
            }
        })
        .catch((error) => {
            console.log(error);
            throw new Error('Something went wrong!');
        });
}

async function fetchPosts() {
    try {
        const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
        const listsOfPosts = responseData;
        for (const post of listsOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        alert(error.message);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    console.log(post)

    const fd = new FormData(form);
    // fd.append('title', title);
    // fd.append('body', content);
    fd.append('userId', userId);

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent)
});

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        console.log(postId);
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});