import Web3 from "web3";

window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);
const address='0x43ee246542F3307F74e31D2Ecfbe62562197ba26'

const abi= [{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"b_Order","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"b_orders","outputs":[{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"finalPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"buyOrderIndex","type":"uint256"},{"internalType":"uint256","name":"sellOrderIndex","type":"uint256"}],"name":"matchOrders","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"placeOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"s_orders","outputs":[{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"finalPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"s_ordersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]



const minor = new web3.eth.Contract(abi, address);
minor.setProvider(web3.currentProvider);

export default minor