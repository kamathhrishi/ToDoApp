
document.getElementById('Web_Form').addEventListener('submit',Accept);

function Accept(){


   var WebsiteName=document.getElementById('Web_name').value;
   var WebsiteURL=document.getElementById('Web_URL').value;

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

   e.preventDefault();

}

function FetchBookmarks()
{

   var bookmarks=localStorage.getItem('Bookmarks');



}
