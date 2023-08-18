function clock(){
    let date=new Date();
    date.setHours(0);
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let hh=h>12 ? h-12 : h;
    hh= h==0 ? 12 : h;
    hh=hh<10 ? "0"+hh : hh;
    let mm=m<10 ? "0"+m : m;
    let ss=s<10 ? "0"+s : s;
    let time=h>12 ? " PM" : " AM";

    return hh+":"+mm+":"+ss+time;
}
console.log(clock());