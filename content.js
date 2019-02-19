//Featured section in the hero of the main page
var element = document.querySelector('.js-homeStream');
if (element) {
    element.remove()
}

function removeArticles() {
    var allStars = document.querySelectorAll('.svgIcon--star')
    allStars.forEach(star => {
        //Core articles in the body
        var articleContainer = star.closest('.streamItem.streamItem--extremePostPreview')
        if (articleContainer) {
            articleContainer.remove()
        }
        //Popular on Medium & New from your network
        var sideContainer = star.closest('.u-flex')
        if (sideContainer) {
            sideContainer.remove()
        }  
    })

    //Featured Collections
    var element = document.querySelector('.streamItem.streamItem--sequenceIndexCarousel');
    if (element) {
        element.remove()
    }
}



var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    //    console.log(mutation);

        var addedNodes = [...mutation.addedNodes]

        var found = addedNodes.find(function(node){
            //  console.log('class name', node.className) // record the class names added
            if (!node.className){
                return false
            }
            return node.className.includes('streamItem streamItem--extremePostPreview')
        }) 

        if (found){
            removeArticles()
        }


    });
  });


//   use mutation observer to track changes on the page
  mutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true
  })