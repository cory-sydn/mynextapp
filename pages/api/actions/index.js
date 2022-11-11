// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getActionsList } from "../../../component/getActionsList";

export default async function handler(req, res) {
  const { method } = req

  if(method === "GET") {
    res.send(await getActionsList())
  }
}