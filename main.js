   var QuotesAr=[
      { Quote:"“Be yourself; everyone else is already taken.”", 
      Author:"― Oscar Wilde"},

      {Quote: "“So many books, so little time.”" ,
     Author:"― Frank Zappa"},

    {Quote: "“Be the change that you wish to see in the world.”",
    Author:" ― Mahatma Gandhi"},

    {Quote:"“If you tell the truth, you don't have to remember anything.”", 
     Author:"― Mark Twain "},

    {Quote:"“A friend is someone who knows all about you and still loves you.” ",
      Author:"― Elbert Hubbard"}
 ]




function randomN(){
    return Math.floor(Math.random()*QuotesAr.length)
}


function  NewQuote(){
  
    document.getElementById("outPutQuote").innerHTML = QuotesAr[randomN()].Quote;
    document.getElementById("outPutWriter").innerHTML = QuotesAr[randomN()].Author;

}



