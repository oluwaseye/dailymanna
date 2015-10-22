body();

function reload(){
     $("#refresh").bind("click", function() {
     //$("#sb-site").load("page.html");
    body();
     });
    
}

function body(){
 
// eventListener for checking offline
document.addEventListener("offline", onOffline, false);
  

//load the inline page. This is useful for reloading so the whole page does not reload.
$("#ourmanna-verse").empty();
$("#ourmanna-verse").load("page.html");
   
    //load content
    $.getScript( "http://ourmanna.com/verses/api/js" )
  .done(function( script, textStatus ) {
    console.log( textStatus );
  }).done(function( script, textStatus ) {
     $( "#share-button" ).removeClass( "disabled" );
        $( ".fa-refresh" ).removeClass( "fa-spin" );
  }).done(function( script, textStatus ) {
     content();
  })
  .fail(function( jqxhr, settings, exception ) {
    $( "div.log" ).text( "Triggered ajaxError handler." );
});
    
}


//check if offline, when connection goes off
function onOffline() {
    // Handle the offline event
    
    //remove the loader div
    $( ".loader" ).remove();
    //empty div 
    $("#ourmanna-verse").empty();
    //Show the no internet info
    $( "#ourmanna-verse" ).append('<div id="mannaverse-container"><p id="mannaverse"><i class="fa fa-warning fa-2x"></i><br/>No Network   </p><p>Please check your connection and try again.</p><br/><a href="" class="btn btn-default btn-lg" onclick="reload()"><i class="fa fa-refresh"></i> Retry</a></div>');
    
    //disable share button
    $( "#share-button" ).addClass( "disabled" );
    //stop the referesh spinner
    $( ".fa-refresh" ).removeClass( "fa-spin" );
}; 

//check when connection comes back on
document.addEventListener("online", onOnline, false);

function onOnline() {
    // Handle the online event
    //just run the body method
    body();
}


function content(){
    var quote = $('#mannaverse').text();
    var  ref = $('#mannaverse-reference').text();
    var message = ' Daily Manna: ';
    //console.log(quote);
    reading = quote+' - '+ref+' - '+message;
    console.log(reading);
}




    