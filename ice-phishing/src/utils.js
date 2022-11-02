const { ethers } = require("forta-agent");
const { timePeriodDays } = require("../bot-config.json");

const ONE_DAY = 24 * 60 * 60;
const TIME_PERIOD = timePeriodDays * ONE_DAY;
const ADDRESS_ZERO = ethers.constants.AddressZero;
const SUSPICIOUS_CONTRACT_CREATION_BOT_ID = "0x457aa09ca38d60410c8ffa1761f535f23959195a56c9b82e0207801e86b34d99";
const safeBatchTransferFrom1155Sig = "2eb2c2d6";

const permitFunctionABI =
  "function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external";

const daiPermitFunctionABI =
  "function permit(address holder, address spender, uint256 nonce, uint256 expiry, bool allowed, uint8 v, bytes32 r, bytes32 s) external";

const approvalEventErc20ABI = "event Approval(address indexed owner, address indexed spender, uint256 value)";
const approvalEventErc721ABI =
  "event Approval(address indexed owner, address indexed spender, uint256 indexed tokenId)";
const approvalForAllEventABI = "event ApprovalForAll(address indexed owner, address indexed spender, bool approved)";

const transferEventErc20ABI = "event Transfer(address indexed from, address indexed to, uint256 value)";
const transferEventErc721ABI = "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)";

const erc1155transferEventABI = [
  "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 tokenId, uint256 value)",
  "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] tokenIds, uint256[] values)",
];

const ERC_20_721_ABI = ["function balanceOf(address) public view returns (uint256)"];
const ERC_20_721_INTERFACE = new ethers.utils.Interface(ERC_20_721_ABI);

const ERC_1155_ABI = ["function balanceOf(address owner, uint256 id) external view returns (uint256)"];
const ERC_1155_INTERFACE = new ethers.utils.Interface(ERC_1155_ABI);

module.exports = {
  TIME_PERIOD,
  ADDRESS_ZERO,
  SUSPICIOUS_CONTRACT_CREATION_BOT_ID,
  safeBatchTransferFrom1155Sig,
  permitFunctionABI,
  daiPermitFunctionABI,
  approvalEventErc20ABI,
  approvalEventErc721ABI,
  approvalForAllEventABI,
  transferEventErc20ABI,
  transferEventErc721ABI,
  erc1155transferEventABI,
  ERC_20_721_ABI,
  ERC_20_721_INTERFACE,
  ERC_1155_ABI,
  ERC_1155_INTERFACE,
};
