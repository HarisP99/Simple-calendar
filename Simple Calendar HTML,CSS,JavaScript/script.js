function calendar(){
    var day=['Ponedjeljak','Utorak','Srijeda','Cetvrtak','Petak','Subota','Nedjelja'];
    var month= ["Januar","Februar","Mart","April","Maj","Juni","Juli","Avgust","Septembar","Oktobar","Novembar","Decembar"];
    var d=new Date();
    setText('calendar-day', day[d.getDay()]);
    setText('calendar-date',d.getDate());
    setText('calendar-month-year',month[d.getMonth()]+'  '+(1900+d.getYear()));
};

function setText(id, val){
    if(val<10){
        val='0'+val;
    }
document.getElementById(id).innerHTML=val;
};
// call calendar()

window.onload=calendar;