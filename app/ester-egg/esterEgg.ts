function printEsterEgg() {
  console.log(`
    ooooo   ooooo  o8o                            
     888     888   '"'                            
     888     888  oooo  oooo    ooo   .oooo.       
     888ooooo888   888   '88.  .8'   'P  )88b      
     888     888   888    '88..8'    .oP"888      
     888     888   888     '888'    d8(  888  .o. 
    o888o   o888o o888o     .8'      Y888""8o Y8P 
                        .o..P                  '  
                        'Y8P'                     `);
  const puzzle = "Hello_World";
  const encrypted = puzzle
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 5))
    .join("");

  console.log("Solve this encryption:");
  console.log(`%cEncrypted: ${encrypted}`, "font-size: 1.2rem;");

  // Solution: Replace each character with the one 5 positions before in the ASCII table
  // const decrypted = encrypted
  //   .split("")
  //   .map((char) => String.fromCharCode(char.charCodeAt(0) - 5))
  //   .join("");

  // console.log(`Decrypted: ${decrypted}`);
}

export default printEsterEgg;
