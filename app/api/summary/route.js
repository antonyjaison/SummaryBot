import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getSession } from "next-auth/react";
import Summary from "@models/summary";

export async function POST(request) {
  const res = await request.json();
  const { url, userId } = res;

  console.log(userId);

  const data = "lorem clacnmkdkcxc cdcmd";

  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: url,
      length: "3",
    },
    headers: {
      "X-RapidAPI-Key": "c71c00ea41msh797320ffb927cf1p1dc062jsnbb4cef8cff5b",
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  const summaryExist = await Summary.findOne({ url: url });

  if (summaryExist) {
    console.log(summaryExist);
    return NextResponse.json({
      status: true,
      summary: summaryExist,
    });
  }

  try {
    const response = await axios.request(options);
    console.log(response.data);

    await Summary.create({
      summary: response.data.summary,
      user: userId,
      url: url,
    });

    return NextResponse.json({
      status: true,
      summary: response.data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: false,
      error: error,
    });
  }
}
