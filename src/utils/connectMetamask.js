export default async function ConnectMetamask() {
  try{
    if (!window.ethereum) {
      return console.log("Please Install Metamask")
    }

    const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
    if(!accounts.length) return console.log("No Account Found");
    return accounts[0];
  }catch(e){
    console.log(e)
  }
}