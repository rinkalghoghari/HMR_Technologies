
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SocialShare({ 
  url = window.location.href, 
  title = document.title,
  description = "AI-Powered Development Services | HMR Technologies",
  className = ""
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('facebook')}
        className="p-2"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('twitter')}
        className="p-2"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('linkedin')}
        className="p-2"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="p-2"
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  );
}
