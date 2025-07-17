"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { runJudge0Code } from "@/utils/judge0API";

const languageMap: Record<string, number> = {
  cpp: 54,
  python: 71,
  java: 62,
  javascript: 63,
};

export default function ProblemPage() {
  const { id } = useParams();

  const [code, setCode] = useState("// Write your code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");

  // const handleRun = async () => {
  //   setOutput("Running...");

  //   try {
  //     const result = await runJudge0Code(code, language, input);
  //     if(result.stdout) setOutput(result.stdout);
  //     else if(result.stderr) setOutput(result.stderr);
  //     else if (result.compile_output) setOutput(result.compile_output);
  //     else setOutput("No output received");
  //   } catch (error: any) {
  //     setOutput("Error running code: " + error.message);
  //   };
  // };

  const handleRun = async () => {
    setOutput("Running...");

    try {
      const submitRes = await fetch("/api/judge0/submit", {
        method: "POST",
        body: JSON.stringify({
          source_code: code,
          language_id: languageMap[language], // Define this mapping
          stdin: input,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const { token } = await submitRes.json();

      let result = null;
      while (true) {
        const resultRes = await fetch("/api/judge0/submit", {
          method: "POST",
          body: JSON.stringify({ token }),
          headers: { "Content-Type": "application/json" },
        });

        result = await resultRes.json();

        if (result.status?.id <= 2) {
          await new Promise((res) => setTimeout(res, 1500));
        } else {
          break;
        }
      }

      if (result.stdout) setOutput(result.stdout);
      else if (result.stderr) setOutput(result.stderr);
      else if (result.compile_output) setOutput(result.compile_output);
      else setOutput("No output returned.");
    } catch (error) {
      console.error(error);
      setOutput("Something went wrong while executing the code.");
    }
  };

  return (
    <div className="min-h-screen p-6 text-white bg-background">
      <h1 className="text-3xl font-bold mb-6">Problem: {id}</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Problem Description */}
        <div className="lg:w-1/3 w-full bg-white/5 p-5 rounded-lg border border-white/10">
          <h2 className="text-xl font-semibold">Sample Problem Title</h2>
          <p className="text-white/70 mt-3 text-sm">
            Write a function that takes input and returns something useful. This
            description is static. You can fetch real data based on `{id}`.
          </p>
        </div>

        {/* Editor + I/O Section */}
        <div className="lg:w-2/3 w-full flex flex-col gap-6">
          {/* Language Selector */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Language:
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-zinc-800 border border-white/10 p-2 rounded-md text-sm w-full"
            >
              <option value="javascript">JavaScript</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </div>

          {/* Code Editor */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Code Editor</h3>
            <Editor
              height="250px"
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>

          {/* Input + Output */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Test Case Input</h3>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-zinc-900 border border-white/10 p-4 rounded-md h-24 resize-none font-mono text-sm"
              placeholder="Enter input values here..."
            />

            <button
              onClick={handleRun}
              className="bg-emerald-700 hover:bg-emerald-500/40 transition duration-200 text-white rounded-md py-2 px-4 font-semibold w-max"
            >
              Run Code
            </button>

            <div>
              <h4 className="text-md font-semibold mt-2">Output</h4>
              <pre className="bg-black/30 p-3 rounded-md mt-1 text-sm whitespace-pre-wrap min-h-[80px]">
                {output || "Output will appear here..."}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
