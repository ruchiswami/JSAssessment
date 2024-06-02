/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/
// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
// create a variable to hold your NFT's
let NFTs = [];

function mintNFT(_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
        name: _name,
        eyeColor: _eyeColor,
        shirtType: _shirtType,
        bling: _bling
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID:\t\t" + (i + 1));
        console.log("Name:\t\t" + NFTs[i].name);
        console.log("Eye Color:\t" + NFTs[i].eyeColor);
        console.log("Shirt Type:\t" + NFTs[i].shirtType);
        console.log("Bling:\t\t" + NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs Minted: " + NFTs.length);
}

// call your functions below this line
mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Sue", "Green", "T-Shirt", "Silver Necklace");
mintNFT("Tim", "Brown", "Sweater", "Diamond Ring");
mintNFT("John", "Black", "Jacket", "Platinum Watch");

listNFTs();
getTotalSupply();
