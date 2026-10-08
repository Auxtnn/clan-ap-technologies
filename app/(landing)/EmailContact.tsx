"use client";

import { useState } from "react";
import { FaEnvelope, FaCheck, FaRegCopy } from "react-icons/fa6";

const EMAIL = "contact@clanap.com";
const SUBJECT = "Inquiry from Clan-AP Website";

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}`;

export function EmailIconLink() {
  return (
    <a
      href={gmailUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
      title="Email us"
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center text-gray-500 transition-colors hover:text-amber-600"
    >
      <FaEnvelope size={18} />
    </a>
  );
}

export function EmailCopyLine() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the visible address is still selectable
    }
  };

  return (
    <div className="mb-3 flex items-center justify-center gap-2 text-gray-500">
      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
        className="underline hover:text-amber-600"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        title={copied ? "Copied!" : "Copy email"}
        className="inline-flex h-7 w-7 items-center justify-center rounded text-gray-500 transition-colors hover:text-amber-600"
      >
        {copied ? <FaCheck size={14} className="text-green-600" /> : <FaRegCopy size={14} />}
      </button>
    </div>
  );
}