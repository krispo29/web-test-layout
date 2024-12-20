"use client";
import React, { useState } from "react";

const QuestionForm = () => {
  const [content, setContent] = useState("");
  const [selectedText, setSelectedText] = useState("");

  const handleTextSelect = () => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      setSelectedText(content.substring(start, end));
    }
  };

  const applyFormat = (format: string) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    let formattedText = "";
    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        break;
      case "underline":
        formattedText = `__${selectedText}__`;
        break;
      case "center":
        formattedText = `<center>${selectedText}</center>`;
        break;
      case "left":
        formattedText = `<left>${selectedText}</left>`;
        break;
      case "right":
        formattedText = `<right>${selectedText}</right>`;
        break;
      default:
        formattedText = selectedText;
    }

    const newContent =
      content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  return (
    <div className="container mx-auto my-8 p-6 border border-blue-400 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">ตั้งกระทู้คำถาม</h2>

      <form>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="title">
            หัวข้อกระทู้
          </label>
          <input
            id="title"
            type="text"
            placeholder="หัวข้อกระทู้"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="content">
            เนื้อหา
          </label>
          <div className="mb-2 flex gap-2">
            <button
              type="button"
              onClick={() => applyFormat("bold")}
              className="px-3 py-1 border rounded hover:bg-gray-100"
              title="ตัวหนา"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat("italic")}
              className="px-3 py-1 border rounded hover:bg-gray-100 italic"
              title="ตัวเอียง"
            >
              I
            </button>
            <button
              type="button"
              onClick={() => applyFormat("underline")}
              className="px-3 py-1 border rounded hover:bg-gray-100 underline"
              title="ขีดเส้นใต้"
            >
              U
            </button>
            <button
              type="button"
              onClick={() => applyFormat("left")}
              className="px-3 py-1 border rounded hover:bg-gray-100"
              title="ชิดซ้าย"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => applyFormat("center")}
              className="px-3 py-1 border rounded hover:bg-gray-100"
              title="กึ่งกลาง"
            >
              ↔
            </button>
            <button
              type="button"
              onClick={() => applyFormat("right")}
              className="px-3 py-1 border rounded hover:bg-gray-100"
              title="ชิดขวา"
            >
              →
            </button>
          </div>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onSelect={handleTextSelect}
            placeholder="พิมพ์ข้อความที่นี่..."
            rows={6}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-center md:justify-end">
          <button
            type="submit"
            className="px-4 py-2 w-2/4 md:w-1/4 bg-[#A8AD00] text-white rounded-lg"
          >
            ส่ง
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
