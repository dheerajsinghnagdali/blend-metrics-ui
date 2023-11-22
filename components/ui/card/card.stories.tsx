import React from "react";
import {
  AlertCircle,
  Aperture,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ClockRewind,
  Copy,
  Dataflow02,
  Edit03,
  GitBranch01,
  Link,
  MoreHorizontal,
  Plus,
  Trash02,
  Trash2,
  X
} from "@blend-metrics/icons";
import { Gmail1Brand, SlackBrand } from "@blend-metrics/icons/brands";
import { GridVertical2, GripVertical1 } from "@blend-metrics/icons/special";
import { Meta, StoryObj } from "@storybook/react";
import { useToggle } from "@/lib/hooks";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  ButtonGroup,
  DropdownMenu,
  DropdownMenuCheckItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Favorite,
  IconButton,
  PercentageInput,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui";
import {
  ActionCardContent,
  ActionCardDescription,
  ActionCardIcon,
  ActionCardRoot,
  ActionCardTitle
} from "./action-card";
import {
  Article,
  ArticleContent,
  ArticleDescription,
  ArticleIcon,
  ArticleTitle
} from "./article";
import {
  VersionCardDescription,
  VersionCardFooter,
  VersionCardHeader,
  VersionCardRoot,
  VersionCardTitle
} from "./version-card";

const meta: Meta = {
  title: "Card"
};

export default meta;

export const ActionVariant = () => {
  return (
    <ActionCardRoot>
      <ActionCardIcon>
        <Gmail1Brand className="h-6 w-6" />
      </ActionCardIcon>
      <ActionCardContent>
        <ActionCardTitle>New Email</ActionCardTitle>
        <ActionCardDescription>
          Triggers when new email appears in mailbox
        </ActionCardDescription>
      </ActionCardContent>
    </ActionCardRoot>
  );
};

export const VersionVariant = () => {
  return (
    <VersionCardRoot className="group">
      <VersionCardHeader>
        <VersionCardTitle>New Team VersionCard</VersionCardTitle>

        <div className="flex items-center gap-x-3.5">
          <Favorite className="data-[state=off]:hidden data-[state=off]:group-hover:inline-flex data-[state=off]:group-active:group-hover:inline-flex" />
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <IconButton
                      visual="gray"
                      variant="ghost"
                      className="h-6 w-6 text-gray-500 hover:text-gray-900 hover:bg-transparent focus:bg-transparent"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </IconButton>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <Edit03 className="h-4 w-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ClockRewind className="h-4 w-4" /> Restore this Version
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="h-4 w-4" /> Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className="h-4 w-4" /> Copy Link
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem visual="destructive">
                    <Trash2 className="h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
                <TooltipContent
                  align="center"
                  className="font-semibold"
                  side="bottom"
                >
                  Options
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DropdownMenu>
        </div>
      </VersionCardHeader>

      <VersionCardDescription>Aug 15, 2022 at 11:48 AM</VersionCardDescription>

      <VersionCardFooter className="mt-2 flex items-center gap-x-2">
        <Avatar className="h-5 w-5">
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>

        <VersionCardDescription>
          Manually saved by Ronald Richards
        </VersionCardDescription>
      </VersionCardFooter>
    </VersionCardRoot>
  );
};

type ArticleStory = StoryObj<typeof Article>;

export const ArticleConnectVariant = () => {
  const [isConnected, { on }] = useToggle();
  return (
    <Article variant="default">
      <ArticleIcon rounded="md" visual="flushed">
        <Gmail1Brand className="h-6 w-6" />
      </ArticleIcon>
      <ArticleTitle size="sm">Connect your Gmail account</ArticleTitle>
      <Button className="ml-auto" variant="outlined" onClick={on}>
        {isConnected ? (
          <Check className="h-[15px] w-[15px] text-success-500" />
        ) : (
          <Plus className="h-[15px] w-[15px] text-gray-500" />
        )}
        Connected
      </Button>
    </Article>
  );
};

