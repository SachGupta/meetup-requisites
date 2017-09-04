$(document).ready(function() {

  window.addEventListener('load', function() {
    
      // Check if Web3 has been injected by the browser:
      if (typeof web3 !== 'undefined') {
        // You have a web3 browser! Continue below!
        startApp(web3);
      } else {
         // Warn the user that they need to get a web3 browser
         // Or install MetaMask, maybe with a nice graphic.
      }
    
    })

    $( "#submit" ).on( "click", function() {
      alert("this was hit");
      var FirstName = $('#firstName').val();
      var MiddleName = $('#middleName').val();
      var LastName = $('#lastName').val();
      var JoinDate = $('#joinDate').val();
      var BirthDate = $('#birthDate').val();
      var City = $('#city').val();
      var Email = $('#email').val();
      var Nationality = $('#nationality').val();
      var Gender = $('#gender').val();

    });

      

});


// var abiArray = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"balanceoOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"}]';



//  web3.eth.getBalance("0x1D11CbABDf4BccFee67D606c6c9C6C75E037AaD0", 
//   function(err, res){
//     document.getElementById("demo1").innerHTML = res;
    
//   })




//   web3.eth.getTransactionCount("0x1D11CbABDf4BccFee67D606c6c9C6C75E037AaD",
//   function(err,res){
//     document.getElementById("demo2").innerHTML = res;
//   })







  // var AbiOfContract = "60606040526000805460ff191690556004805460a060020a60ff0219169055341561002657fe5b604051606080610ec28339810160409081528151602083015191909201515b5b60048054600160a060020a03191633600160a060020a03161790555b600160a060020a03831615156100785760006000fd5b60058054600160a060020a031916600160a060020a038581169190911791829055604080516000602091820181905282517f18160ddd000000000000000000000000000000000000000000000000000000008152925194909316936318160ddd936004808501948390030190829087803b15156100f157fe5b6102c65a03f115156100ff57fe5b50506040805151600655600160a060020a038316600090815260026020522083905550600182905561013c64010000000061089761014682021704565b505b5050506101e7565b60045460009033600160a060020a039081169116146101655760006000fd5b60045474010000000000000000000000000000000000000000900460ff161561018e5760006000fd5b6004805460a060020a60ff021916740100000000000000000000000000000000000000001790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a15060015b5b5b90565b610ccc806101f66000396000f300606060405236156100eb5763ffffffff60e060020a60003504166306fdde0381146100ed578063095ea7b31461017d578063158ef93e146101b057806318160ddd146101d457806323b872dd146101f65780632988e36b1461022f5780632a1eafd91461025f578063313ce567146102815780633f4ba83a146102a35780634b92738e146102c75780635c975abb1461032e57806370a08231146103525780638456cb59146103805780638da5cb5b146103a457806395d89b41146103d0578063a9059cbb14610460578063b85e0aca14610493578063dd62ed3e146104bf578063f2fde38b146104f3575bfe5b34156100f557fe5b6100fd610511565b604080516020808252835181830152835191928392908301918501908083838215610143575b80518252602083111561014357601f199092019160209182019101610123565b505050905090810190601f16801561016f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018557fe5b61019c600160a060020a0360043516602435610538565b604080519115158252519081900360200190f35b34156101b857fe5b61019c6105dd565b604080519115158252519081900360200190f35b34156101dc57fe5b6101e46105e6565b60408051918252519081900360200190f35b34156101fe57fe5b61019c600160a060020a03600435811690602435166044356105ec565b604080519115158252519081900360200190f35b341561023757fe5b61019c600160a060020a036004351661061d565b604080519115158252519081900360200190f35b341561026757fe5b6101e4610789565b60408051918252519081900360200190f35b341561028957fe5b6101e461078f565b60408051918252519081900360200190f35b34156102ab57fe5b61019c610794565b604080519115158252519081900360200190f35b34156102cf57fe5b61019c6004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506107f295505050505050565b604080519115158252519081900360200190f35b341561033657fe5b61019c610868565b604080519115158252519081900360200190f35b341561035a57fe5b6101e4600160a060020a0360043516610878565b60408051918252519081900360200190f35b341561038857fe5b61019c610897565b604080519115158252519081900360200190f35b34156103ac57fe5b6103b4610916565b60408051600160a060020a039092168252519081900360200190f35b34156103d857fe5b6100fd610925565b604080516020808252835181830152835191928392908301918501908083838215610143575b80518252602083111561014357601f199092019160209182019101610123565b505050905090810190601f16801561016f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561046857fe5b61019c600160a060020a0360043516602435610945565b604080519115158252519081900360200190f35b341561049b57fe5b6103b4610974565b60408051600160a060020a039092168252519081900360200190f35b34156104c757fe5b6101e4600160a060020a0360043581169060243516610983565b60408051918252519081900360200190f35b34156104fb57fe5b61050f600160a060020a03600435166109b0565b005b60408051808201909152600a815260b160020a692932b83aba30ba34b7b702602082015281565b600081158061056a5750600160a060020a03338116600090815260036020908152604080832093871683529290522054155b15156105765760006000fd5b600160a060020a03338116600081815260036020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b60005460ff1681565b60015481565b60045460009060a060020a900460ff16156106075760006000fd5b6106128484846109fc565b90505b5b9392505050565b600454600090819033600160a060020a0390811691161461063e5760006000fd5b60005460ff161561064f5760006000fd5b600160a060020a03831660009081526002602052604081205411156106775760009150610781565b6005546040805160006020918201819052825160e060020a6370a08231028152600160a060020a038881166004830152935193909416936370a08231936024808301949391928390030190829087803b15156106cf57fe5b6102c65a03f115156106dd57fe5b5050604051519150508015156106f65760009150610781565b600160a060020a0383166000908152600260205260409020819055600154610724908263ffffffff610aff16565b600155604080518281529051600160a060020a038516917f8b80bd19aea7b735bc6d75db8d6adbe18b28c30d62b3555245eb67b2340caedc919081900360200190a2600154600654141561077c5761077a610b19565b505b600191505b5b5b50919050565b60065481565b601281565b60045460009033600160a060020a039081169116146107b35760006000fd5b60045460a060020a900460ff1615156107cc5760006000fd5b60005460ff1615156107de5760006000fd5b6107e6610b41565b50600190505b5b5b5b90565b600454600090819033600160a060020a039081169116146108135760006000fd5b60005460ff16156108245760006000fd5b5060005b825181101561077c57610851838281518110151561084257fe5b9060200190602002015161061d565b505b600101610828565b600191505b5b5b50919050565b60045460a060020a900460ff1681565b600160a060020a0381166000908152600260205260409020545b919050565b60045460009033600160a060020a039081169116146108b65760006000fd5b60045460a060020a900460ff16156108ce5760006000fd5b6004805460a060020a60ff02191660a060020a1790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a15060015b5b5b90565b600454600160a060020a031681565b604080518082019091526003815260ec60020a6205245502602082015281565b60045460009060a060020a900460ff16156109605760006000fd5b61096a8383610bbb565b90505b5b92915050565b600554600160a060020a031681565b600160a060020a038083166000908152600360209081526040808320938516835292905220545b92915050565b60045433600160a060020a039081169116146109cc5760006000fd5b600160a060020a038116156109f75760048054600160a060020a031916600160a060020a0383161790555b5b5b50565b600160a060020a038084166000908152600360209081526040808320338516845282528083205493861683526002909152812054909190610a43908463ffffffff610aff16565b600160a060020a038086166000908152600260205260408082209390935590871681522054610a78908463ffffffff610c6916565b600160a060020a038616600090815260026020526040902055610aa1818463ffffffff610c6916565b600160a060020a03808716600081815260036020908152604080832033861684528252918290209490945580518781529051928816939192600080516020610c81833981519152929181900390910190a3600191505b509392505050565b600082820183811015610b0e57fe5b8091505b5092915050565b6000805460ff1615610b2b5760006000fd5b506000805460ff191660019081179091555b5b90565b60045460009033600160a060020a03908116911614610b605760006000fd5b60045460a060020a900460ff161515610b795760006000fd5b6004805460a060020a60ff02191690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a15060015b5b5b90565b600160a060020a033316600090815260026020526040812054610be4908363ffffffff610c6916565b600160a060020a033381166000908152600260205260408082209390935590851681522054610c19908363ffffffff610aff16565b600160a060020a03808516600081815260026020908152604091829020949094558051868152905191933390931692600080516020610c8183398151915292918290030190a35060015b92915050565b600082821115610c7557fe5b508082035b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a723058206e98be0ec21aa3ed0779e909a929dbf521053a9c0f6f4fc25da39419d4a747ca002900000000000000000000000048c80f1f4d53d5951e5d5438b54cba84f29f32a50000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000e1e212c353f7a682693c198ba5ff85849f8300cc";
  // var contractAbi = web3.eth.contract(AbiOfContract);
  // var myContract = contractAbi.at("0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6");
  // // suppose you want to call a function named myFunction of myContract
  // var getData = myContract.name.getData();
  // //finally paas this data parameter to send Transaction
  // web3.eth.sendTransaction({to:0x1D11CbABDf4BccFee67D606c6c9C6C75E037AaD0, from:0x1D11CbABDf4BccFee67D606c6c9C6C75E037AaD0, data: getData});

  // alert(getData);