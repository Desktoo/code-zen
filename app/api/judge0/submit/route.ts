import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { source_code, language_id, stdin, token } = await req.json();

    if (token) {
      const response = await axios.get(
        `http://3.25.80.229:2358/submissions/${token}?base64_encoded=true&wait=true`
      );

      const decode = (value: string | null) =>
        value ? Buffer.from(value, "base64").toString("utf-8") : "";

      const { stdout, stderr, compile_output, message, ...rest } = response.data;

      return NextResponse.json({
        ...rest,
        stdout: decode(stdout),
        stderr: decode(stderr),
        compile_output: decode(compile_output),
        message: decode(message),
      });
    }

    // Code submission to Judge0
    const submissionResponse = await axios.post(
      "http://3.25.80.229:2358/submissions/?base64_encoded=true&wait=false",
      {
        source_code: Buffer.from(source_code).toString("base64"),
        language_id,
        stdin: Buffer.from(stdin).toString("base64"),
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return NextResponse.json({ token: submissionResponse.data.token });
  } catch (error) {
    console.error("Error in Judge0 API:", error);
    return NextResponse.json(
      { error: "Something went wrong while processing Judge0 request" },
      { status: 500 }
    );
  }
}