export const ArticleOutlinedVariant: ArticleStory = {
  argTypes: {
    isDragging: {
      control: "boolean"
    },
    isSelected: {
      control: "boolean"
    },
    isGrabbed: {
      control: "boolean"
    },
    isOnCanvas: {
      control: "boolean"
    }
  },
  args: {
    isDragging: false,
    isSelected: false,
    isGrabbed: false,
    isOnCanvas: false
  },
  render: (args) => (
    <Article variant="outlined" {...args}>
      <ArticleIcon>
        <Aperture className="h-5 w-5" />
      </ArticleIcon>
      <ArticleContent className="w-[calc(theme(width.full)-56px)]">
        <ArticleTitle>Add Event</ArticleTitle>
        <ArticleDescription>
          TypeError: A dynamic import callback was not specified.
        </ArticleDescription>
      </ArticleContent>
    </Article>
  )
};

export const ArticleDestructiveVariant: ArticleStory = {
  argTypes: {
    isError: {
      control: "boolean"
    }
  },
  args: {
    isError: false
  },
  render: (args) => (
    <Article className="group" variant="destructive" {...args}>
      <div className="flex items-center gap-x-3">
        <ArticleIcon visual="flushed">
          <Gmail1Brand className="h-[32.13px] w-[32.13px]" />
        </ArticleIcon>
        <ArticleContent>
          <ArticleTitle>Trigger</ArticleTitle>
          <ArticleDescription>Message is received in Gmail</ArticleDescription>
        </ArticleContent>
      </div>
      <Button
        variant="ghost"
        visual="gray"
        className="h-auto ml-auto hidden group-hover:inline-flex py-1 px-1.5 self-start text-gray-500"
      >
        <MoreHorizontal className="h-[15px] w-[15px]" />
      </Button>
    </Article>
  )
};

export const PercentageVariant = () => {
  const [value, setValue] = React.useState<number>(0);

  return (
    <div className="group h-[92px] rounded-lg border-gray-200 border p-3 relative pl-[25px]">
      <button className="focus-visible:outline-none opacity-0 group-hover:opacity-100 duration-300 absolute left-2 inset-y-0 cursor-grab my-auto">
        <GridVertical2 className="text-gray-400" />
      </button>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold leading-6 text-gray-black">
          Path 1
        </span>

        <ButtonGroup className="inline-flex opacity-0 group-hover:opacity-100 duration-300 items-center gap-x-1">
          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowLeft className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Left
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowRight className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Right
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Copy className="h-3 w-3 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuCheckItem>Copy</DropdownMenuCheckItem>
              <DropdownMenuCheckItem>Duplicate</DropdownMenuCheckItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <Trash02 className="h-3 w-3 text-error-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Delete Path
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ButtonGroup>
      </div>

      <div className="flex items-center gap-x-[17px]">
        <SliderRoot
          value={[value]}
          onValueChange={([value]) => setValue(value)}
          className="flex-grow"
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderRoot>
        <div className="flex items-center gap-x-1.5">
          <PercentageInput
            className="w-[86px]"
            value={value}
            onValueChange={setValue}
          />
          <span className="text-sm leading-5 text-gray-700 font-medium">%</span>
        </div>
      </div>
    </div>
  );
};

