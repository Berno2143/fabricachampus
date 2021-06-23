var temperaturaA=prompt("ingresa la temperatura");
var HA=prompt("ingresa la humedad ambiental");
var NT=prompt("ingresa el numero de trabjadores");
var NLT=prompt("ingresa el nivel de liquido en los tanques");

var TM=(HA % 2);
var LM=90;
var TME=90;
var TMM=30;


if( HA > TM)
    alert("CUIDADO, HUMEDAD AMBIENTAL ARRIBA DE 50%");
else
    alert("Humedad ambiental: Estable ");
if (temperaturaA > TME)
    alert("CUIDADO, TEMPERATURA AMBIENTE ARRIBA DE 90%");
else
alert("temperatura: Estable ");
      if (NT > 100)
      alert("CUIDADO, LIMITE DE PERSONAS SUPERADO");
      else
      alert("Capacidad de personas: Estable ");
      if (NLT > LM)
      alert("CUIDADO, LIMITE DE LIQUIDO SUPERADO");
      else
      alert("Capacidad de liquido: Estable ");
