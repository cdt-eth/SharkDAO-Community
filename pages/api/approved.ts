// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const whitelistData = require('./whitelist.json');


export type ApprovedMintsRes = {
  ids: Array<Number>
}

type WhitelistData = {
  id: Number,
  leaves: string[]
}

export default function getApprovedMints(
  req: NextApiRequest,
  res: NextApiResponse<ApprovedMintsRes>
) {
  const { address } = req.body;
  if (address == undefined || address == null) {
    res.status(200).json({ ids: [] });
  } else {
    const lowerAddress = address.toLowerCase();

    let approved: Array<Number> = [];
    const merkleLeaves: WhitelistData[] = whitelistData['whitelist'];
    merkleLeaves.forEach((element) => {

      element['leaves'].forEach((leaf) => {
        if (leaf === lowerAddress) {
          approved.push(element['id']);
        }
      });
    });
    res.status(200).json({ ids: approved })
  }
}

