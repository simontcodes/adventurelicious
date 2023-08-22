const apiUrl =
  "https://public-api.wordpress.com/wp/v2/sites/milagrorebolledo.wordpress.com/posts";

function extractTextFromHTML(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent;
}

async function fetchPosts(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    const posts = response.data;
    console.log(posts);

    // Process the array of posts and store them in a variable
    const allPosts = await Promise.all(
      posts.map(async (post) => {
        // const imageUrlResponse = await axios.get(
        //   post._links["wp:attachment"][0].href
        // );
        // const imageUrl = imageUrlResponse.data[0].source_url;

        const categoryResponse = await axios.get(
          `https://public-api.wordpress.com/wp/v2/sites/milagrorebolledo.wordpress.com/posts/${post.id}/?_embed&categories`
        );

        console.log(categoryResponse);

        const category = categoryResponse.data._embedded["wp:term"][0][0].name;

        console.log(category);

        return {
          id: post.id,
          href: post.link,
          imageUrl: post.jetpack_featured_media_url,
          specialTitle: category, // You can customize this as needed
          title: post.title.rendered,
          subtitle: extractTextFromHTML(post.excerpt.rendered), // You can customize this as needed
          author: "Milagros R.",
          date: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        };
      })
    );

    // Example: Display the posts as <a> elements
    const postContainer = document.getElementById("post-container");
    const endOfPostsDiv = document.getElementById("end-of-posts");

    // -------------------------------------------------------------------
    //reverse the array so the latest post is the first one
    allPosts.reverse();
    // Create the anchor element
    const anchorElement = document.createElement("a");
    anchorElement.href = "/pages/comingsoon.html";
    anchorElement.id = allPosts[0].id;
    anchorElement.className = "related-post col-md featured_post";
    anchorElement.setAttribute("aria-label", allPosts[0].subtitle);

    // Create the div for the related photo
    const relatedPhotoDiv = document.createElement("div");
    relatedPhotoDiv.className = "related-photo";

    // Create the image block div
    const imageBlockDiv = document.createElement("div");
    imageBlockDiv.className = "image-block";

    // Create the img wrapper div
    const imgWrapperDiv = document.createElement("div");
    imgWrapperDiv.className = "img-wrapper";

    // Create the i element for the image sizer
    const imageSizerI = document.createElement("i");
    imageSizerI.className = "img-sizer preload_image";
    imageSizerI.style.paddingTop = "250px";
    imageSizerI.style.backgroundImage = "url('data:image/jpeg;base64,/9j/...')"; // Your base64 encoded image

    // Create the picture element
    const pictureElement = document.createElement("picture");

    // Create the img element for the lazy-loaded image
    const imgElement = document.createElement("img");
    imgElement.className = "lazy lazyloaded";
    imgElement.width = "1280";
    imgElement.height = "853";
    imgElement.src = allPosts[0].imageUrl;
    imgElement.alt = allPosts[0].title;

    // Append elements in a hierarchical order
    pictureElement.appendChild(imgElement);
    imgWrapperDiv.appendChild(imageSizerI);
    imgWrapperDiv.appendChild(pictureElement);
    imageBlockDiv.appendChild(imgWrapperDiv);
    relatedPhotoDiv.appendChild(imageBlockDiv);

    // Create the authorbox div
    const authorboxDiv = document.createElement("div");
    authorboxDiv.className = "authorbox";

    // Create the headline div
    const headlineDiv = document.createElement("div");
    headlineDiv.className = "headline";

    // Create the special title div
    const specialTitleDiv = document.createElement("div");
    specialTitleDiv.className = "special-title tag";
    specialTitleDiv.textContent = allPosts[0].specialTitle;

    // Create the h3 element for the header
    const h3Element = document.createElement("h3");
    h3Element.className = "header-1";
    h3Element.textContent = allPosts[0].title;

    // Create the div for header 2
    const header2Div = document.createElement("div");
    header2Div.className = "header-2";
    header2Div.textContent = "A Complete Travel Guide";

    // Create the p element for the author subtitle
    const authorSubtitleP = document.createElement("p");
    authorSubtitleP.className = "author-subtitle";
    authorSubtitleP.textContent = allPosts[0].author;

    // Append elements in a hierarchical order
    headlineDiv.appendChild(specialTitleDiv);
    headlineDiv.appendChild(h3Element);
    headlineDiv.appendChild(header2Div);
    headlineDiv.appendChild(authorSubtitleP);
    authorboxDiv.appendChild(headlineDiv);
    relatedPhotoDiv.appendChild(authorboxDiv);

    // Append the relatedPhotoDiv to the anchor element
    anchorElement.appendChild(relatedPhotoDiv);

    // Insert the anchor element into the DOM
    postContainer.insertBefore(anchorElement, endOfPostsDiv);

    //removing the post from the array before generating the rest of the post
    allPosts.shift();

    // -------------------------------------------------------------------

    allPosts.forEach((post) => {
      const linkElement = document.createElement("a");
      linkElement.href = post.href;
      linkElement.id = `related-${post.id}`;
      linkElement.className = "related-post col-md";
      linkElement.setAttribute(
        "aria-label",
        `Read more about ${post.title} post.`
      );

      const relatedPhotoDiv = document.createElement("div");
      relatedPhotoDiv.className = "related-photo";

      const imageBlockDiv = document.createElement("div");
      imageBlockDiv.className = "image-block";

      const imgWrapperDiv = document.createElement("div");
      imgWrapperDiv.className = "img-wrapper";

      // Create the <i> tag and set its attributes
      const iElement = document.createElement("i");
      iElement.className = "img-sizer preload_image";
      iElement.style.paddingTop = "250px"; // Set the padding-top style

      const imgElement = document.createElement("img");
      imgElement.src = post.imageUrl;
      imgElement.alt = post.title;
      imgElement.setAttribute("width", "1280");
      imgElement.setAttribute("height", "853");
      imgElement.className = "lazy lazyloaded";

      const authorboxDiv = document.createElement("div");
      authorboxDiv.className = "authorbox";

      const headlineDiv = document.createElement("div");
      headlineDiv.className = "headline";

      const specialTitleDiv = document.createElement("div");
      specialTitleDiv.className = "special-title tag";
      specialTitleDiv.innerText = post.specialTitle.toString();

      const h3Element = document.createElement("h3");
      h3Element.className = "header-1";
      h3Element.innerText = post.title;

      const subtitleDiv = document.createElement("div");
      subtitleDiv.className = "header-2";
      subtitleDiv.innerText = post.subtitle;

      const authorSubtitle = document.createElement("p");
      authorSubtitle.className = "author-subtitle";
      authorSubtitle.innerText = `By ${post.author.toString()} on ${post.date}`;

      headlineDiv.appendChild(specialTitleDiv);
      headlineDiv.appendChild(h3Element);
      headlineDiv.appendChild(subtitleDiv);
      headlineDiv.appendChild(authorSubtitle);

      authorboxDiv.appendChild(headlineDiv);

      imgWrapperDiv.appendChild(imgElement);
      imageBlockDiv.appendChild(imgWrapperDiv);
      // Append the <i> tag to the imgWrapperDiv
      imgWrapperDiv.appendChild(iElement);

      relatedPhotoDiv.appendChild(imageBlockDiv);
      relatedPhotoDiv.appendChild(authorboxDiv);

      linkElement.appendChild(relatedPhotoDiv);
      linkElement.appendChild(document.createTextNode(" "));

      // Insert the new element before the end-of-posts div
      postContainer.insertBefore(linkElement, endOfPostsDiv);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch and display posts
fetchPosts(apiUrl);
