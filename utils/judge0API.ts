import axios from "axios";

// Map UI language names to Judge0 language IDs
const languageMap: Record<string, number> = {
  cpp: 54,
  python: 71,
  java: 62,
  javascript: 63,
};

const API_BASE = process.env.JUDGE0_API_BASE_URL;

export async function runJudge0Code(code: string, language: string, input: string) {
  try {
    const language_id = languageMap[language];

    // Step 1: Create submission
    const submission = await axios.post(`${API_BASE}/submissions?base64_encoded=false&wait=false`, {
      source_code: code,
      language_id,
      stdin: input,
    });

    const token = submission.data.token;

    // Step 2: Poll result
    let result = null;
    while (true) {
      const res = await axios.get(`${API_BASE}/submissions/${token}?base64_encoded=false`);
      result = res.data;

      if (result.status.id <= 2) {
        await new Promise((r) => setTimeout(r, 1500)); // wait for execution
      } else {
        break;
      }
    }

    return result;
  } catch (err) {
    console.error("Judge0 Error:", err);
    throw err;
  }
}
