import { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../const";
import { NextResponse } from "next/server";

const headers = {
  "Authorization": "Bearer " + process.env.TOKEN,
  "Content-Type": "application/json",
};

export async function GET(req: NextApiRequest) {
  try {
    const response = await fetch(API_BASE_URL + "account", { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
