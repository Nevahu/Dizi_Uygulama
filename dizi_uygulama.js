//1- "Elma, armut, muz, Çilek" elemanlı bir dizi yap

let meyve = ["Elma", "Armut", "Muz", "Çilek"];

//2-Dzi kaç elemanlıdır?

let cevap2 = `dizide ${meyve.length} eleman var.`;
console.log(cevap2);


//3-Diznin ilk ve son elemanı nedir

let cevap3 = `dizinin ilk elemani ${meyve[0]}, son elemani ise ${meyve[3]}'dir.`;
console.log(cevap3);

//4- Elma dizinin bir elemanı mıdır?)
let var_mi = meyve.indexOf("Elma");
console.log(var_mi );

if(var_mi == 0)
{
    console.log("Elma meyve dizisinde var");
}
else
{
    console.log("Elma meyve dizisinde yok");
}


//5-Kiraz meyvesini listeni sonuna ekleyiniz.

let cevap5 = meyve.push("Kiraz");
console.log(cevap5);
console.log(meyve);

//6- Dizinin son iki elemanını siliniz

let cevap6 = meyve.splice(3, 5);
console.log(meyve);

//7-Aşağıdaki bilgelir dizi içine saklayın ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*

    öğrenci1 : Yigit Bilgi 2010 (70,60,80)
    öğrenci2 : Ada Bilgi 2012 (80,80,90)
    öğrenci3 : Ahmed Turan 2009 (60,60,70)

*/
let ogrenci1;
let ogrenci2;
let ogrenci3;

    ogrenci1 = ["Yigit Bilgi", "2010", [70,60,80]];
    ogrenci2 = [ "Ada Bilgi"  , "2012", [80,80,90]];
    ogrenci3 = ["Ahmed Turan", "2009", [60,60,70]];


let yasBulma= `Yiğitin yaşi ${2023- ogrenci1[1]}, Adanın yaşi  ${2023- ogrenci2[1]}, Ahmedin yaşi ${2023- ogrenci3[1]} .`;

console.log(yasBulma);

let notOrt = 
`yigitin not ortalamasi ${(ogrenci1[2][0]+ ogrenci1[2][1]+ogrenci1[2][2])/3}, 
Adanin not ortalamasi ${(ogrenci2[2][0]+ ogrenci2[2][1]+ogrenci2[2][2])/3}, 
Ahmedin not ortalamasi ${(ogrenci3[2][0]+ ogrenci3[2][1]+ogrenci3[2][2])/3}`

console.log(notOrt);


