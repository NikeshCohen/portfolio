"use client";

import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import NoteToolbar from "./NoteToolbar";
import { useNoteSettings } from "./noteStorage";

type WidthOption = "full" | "large" | "medium" | "tight";

const widthClasses: Record<WidthOption, string> = {
  full: "w-full",
  large: "w-3/4 mx-auto",
  medium: "w-1/2 mx-auto",
  tight: "w-1/3 mx-auto",
};

const DEFAULT_FONT_SIZE = 16;

const NotesInput = () => {
  const [height, setHeight] = useState(200);
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const {
    text,
    setText,
    fontSize,
    setFontSize,
    widthOption,
    setWidthOption,
    spellCheck,
    setSpellCheck,
  } = useNoteSettings(DEFAULT_FONT_SIZE, "large", true);

  useEffect(() => {
    const updateHeight = () => {
      const newHeight = Math.max(200, window.innerHeight * 0.8);
      setHeight(newHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
    setLetterCount(text.length);
  }, [text]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleDeleteRequest = () => {
    if (text.trim() !== "") {
      setShowDeleteDialog(true);
    }
  };

  const handleConfirmDelete = () => {
    setText("");
    toast.success("Notes deleted");
    setShowDeleteDialog(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const handleWidthChange = (value: string) => {
    setWidthOption(value as WidthOption);
  };

  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0]);
  };

  const toggleSpellCheck = () => {
    setSpellCheck(!spellCheck);
  };

  return (
    <>
      <div className="relative flex h-full w-full flex-col pb-[20px]">
        <div className="flex-grow overflow-auto pb-4">
          <div className={widthClasses[widthOption]}>
            <Textarea
              placeholder="Type your notes here..."
              className="h-full w-full resize-none border-none p-8 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              style={{
                minHeight: `${height - 40}px`,
                fontSize: `${fontSize}px`,
              }}
              value={text}
              onChange={handleTextChange}
              autoFocus
              spellCheck={spellCheck}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <NoteToolbar
            letterCount={letterCount}
            wordCount={wordCount}
            text={text}
            onDelete={handleDeleteRequest}
            onCopy={handleCopy}
            widthOption={widthOption}
            onWidthChange={handleWidthChange}
            fontSize={fontSize}
            onFontSizeChange={handleFontSizeChange}
            defaultFontSize={DEFAULT_FONT_SIZE}
            spellCheck={spellCheck}
            onSpellCheckToggle={toggleSpellCheck}
          />
        </div>
      </div>

      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete all notes</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete all your notes? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NotesInput;
