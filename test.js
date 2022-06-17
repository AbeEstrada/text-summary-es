import summary from "./index.js";

const text = `La bicicleta, coloquialmente llamada bici (también denominada como cicla o ciclo en Colombia, Cuba y Uruguay, chiva, en México y cleta o chancha en Chile), es un vehículo de transporte personal de propulsión humana. Es impulsada por el propio viajero, que acciona el vehículo con el esfuerzo muscular de las piernas, en particular mediante pedales o manivelas. Sus componentes básicos son dos ruedas,generalmente de igual diámetro y dispuestas en línea, un sistema de transmisión de pedales, un cuadro que le da la estructura e integra los componentes, un manillar para controlar la dirección y un sillín para sentarse. El desplazamiento se obtiene al girar con las piernas los pedales dispuestos de forma simétrica, cada uno con una palanca conocida como manivela están ensamblados en el cuadro, y en general el pedal derecho es el que tiene la estrella mayor o plato donde se monta la cadena que a su vez hace girar el piñón, el cual finalmente hace girar la rueda trasera sobre el suelo provocando entonces el desplazamiento. El diseño y la configuración básicos de la bicicleta han cambiado poco desde la primera transmisión de cadena desarrollada alrededor del año 1885.
La paternidad de la bicicleta se le atribuye al barón Karl Drais, inventor alemán nacido en 1785. Su rudimentario artefacto, creado alrededor de 1817, se impulsaba apoyando los pies alternativamente sobre el suelo. En la actualidad hay más de mil millones de bicicletas en el mundo, utilizadas tanto como medio de transporte como vehículo de ocio.
Es un medio de transporte sano, ecológico, sostenible y económico, válido para trasladarse tanto por ciudad como por zonas rurales. Su uso está generalizado en la mayor parte de Europa, y llega a ser, en países como Suiza, Alemania, Países Bajos, Bélgica, algunas zonas de Polonia y los países escandinavos, uno de los principales medios de transporte. En Asia, especialmente en China y la India, es el principal medio de transporte.
Las bicicletas fueron muy populares en la década de 1890 y, más tarde, en las de 1950 y 1970. Actualmente está experimentando un nuevo auge y su uso crece considerablemente en todo el mundo debido al alto precio del combustible, pues la bicicleta resulta muy ecológica y económica.`;

const summaryNoQuestion = summary({ text });

const summaryWithQuestion = summary({
    text,
    question: "¿Cuál es el precio de una bicicleta?",
    numberSentences: 1,
});

console.log(summaryNoQuestion);
console.log("-");
console.log(summaryWithQuestion);
