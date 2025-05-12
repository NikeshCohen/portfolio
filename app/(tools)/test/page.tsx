"use client";

import { useMemo, useRef, useState } from "react";

import Accordion from "@yoopta/accordion";
import ActionMenuList, {
  DefaultActionMenuRender,
} from "@yoopta/action-menu-list";
import Blockquote from "@yoopta/blockquote";
import Callout from "@yoopta/callout";
import Code from "@yoopta/code";
import Divider from "@yoopta/divider";
import YooptaEditor, {
  YooptaContentValue,
  createYooptaEditor,
} from "@yoopta/editor";
import Embed from "@yoopta/embed";
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings";
import Link from "@yoopta/link";
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool";
import { BulletedList, NumberedList, TodoList } from "@yoopta/lists";
import {
  Bold,
  CodeMark,
  Highlight,
  Italic,
  Strike,
  Underline,
} from "@yoopta/marks";
import Paragraph from "@yoopta/paragraph";
import Table from "@yoopta/table";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";

const plugins = [
  Paragraph,
  Table,
  Divider.extend({
    elementProps: {
      divider: (props) => ({
        ...props,
        color: "#007aff",
      }),
    },
  }),
  Accordion,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Blockquote,
  Callout,
  NumberedList,
  BulletedList,
  TodoList,
  Code,
  Link,
  Embed,
];

const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
  LinkTool: {
    render: DefaultLinkToolRender,
    tool: LinkTool,
  },
};

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

function WithBaseFullSetup() {
  const [value, setValue] = useState<YooptaContentValue>({});
  const editor = useMemo(() => createYooptaEditor(), []);
  const selectionRef = useRef<HTMLDivElement>(null);

  const onChange = (newValue: YooptaContentValue) => {
    setValue(newValue);
  };

  return (
    <div
      // className="flex justify-center px-[20px] md:py-[100px] pt-[80px] md:pr-[80px] pb-[40px] md:pl-[200px]"
      ref={selectionRef}
    >
      <YooptaEditor
        editor={editor}
        // @ts-expect-error Type compatibility issues between plugins
        plugins={plugins}
        tools={TOOLS}
        marks={MARKS}
        selectionBoxRoot={selectionRef}
        value={value}
        onChange={onChange}
        autoFocus
      />
    </div>
  );
}

export default WithBaseFullSetup;
