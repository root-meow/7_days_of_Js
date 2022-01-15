function displayInformation() {
     // var library is defined, use it to print the information
    //if (library.readingStatus == true){
      //  console.log('Already read ' + library['title'] + ' by ' + library['author']);
    //}
    //else{
      //  console.log('You still need to read ' + library['title'] + ' by ' + library['author']);
    //}
    for (obj in library){
        if (library[obj].readingStatus == true){
            console.log("Already read '"+library[obj]['title']+"' by "+library[obj]['author']+". ");
        }
        else{
            console.log("You still need to read '"+library[obj]['title']+"' by "+library[obj]['author']+". ");
        }
    }
} 

// tail starts here
var library = [ 
    {
        title: 'Bill Gates',    //I think there was a mix up. This aught be the author
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();