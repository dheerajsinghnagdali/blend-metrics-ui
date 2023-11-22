import { ArrowLeft, ArrowRight, Copy, Trash02 } from "@blend-metrics/icons";
import { Meta } from "@storybook/react";
import {
  ButtonGroup,
  DropdownMenu,
  DropdownMenuCheckItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui";

const meta: Meta = {
  title: "Actions",
  parameters: {
    layout: "centered"
  }
};

export default meta;

export const IconsVariant = () => {
  return (
    <ButtonGroup className="inline-flex items-center gap-x-1">
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
  );
};

export const IconsDropShadowVariant = () => {
  return (
    <div className="pt-1.5 shadow-lg bg-white rounded-[5px] px-3.5">
      <ButtonGroup className="inline-flex items-center gap-x-1">
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
  );
};