export const PathDefault = () => {
  return (
    <article className="group relative py-3 flex items-center px-[25px] gap-x-1 h-[68px] rounded-lg border-2 border-gray-200 bg-white shadow-[0px_1px_5px_0px_rgba(16,24,40,0.02)]">
      <button className="focus-visible:outline-none cursor-grab absolute left-1 inset-y-0 my-auto">
        <GripVertical1 className="group-hover:opacity-100 opacity-0 transition duration-300 text-gray-400" />
      </button>
      <div className="flex-grow">
        <h1 className="text-sm leading-6 font-semibold text-gray-black">
          Path1
        </h1>
        <p className="text-xs leading-5 text-primary-500">Add Condition</p>
      </div>

      <div className="flex items center">
        <ButtonGroup className="inline-flex opacity-0 group-hover:opacity-100 transition duration-300 items-center gap-x-1">
          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowLeft className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Left
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowRight className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Right
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Copy className="h-3 w-3 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuCheckItem>Copy</DropdownMenuCheckItem>
              <DropdownMenuCheckItem>Duplicate</DropdownMenuCheckItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <Trash02 className="h-3 w-3 text-error-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Delete Path
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ButtonGroup>

        <button className="focus-visible:outline-none h-[18px] w-[18px]">
          <ChevronRight className="h-[18px] text-gray-400 w-[18px]" />
        </button>
      </div>
    </article>
  );
};

export const PathConditionVariant = () => {
  return (
    <article className="group relative py-3 flex items-center px-[25px] gap-x-1 h-[68px] rounded-lg border-2 border-gray-200 bg-white shadow-[0px_1px_5px_0px_rgba(16,24,40,0.02)]">
      <button className="focus-visible:outline-none cursor-grab absolute left-1 inset-y-0 my-auto">
        <GripVertical1 className="group-hover:opacity-100 opacity-0 transition duration-300 text-gray-400" />
      </button>
      <div className="flex-grow">
        <h1 className="text-sm leading-6 font-semibold text-gray-black">
          Path1
        </h1>
        <div className="flex items-center gap-x-[3px]">
          <span className="text-xs text-gray-500 leading-5">If</span>
          <SlackBrand className="h-[15px] w-[15px]" />
          <span className="text-xs text-gray-500 leading-5">
            sender contains 123, +4
          </span>
        </div>
      </div>

      <div className="flex items center">
        <ButtonGroup className="inline-flex opacity-0 group-hover:opacity-100 transition duration-300 items-center gap-x-1">
          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowLeft className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Left
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowRight className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Right
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Copy className="h-3 w-3 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuCheckItem>Copy</DropdownMenuCheckItem>
              <DropdownMenuCheckItem>Duplicate</DropdownMenuCheckItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <Trash02 className="h-3 w-3 text-error-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Delete Path
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ButtonGroup>

        <button className="focus-visible:outline-none h-[18px] w-[18px]">
          <ChevronRight className="h-[18px] text-gray-400 w-[18px]" />
        </button>
      </div>
    </article>
  );
};

export const PathDestructive = () => {
  return (
    <article className="group relative py-3 flex items-center px-[25px] gap-x-1 h-[68px] rounded-lg border-2 border-gray-200 bg-white shadow-[0px_1px_5px_0px_rgba(16,24,40,0.02)]">
      <button className="focus-visible:outline-none cursor-grab absolute left-1 inset-y-0 my-auto">
        <GripVertical1 className="group-hover:opacity-100 opacity-0 transition duration-300 text-gray-400" />
      </button>
      <div className="flex-grow">
        <h1 className="text-sm leading-6 font-semibold text-gray-black">
          Path1
        </h1>
        <span className="text-xs leading-5 text-error-700">
          Incomplete Conditions
        </span>
      </div>

      <div className="flex items center">
        <ButtonGroup className="inline-flex opacity-0 transition duration-300 group-hover:opacity-100 items-center gap-x-1">
          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowLeft className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Left
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <ArrowRight className="h-3 w-3 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Move Right
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Copy className="h-3 w-3 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuCheckItem>Copy</DropdownMenuCheckItem>
              <DropdownMenuCheckItem>Duplicate</DropdownMenuCheckItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipProvider delayDuration={75}>
            <Tooltip>
              <TooltipTrigger className="focus:outline-none">
                <Trash02 className="h-3 w-3 text-error-500" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="top">
                Delete Path
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ButtonGroup>

        <button className="focus-visible:outline-none h-[18px] w-[18px]">
          <ChevronRight className="h-[18px] text-gray-400 w-[18px]" />
        </button>
      </div>
    </article>
  );
};

