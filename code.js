
var urunTipi,urunSecimi,urunSayisi,urunTaksidi;
var araToplam,odenecekToplamTutar,kargoUcreti=7;
var i;
var liste,secenek;
var ofisUrunleri=["Organizer Düzenleyici",100,"Yazıcı",120,"Ajanda",30,"İsimlik Seti",50];
var kırtasiyeUrunleri=["Kalemler",150,"Boyalar",80,"Kitaplar",60,"Oyuncaklar",130];

function urunAdediDoldur()
{ for(i=1;i<=10;i++)
    {secenek=document.createElement("option");
        liste=document.getElementById("urunAdedi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i; }}

function urunTaksidiDoldur()
{for(i=0;i<=12;i=i+3)
    {secenek=document.createElement("option");
        liste=document.getElementById("urunTaksidi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;}
}

function urunleriGetir()
{document.querySelectorAll('#urunListesi option').forEach(option => option.remove());

    liste=document.getElementsByName("urunTipi");
    for(i=0;i<liste.length;i++)
    {if(liste[i].checked)
        {urunTipi=liste[i].value;}
    }
    console.log(urunTipi);

    if(urunTipi=="O")
    {for(i=0;i<ofisUrunleri.length;i=i+2)
        {secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=ofisUrunleri[i];
            secenek.value=ofisUrunleri[i+1];}
    }
    else if(urunTipi=="K")
    {
        for(i=0;i<kırtasiyeUrunleri.length;i=i+2)
        {  secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=kırtasiyeUrunleri[i];
            secenek.value=kırtasiyeUrunleri[i+1]; } }
}

function Hesapla()
{
    liste=document.getElementById("urunListesi");
    urunSecimi=liste[liste.selectedIndex].value;
    console.log(urunSecimi);

    liste=document.getElementById("urunAdedi");
    urunAdedi=liste[liste.selectedIndex].value;
    console.log(urunAdedi);

    liste=document.getElementById("urunTaksidi");
    urunTaksidi=liste[liste.selectedIndex].value;
    console.log(urunTaksidi);

    
    araToplam=urunSecimi*urunAdedi;
    

    if(urunTaksidi==3)
    {
        araToplam=araToplam*1.1;
    }
    else if(urunTaksidi==6)
    {
        araToplam=araToplam*1.2;
    }
    else if(urunTaksidi==9)
    {
        araToplam=araToplam*1.3;
    }
    else if(urunTaksidi==12)
    {
        araToplam=araToplam*1.4;
    }

    console.log(araToplam.toFixed(2));
    document.getElementById("txtAraToplam").value=araToplam.toFixed(2);
    document.getElementById("txtBirimFiyat").value=urunSecimi;


    if(araToplam<100)
    {
        document.getElementById("txtKargo").value=kargoUcreti;
        odenecekTutar=araToplam+kargoUcreti;
    }
    else if(araToplam>=100)
    {
        document.getElementById("txtKargo").value=0;
        odenecekTutar=araToplam;
    }
    
    console.log(odenecekTutar);
    document.getElementById("sonuc").innerHTML="Ödemeniz gereken toplam tutarı(Vade farkı ve kargo dahil): "+odenecekTutar;
}