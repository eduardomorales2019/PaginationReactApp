// import React from "react";

// this util if for construct an array . i mean a big aray make it shorter.

const paginate = (followers) => {
  //   console.log(followers);

  // first divide the array.

  const itemperPage = 10;

  // rounded it
  const pages = Math.ceil(followers.length / itemperPage);
  //   console.log(pages);

  // make the array into pieces. SYNTAXISK

  // like maom thereis item, but the important is the index, we iterate the index as we do the total itemPerPage.
  //! --- 1. set the items per page

  //!. ---2.--set the pages and round it.

  //! ---3.. create the arrays ferom arrays.

  //! 4.----  do the return  with slice method( start pointa and last point)
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemperPage;
    // console.log(start);
    return followers.slice(start, start + itemperPage);
  });
  //   console.log(newFollowers);
  return newFollowers;
};

export default paginate;

// const paginate = (followers) => {
//   const itemsPerPage = 10
//   const numberOfPages = Math.ceil(followers.length / itemsPerPage)

//   const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
//     const start = index * itemsPerPage
//     return followers.slice(start, start + itemsPerPage)
//   })

//   return newFollowers
// }

// export default paginate
