import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const res = await request.json();
  const { url } = res;

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

  // return NextResponse.json({
  //   status: true,
  //   summary: {
  //     summary: data,
  //   },
  // });

  try {
    const response = await axios.request(options);
    console.log(response.data);
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
