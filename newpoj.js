var sindex=0;

var dindex=1;


slidesection();

function slidesection(m){

    var i;

    var s=document.getElementsByClassName('slide');

    var count=s.length;

    for(i=0;i<count;i++)
    {
        s[i].style.display="none";
    }

    sindex++;

    if(sindex > count)
    {
        sindex=1;
    }
    
    s[sindex-1].style.display="block";
    setTimeout(slidesection,2000);
}

function goslide(n){

    var i;

    var s=document.getElementsByClassName('slide');

    var count=s.length;

    sindex=sindex+n;

    for( i=0; i<count; i++)
    {
        s[i].style.display="none"; 
    }
    if(sindex > count)

    sindex=1;

    if(sindex<=0)

    sindex=count;
    
    s[sindex-1].style.display="block";
    clearTimeout(mytime);
}







