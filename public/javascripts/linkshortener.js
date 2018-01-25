$(document).ready(function(){
  $('#submitButton').on('click',function(){
    var longURL = $('#longURL').val();
    // We generate 8 random numbers and convert these to characters for the short URL.
        var shortURL = '';
        for (var i=0; i<=7; i++){
            var cellElement = Math.ceil(62*Math.random());
            if( cellElement >=11 && cellElement <= 36){
                cellElement+=54;
                shortURL+=String.fromCharCode(cellElement);
            } else if (cellElement >=37 ){
                cellElement+=60;
                shortURL+=String.fromCharCode(cellElement);
            } else {
                shortURL+=cellElement;
            }
        }
        shortURL='localhost:3000/'+shortURL;
        var linkshortener = {
            longurl: longURL,
            shorturl: shortURL
        };
        // We make an ajax request to our server in order to store the data in our MongoDB database.
        $.ajax({
          type:     'POST',
          url:      '/',
          data:     linkshortener,
          success:  function(){
            // Once the data is stored we present to the user the shorter link they can use to accress the page.
            var shortURLDiv = $('#shortURL');
            var shortURLtext = $('<a></a>').text(shortURL);
            shortURLtext.attr('href',shortURL);
            var shortURLheader = $('<h2></h2>').text('This is your shortened URL:');
            shortURLDiv.append(shortURLheader,shortURLtext);
          }
        });
        return false;
    });

  });