export const DestructiveVariant = () => {
  return (
    <div className="inline-flex gap-x-2 items-center">
      <AlertCircle className="h-6 flex-none w-6 text-error-500" />
      <Article destructive>
        <ArticleIcon variant="destructive">
          <Dataflow02 className="h-5 w-5" />
        </ArticleIcon>
        <ArticleContent>
          <ArticleTitle className="text-error-500">Split Path</ArticleTitle>
          <ArticleDescription className="text-error-500">
            Condition based split
          </ArticleDescription>
        </ArticleContent>
      </Article>
    </div>
  );
};

export const ActionEmpty = () => {
  return (
    <article className="w-[317px] shadow-sm border rounded-lg border-primary-500 p-6 bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-medium flex-grow leading-6 text-gray-900">
          Select Action
        </h1>
        <button className="focus-visible:outline-none">
          <MoreHorizontal className="text-gray-400" />
        </button>
      </div>
      <p className="text-xs leading-[14.52px] mt-0.5 text-[#777777]">
        Then this action will be automated
      </p>

      <button className="h-[60px] bg-white w-full mt-6 flex items-center justify-center gap-x-3 text-lg font-semibold border focus-visible:outline-none text-gray-800 border-gray-300 shadow-xs px-4">
        <Plus className="h-6 w-6 text-[#777777]" />
        Add Action
      </button>
    </article>
  );
};

export const ActionSelected = () => {
  return (
    <article className="w-[317px] shadow-sm border rounded-lg border-primary-500 p-6 bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-medium flex-grow leading-6 text-gray-900">
          Action selected
        </h1>
        <button className="focus-visible:outline-none">
          <MoreHorizontal className="text-gray-400" />
        </button>
      </div>
      <p className="text-xs leading-[14.52px] mt-0.5 text-[#777777]">
        Then this action will be automated
      </p>

      <div className="border p-4 mt-6 border-gray-200 rounded-lg flex items-start bg-white gap-x-2.5">
        <GitBranch01 className="text-[#999999]" />

        <div className="flex flex-grow items-start">
          <div className="flex-grow">
            <h1 className="text-sm font-medium text-gray-700">Conditional</h1>
            <p className="text-[10px] leading-3 text-[#777777]">
              Splits the path based on Conditions
            </p>
          </div>

          <button className="focus-visible:outline-none h-5 w-5">
            <X className="h-5 w-5 text-[#777777]" />
          </button>
        </div>
      </div>
    </article>
  );
};

export const ActionConditionalAddVariant = () => {
  return (
    <div className="inline-flex flex-col items-center space-y-6">
      <article className="w-[317px] shadow-sm border rounded-lg border-primary-500 p-6 bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-medium flex-grow leading-6 text-gray-900">
            Action selected
          </h1>
          <button className="focus-visible:outline-none">
            <MoreHorizontal className="text-gray-400" />
          </button>
        </div>
        <p className="text-xs leading-[14.52px] mt-0.5 text-[#777777]">
          Then this action will be automated
        </p>

        <div className="border p-4 mt-6 border-gray-200 rounded-lg flex items-start bg-white gap-x-2.5">
          <GitBranch01 className="text-[#999999]" />

          <div className="flex flex-grow items-start">
            <div className="flex-grow">
              <h1 className="text-sm font-medium text-gray-700">Conditional</h1>
              <p className="text-[10px] leading-3 text-[#777777]">
                Splits the path based on Conditions
              </p>
            </div>

            <button className="focus-visible:outline-none h-5 w-5">
              <X className="h-5 w-5 text-[#777777]" />
            </button>
          </div>
        </div>
      </article>

      <button className="h-[41px] focus-visible:outline-none mx-auto w-[41px] inline-flex bg-[#576190]/10 items-center justify-center rounded-full">
        <Plus className="text-[#23283C] h-5 w-5" />
      </button>
    </div>
  );
};
