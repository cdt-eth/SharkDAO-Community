import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
const keccak256 = require("keccak256");
const whitelistData = require("./whitelist.json");

type MerkleProofRes = {
  proof: Array<string>;
};

type WhitelistData = {
  id: Number;
  leaves: string[];
};

function createMerkleTree(mintId: number): MerkleTree {
  const idx = [2, 5, 15, 139].indexOf(mintId);
  const data: WhitelistData = whitelistData["whitelist"][idx];
  const hashedLeaves: string[] = data["leaves"].map((x) => keccak256(x));
  const tree = new MerkleTree(hashedLeaves, keccak256, { sort: true });
  return tree;
}

export default function getProof(
  req: NextApiRequest,
  res: NextApiResponse<MerkleProofRes>
) {
  const { address, mintId } = req.body;
  const lowerAddress = address.toLowerCase();
  const merkleTree = createMerkleTree(mintId);
  const hashAddr = keccak256(lowerAddress);
  const proof = merkleTree.getHexProof(hashAddr);
  const hexProof = proof.map((x) => ethers.utils.hexlify(x));
  res.status(200).json({ proof: hexProof });
}
