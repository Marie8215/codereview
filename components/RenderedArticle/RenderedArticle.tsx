"use client";
import parse, { DOMNode, domToReact, Element } from "html-react-parser";
import DOMPurify from "dompurify";
import { useRef, useState } from "react";
import "highlight.js/styles/github.css"; // или любой другой стиль
import "./RenderedArticle.css";

type RenderedArticleProps = {
  content?: string;
  promo?: React.ReactNode;
};

const extractText = (node: DOMNode): string => {
  if ("data" in node) {
    return node.data;
  }

  if ("children" in node && Array.isArray(node.children)) {
    return node.children.map((c) => extractText(c as DOMNode)).join("");
  }

  return "";
};

const CodeBlock = ({
  language,
  languageClass,
  codeText,
  renderedCode,
}: {
  language: string;
  languageClass: string;
  codeText: string;
  renderedCode: React.ReactNode;
}) => {
  const [buttonText, setButtonText] = useState("Копировать");

  const copyCode = () => {
    navigator.clipboard.writeText(codeText);
    setButtonText("Скопировано!");
    setTimeout(() => setButtonText("Копировать"), 2000);
  };

  return (
    <div className="code-wrapper">
      <div className="code-control">
        <div>{language}</div>
        <button onClick={copyCode}>{buttonText}</button>
      </div>
      <pre>
        <code className={languageClass}>{renderedCode}</code>
      </pre>
    </div>
  );
};

export const RenderedArticle = ({ content, promo }: RenderedArticleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!content) return null;

  const clean = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });

  const middleIndex = Math.floor(clean.length / 2);
  const splitIndex = (() => {
    const p = clean.indexOf("</p>", middleIndex);
    const d = clean.indexOf("</div>", middleIndex);
    return p !== -1 ? p + "</p>".length : d + "</div>".length;
  })();

  const firstHalf = clean.slice(0, splitIndex);
  const secondHalf = clean.slice(splitIndex);

  const transform = (node: DOMNode) => {
    const element = node as Element;
    if (element.name === "pre") {
      const code = element.children.find(
        (n) => (n as Element)?.name === "code"
      ) as Element | undefined;

      console.log("NODENODENODE", code);

      const languageClass = code?.attribs?.class || "";
      const language =
        languageClass.split(" ")[0].replace("language-", "") || "text";
      const codeText = code ? extractText(code) : "";

      const renderedCode = code
        ? domToReact(code.children.map((c) => c as DOMNode))
        : null;

      return (
        <CodeBlock
          language={language}
          languageClass={languageClass}
          codeText={codeText}
          renderedCode={renderedCode}
        />
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`vacancy-content font-medium text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] tracking-[-0.5px] text-[#232325] md:mb-[60px] space-y-[30px]`}
    >
      {parse(firstHalf, { replace: transform })}

      {promo && (
        <aside className="mb-[30px] vacancy-content-promo">{promo}</aside>
      )}
      <div>{parse(secondHalf, { replace: transform })}</div>
    </div>
  );
};
