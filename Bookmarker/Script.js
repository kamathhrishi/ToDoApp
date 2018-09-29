
document.getElementById('Web_Form').addEventListener('submit',Accept);

function Accept(){


   var WebsiteName=document.getElementById('Web_name').value;
   var WebsiteURL=document.getElementById('Web_URL').value;

   if(!WebsiteName || !WebsiteURL)
   {

      alert("Please Enter complete Data");


   }
   else{

   var bookmark={

      Name:WebsiteName,
      URL: WebsiteURL

   };

   if(localStorage.getItem('Bookmarks')===null)
   {

       var bookmarks=[];

       bookmarks.push(bookmark);
       localStorage.setItem('Bookmarks',JSON.stringify(bookmarks));

   }
   else{

      var bookmarks=JSON.parse(localStorage.getItem('Bookmarks'));
      bookmarks.push(bookmark);
      localStorage.setItem('Bookmarks',JSON.stringify(bookmarks));

   }

 }

   e.preventDefault();

}

function DeleteBookmark(Name)
{

     Saved_Bookmarks.innerHTML="";
     var bookmarks=JSON.parse(localStorage.getItem('Bookmarks'));

     for(var i=0;i<bookmarks.length;i++)
     {


          if(bookmarks[i].Name==Name)
          {


               bookmarks.splice(i,1);


          }


     }

     localStorage.setItem('Bookmarks',JSON.stringify(bookmarks));

     FetchBookmarks();


}

function FetchBookmarks()
{

   var bookmarks=JSON.parse(localStorage.getItem('Bookmarks'));

   for(var i=0;i<bookmarks.length;i++)
   {
          var name=bookmarks[i].Name;
          var url=bookmarks[i].URL;

          Saved_Bookmarks.innerHTML+='<div class="bookmark_tag">'+
                                     '<p>'+name+
                                     '<a href="'+url+'"'+'style="display:inline-block;" class="btn btn-light">Visit</a>'+
                                     '<a style="display:inline-block;" '+
                                     'class="btn btn-danger" '+
                                     'onclick="DeleteBookmark('+"'"+name+"'"+')">'+
                                     'Delete</a></p>'+
                                     '</div>'

   }



}
