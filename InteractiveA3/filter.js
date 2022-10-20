function filterCategory(filterSelection, filterBy){
    // filter selection is category
    // filter by is thing to match
    let itemsToFilter = Array.from(document.getElementsByClassName("ItemCardWrapper")); 
    for(let listItem of itemsToFilter){
        if(listItem.dataset[filterSelection] === filterBy){
            listItem.style.display = "flex";
        } else {
            listItem.style.display = "none";
        }
        
    }
}

// this filter uses an if statement function that categories what ItemCardWrappers to display and what not to , if the filter category name is selected the item will be displayed shown as flex and none if not

function filterAll(){
    let itemsToFilter = Array.from(document.getElementsByClassName("ItemCardWrapper"));
    for(let listItem of itemsToFilter){
        listItem.style.display = "flex";  
    }
}

//this filter function is for ALL the dishes to be displayed 

