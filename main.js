 
    var ofisurunleri=["Organizer Düzenleyici",100,"Yazıcı",120,"Ajanda",30,"İsimlik Seti",50];
    var kırtasiyeurunleri=["Kalemler",150,"Boyalar",80,"Kitaplar",60,"Oyuncaklar",130];
    var uruntipi,urunfiyati,urunadedi,taksitsayisi;

    var aratoplam,odenecektutar,kargoucreti=7;
    var i;
    var secenek;
     var liste;

function taksit()
{ for(i=0;i<=6;i=i+3)
    {var secenek=document.createElement("option");
        document.getElementById("uruntaksidi").options.add(secenek);
        secenek.text=i; }}

function adet()
{for(i=1;i<=10;i++)
    { var secenek=document.createElement("option");
        document.getElementById("urunadedi").options.add(secenek);
        secenek.text=i;
        secenek.value=i; }
}

function listeDoldur()
{ document.querySelectorAll('#urunlistesi option').forEach(option => option.remove());
  for(var i=0;i<document.getElementsByName("uruntipi").length;i++)
    { if(document.getElementsByName("uruntipi")[i].checked)
        { urunTipi=document.getElementsByName("uruntipi")[i].value;}
    }

     if(uruntipi=="O")
    {for(i=0;i<ofisurunleri.length;i=i+2)
        { secenek=document.createElement("option");
            document.getElementById("urunlistesi").options.add(secenek);
            secenek.text=ofisurunleri[i];
            secenek.value=ofisurunleri[i+1]; }
    }
    else if(uruntipi=="K")
    { for(i=0;i<kırtasiyeurunleri.length;i=i+2)
        {  secenek=document.createElement("option");
            document.getElementById("urunlistesi").options.add(secenek);
            secenek.text=kırtasiyeurunleri[i];
            secenek.value=kırtasiyeurunleri[i+1];} }
}

function fiyatHesapla()
{ liste=document.getElementById("urunadedi");
    urunadedi=liste.options[liste.selectedIndex].value;
  liste=document.getElementById("urunlistesi");
    urunaiyati=liste.options[liste.selectedIndex].value;
  liste=document.getElementById("uruntaksidi");
    taksitSayisi=liste.options[liste.selectedIndex].value;
aratoplam=urunadedi*urunfiyati;

    if(taksitsayisi==3)
    {
        aratoplam=aratoplam*1.1;
    }
    else if(taksitSayisi==6)
    {
        araToplam=araToplam*1.2;
    }
 document.querySelector("#txtAratoplam").value=aratoplam.toFixed(2);
if(araToplam>=100)
    {kargoucreti=0;
        document.getElementById("txtkargo").value=kargoucreti;
    }
    else 
    {kargoucreti=7;
        document.getElementById("txtkargo").value=kargoucreti;
    }
    odenecektutar=aratoplam+kargoucreti;
    document.getElementById("sonuc").innerHTML="Toplam tutar: "+odenecektutar.toFixed(2);
}