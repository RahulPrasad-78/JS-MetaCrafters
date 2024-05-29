/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const NFTs = [];

function mintNFT (N_name, N_ID_No, N_age, N_collage_year) {
    const ObjN = {
        "name" : N_name,
        "idNumber" : N_ID_No,
        "age" : N_age,
        "collageYear" : N_collage_year
    };
    NFTs.push(ObjN);
    console.log("   Minted  " + N_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(var i=0; i<NFTs.length; i++){
        console.log("\n  Minted " + (i+1)+ "." + NFTs[i].name);
        console.log("Name        : " + NFTs[i].name);
        console.log("ID Number   : " + NFTs[i].idNumber);
        console.log("Age         : "+ NFTs[i].age);
        console.log("Collage Year: " + NFTs[i].collageYear);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Number of NFT : " + NFTs.length);
}

// call your functions below this line
mintNFT ("Rahul", 167, 19, "2nd");
mintNFT ("Rohit", 199, 20, "3rd");
mintNFT ("Ayush", 165, 20, "2nd");
mintNFT ("Aditya", 160, 18, "1st");
listNFTs ();
getTotalSupply ();
