import {
  Aperture,
  Check,
  ClockRewind,
  Copy,
  Edit03,
  Link,
  MoreHorizontal,
  Plus,
  Trash2,
  Zap
} from "@blend-metrics/icons";
import { Gmail1Brand } from "@blend-metrics/icons/brands";
import { Meta, StoryObj } from "@storybook/react";
import { useToggle } from "@/lib/hooks";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Favorite,
  IconButton,
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
