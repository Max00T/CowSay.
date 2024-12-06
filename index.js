import cowsay from "cowsay";
import "dotenv/config";

console.log(cowsay.say({
    text : `I'm ${process.env.NAME} form ${process.env.CAMPUS}`,
    e : "oO",
    T : "U "
}));