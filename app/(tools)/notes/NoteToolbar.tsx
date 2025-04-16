"use client";

import {
  Check,
  Copy,
  Download,
  Moon,
  SpellCheck,
  Sun,
  Trash,
  Type,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type WidthOption = "full" | "large" | "medium" | "tight";

const NoteToolbar = ({
  letterCount,
  wordCount,
  onDelete,
  onCopy,
  text,
  widthOption,
  onWidthChange,
  fontSize,
  onFontSizeChange,
  defaultFontSize,
  spellCheck,
  onSpellCheckToggle,
}: NotesToolbarProps) => {
  return (
    <div className="sticky bottom-0 flex w-full items-center justify-between border-t bg-background/40 p-2 text-xs text-muted-foreground backdrop-blur-sm">
      <div className="flex items-center space-x-3">
        <WidthSelector
          widthOption={widthOption}
          onWidthChange={onWidthChange}
        />

        <FontSizeControl
          fontSize={fontSize}
          onFontSizeChange={onFontSizeChange}
          defaultFontSize={defaultFontSize}
        />

        <ActionButtons
          onDelete={onDelete}
          onCopy={onCopy}
          text={text}
          spellCheck={spellCheck}
          onSpellCheckToggle={onSpellCheckToggle}
        />
      </div>

      <WordCount letterCount={letterCount} wordCount={wordCount} />
    </div>
  );
};

interface NotesToolbarProps {
  letterCount: number;
  wordCount: number;
  onDelete: () => void;
  onCopy: () => void;
  text: string;
  widthOption: WidthOption;
  onWidthChange: (value: string) => void;
  fontSize: number;
  onFontSizeChange: (value: number[]) => void;
  defaultFontSize: number;
  spellCheck: boolean;
  onSpellCheckToggle: () => void;
}

// Width Selector Component
const WidthSelector = ({
  widthOption,
  onWidthChange,
}: {
  widthOption: WidthOption;
  onWidthChange: (value: string) => void;
}) => {
  return (
    <div className="flex items-center">
      <Select
        defaultValue={widthOption}
        value={widthOption}
        onValueChange={onWidthChange}
      >
        <SelectTrigger className="h-5 w-[60px] border-none bg-transparent p-0 pl-1.5 text-xs focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
          <SelectValue placeholder="Width" className="text-xs" />
        </SelectTrigger>
        <SelectContent className="p-1 text-xs">
          <SelectItem value="full" className="py-0.5 text-xs">
            Full
          </SelectItem>
          <SelectItem value="large" className="py-0.5 text-xs">
            Large
          </SelectItem>
          <SelectItem value="medium" className="py-0.5 text-xs">
            Medium
          </SelectItem>
          <SelectItem value="tight" className="py-0.5 text-xs">
            Tight
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const FontSizeControl = ({
  fontSize,
  onFontSizeChange,
  defaultFontSize,
}: {
  fontSize: number;
  onFontSizeChange: (value: number[]) => void;
  defaultFontSize: number;
}) => {
  const resetFontSize = () => {
    onFontSizeChange([defaultFontSize]);
  };

  return (
    <div className="flex items-center space-x-1.5">
      <Type className="h-3 w-3" />
      <div className="w-[60px]">
        <Slider
          value={[fontSize]}
          min={12}
          max={32}
          step={1}
          onValueChange={onFontSizeChange}
          className="h-3"
        />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0 text-[10px] leading-none"
              onClick={resetFontSize}
            >
              {fontSize}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            Reset font size
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative h-6 w-6 p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

const ActionButtons = ({
  onDelete,
  onCopy,
  text,
  spellCheck,
  onSpellCheckToggle,
}: {
  onDelete: () => void;
  onCopy: () => void;
  text: string;
  spellCheck: boolean;
  onSpellCheckToggle: () => void;
}) => {
  const handleCopy = () => {
    onCopy();
  };

  const handleDownload = () => {
    if (text.trim() === "") {
      toast.error("Nothing to download");
      return;
    }

    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `notes-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Downloaded notes");
  };

  return (
    <div className="flex space-x-1.5">
      <ThemeToggle />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={onSpellCheckToggle}
          >
            <div className="relative">
              <SpellCheck className="h-3 w-3" />
              {spellCheck ? (
                <Check className="absolute -bottom-0.5 -right-0.5 h-2 w-2 text-green-500" />
              ) : (
                <X className="absolute -bottom-0.5 -right-0.5 h-2 w-2 text-red-500" />
              )}
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="text-xs">
          {spellCheck ? "Disable spell check" : "Enable spell check"}
        </TooltipContent>
      </Tooltip>

      <Button
        variant="ghost"
        size="sm"
        className="h-6 w-6 p-0"
        onClick={onDelete}
      >
        <Trash className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-6 w-6 p-0"
        onClick={handleCopy}
      >
        <Copy className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-6 w-6 p-0"
        onClick={handleDownload}
      >
        <Download className="h-3 w-3" />
      </Button>
    </div>
  );
};

// Word Count Component
const WordCount = ({
  letterCount,
  wordCount,
}: {
  letterCount: number;
  wordCount: number;
}) => {
  return (
    <div className="flex space-x-2">
      <div>{letterCount} characters</div>
      <div>{wordCount} words</div>
    </div>
  );
};

export default NoteToolbar;
