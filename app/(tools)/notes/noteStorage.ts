"use client";

import { useEffect, useState } from "react";

type WidthOption = "full" | "large" | "medium" | "tight";

interface NoteSettings {
  text: string;
  fontSize: number;
  widthOption: WidthOption;
  spellCheck: boolean;
}

const STORAGE_KEY = "notepad-settings";

// Save all settings to localStorage
export const saveSettings = (settings: NoteSettings): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error("Error saving settings to localStorage:", error);
    }
  }
};

// Get all settings from localStorage
export const getSettings = (): NoteSettings | null => {
  if (typeof window !== "undefined") {
    try {
      const storedSettings = localStorage.getItem(STORAGE_KEY);
      if (storedSettings) {
        return JSON.parse(storedSettings);
      }
    } catch (error) {
      console.error("Error retrieving settings from localStorage:", error);
    }
  }
  return null;
};

// Hook to handle settings with localStorage persistence
export const useNoteSettings = (
  defaultFontSize: number = 16,
  defaultWidthOption: WidthOption = "large",
  defaultSpellCheck: boolean = true,
) => {
  const [text, setText] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(defaultFontSize);
  const [widthOption, setWidthOption] =
    useState<WidthOption>(defaultWidthOption);
  const [spellCheck, setSpellCheck] = useState<boolean>(defaultSpellCheck);
  const [loaded, setLoaded] = useState(false);

  // Load settings on mount
  useEffect(() => {
    const savedSettings = getSettings();
    if (savedSettings) {
      setText(savedSettings.text || "");
      setFontSize(savedSettings.fontSize || defaultFontSize);
      setWidthOption(savedSettings.widthOption || defaultWidthOption);
      // Use nullish coalescing operator to handle boolean false correctly
      setSpellCheck(savedSettings.spellCheck ?? defaultSpellCheck);
    }
    setLoaded(true);
  }, [defaultFontSize, defaultWidthOption, defaultSpellCheck]);

  // Save settings when they change
  useEffect(() => {
    if (loaded) {
      saveSettings({
        text,
        fontSize,
        widthOption,
        spellCheck,
      });
    }
  }, [text, fontSize, widthOption, spellCheck, loaded]);

  return {
    text,
    setText,
    fontSize,
    setFontSize,
    widthOption,
    setWidthOption,
    spellCheck,
    setSpellCheck,
  };
};
