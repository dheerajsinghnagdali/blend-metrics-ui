import * as React from "react";
import {
  ArrowLeft,
  ChevronDown,
  ClockRewind,
  Dot,
  FilterLines,
  HelpCircle,
  MoreHorizontal,
  Plus,
  SearchMd,
  Settings,
  SwitchHorizontal02,
  UserPlus,
  Users,
  X
} from "@blend-metrics/icons";
import { Meta } from "@storybook/react";
import { first } from "@/lib/functions";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTrigger,
  DatePicker,
  ScaleOutIn,
  ScrollArea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui";

const meta: Meta = {
  title: "Navigation",
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=1493-160991&mode=design&t=S0cZwByRHj52TFac-4"
      },
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=761-198344&mode=design&t=S0cZwByRHj52TFac-4"
      }
    ]
  }
};

export default meta;

export const WelcomeNav = () => {
  const [users] = React.useState([
    "Wade Cooper",
    "Arlene Mccoy",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
    "Hellen Schmidt",
    "Chris Torres",
    "Max"
  ]);
  const [selected, setSelected] = React.useState(first(users));
  const [query, setQuery] = React.useState("");

  const filteredUsers =
    query === ""
      ? users
      : users.filter((user) =>
          user
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <nav className="flex h-[66px] items-center justify-between border-b border-gray-200 bg-white pl-[26px] pr-[15px]">
      <span className="text-sm font-semibold leading-4 text-gray-black">
        Welcome to Blend Metrics!
      </span>

      <div className="flex items-center gap-x-3">
        <Combobox value={selected} onChange={setSelected}>
          <ComboboxTrigger>
            <ComboboxInput
              displayValue={(value: string) => value}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton>
              <SearchMd className="h-4 w-4" />
            </ComboboxButton>
          </ComboboxTrigger>
          <ScaleOutIn afterLeave={() => setQuery("")}>
            <ComboboxOptions>
              <ScrollArea className="h-[304px]">
                {filteredUsers.map((value, key) => (
                  <ComboboxOption key={key} value={value}>
                    {value}
                  </ComboboxOption>
                ))}
              </ScrollArea>
            </ComboboxOptions>
          </ScaleOutIn>
        </Combobox>

        <Button variant="outlined" visual="gray">
          <UserPlus className="h-[15px] w-[15px]" />
          Invite users
        </Button>
        <Button>
          <Plus className="h-[15px] w-[15px]" />
          Invite users
        </Button>
      </div>
    </nav>
  );
};

export const RecentWorkflows = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
      <div className="flex items-center gap-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <ArrowLeft />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Back</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Recent workflows</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Projects</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-x-3">
        <span className="text-sm font-semibold text-gray-800">Sort by</span>
        <Button visual="gray" variant="outlined">
          Last Edited <ChevronDown className="h-5 w-5" />
        </Button>
        <DatePicker placeholder="Date Modified" />
        <Button visual="gray" variant="outlined">
          Owner <ChevronDown className="h-5 w-5" />
        </Button>
        <Button>
          <Plus className="h-[15px] w-[15px]" />
          New Project
        </Button>
      </div>
    </nav>
  );
};

export const TestWorkflow = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
      <div className="flex items-center gap-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Back</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Test workflows</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-2 px-3 py-2.5">
          <ClockRewind className="text-gray-500 h-[15px] w-[15px]" />
          <span className="text-xs leading-5 text-gray-700">
            Saved at 10:38AM
          </span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Options</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button>Publish</Button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="px-2.5" visual="gray" variant="ghost">
                <X className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Exit</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
};

export const AvatarGroupNav = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
      <div className="flex items-center gap-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Back</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Breadcrumb spacing="0.5rem">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Roles</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Edit Role</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-x-6">
        <AvatarGroup max={3} size="sm">
          <Avatar className="border-2 border-white hover:ring-0" size="sm">
            <AvatarImage alt="Woman" src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-white hover:ring-0" size="sm">
            <AvatarImage alt="Woman" src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-white hover:ring-0" size="sm">
            <AvatarImage alt="Woman" src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-white hover:ring-0" size="sm">
            <AvatarImage alt="Woman" src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-white hover:ring-0" size="sm">
            <AvatarImage alt="Woman" src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-white hover:ring-0" size="sm">
            <AvatarImage alt="Woman" src="/woman.jpg" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
        </AvatarGroup>

        <div className="flex items-center gap-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="p-2.5 text-gray-500 hover:text-gray-black"
                  variant="outlined"
                  visual="gray"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="font-semibold">Options</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button variant="outlined" visual="gray">
            <Users className="h-[15px] w-[15px]" />
            Assign Users
          </Button>
        </div>
      </div>
    </nav>
  );
};

export const AddCustomRole = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
      <Breadcrumb spacing="0.5rem">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">Roles</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="flex items-center gap-x-3">
        <span className="text-sm font-semibold text-gray-800">Sort by</span>
        <Button
          className="w-[148px] justify-between"
          visual="gray"
          variant="outlined"
        >
          Permissions <ChevronDown className="h-[15px] w-[15px]" />
        </Button>
        <Button
          className="w-[200px] justify-between"
          visual="gray"
          variant="outlined"
        >
          All Roles <ChevronDown className="h-[15px] w-[15px]" />
        </Button>
        <Button>
          <Plus className="h-[15px] w-[15px]" />
          Add Custom Role
        </Button>
      </div>
    </nav>
  );
};

export const ChangeRoleNav = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
      <div className="flex items-center gap-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Back</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Breadcrumb spacing="0.5rem">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Edit User</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-x-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <MoreHorizontal className="h-[15px] w-[15px]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Options</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button variant="outlined" visual="gray">
          <SwitchHorizontal02 className="h-[15px] w-[15px]" />
          Change role
        </Button>
      </div>
    </nav>
  );
};

export const MyIntegrationNav = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
      <div className="flex items-center gap-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Back</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Breadcrumb spacing="0.5rem">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Integrations</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Roles</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/" className="flex items-center gap-x-3">
              MyIntegration1
              <Badge size="lg" visual="gray">
                <Dot className="h-2 w-2" />
                Unpublished
              </Badge>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-x-6">
        <span className="text-sm font-semibold text-gray-500">
          Version 1.0.0
        </span>

        <div className="flex items-center gap-x-3">
          <Button className="p-2.5" variant="outlined" visual="gray">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button className="p-2.5" variant="outlined" visual="gray">
            <Settings className="h-4 w-4" />
          </Button>
          <Button>Submit for Review</Button>
        </div>
      </div>
    </nav>
  );
};

export const NewWorkflow = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
      <div className="flex items-center gap-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="p-2.5 text-gray-500 hover:text-gray-black"
                variant="outlined"
                visual="gray"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-semibold">Back</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Project Name</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Recent workflows</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-x-3">
        <span className="text-sm font-semibold text-gray-800">Sort by</span>
        <Button visual="gray" variant="outlined">
          Activity <ChevronDown className="h-5 w-5" />
        </Button>
        <DatePicker placeholder="All time" />
        <Button visual="gray" variant="outlined">
          <FilterLines className="h-5 w-5" /> Filters
        </Button>
        <Button>
          <Plus className="h-5 w-5" />
          New Workflow
        </Button>
      </div>
    </nav>
  );
};

export const InviteUsers = () => {
  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px] py-[15px]">
      <Breadcrumb spacing="0.5rem">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">Users</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="flex items-center gap-x-3">
        <span className="text-sm font-semibold text-gray-800">Sort by</span>
        <Button
          className="w-[148px] justify-between"
          visual="gray"
          variant="outlined"
        >
          Permissions <ChevronDown className="h-[15px] w-[15px]" />
        </Button>
        <Button
          className="w-[200px] justify-between"
          visual="gray"
          variant="outlined"
        >
          All Roles <ChevronDown className="h-[15px] w-[15px]" />
        </Button>
        <Button>
          <Plus />
          Invite Users
        </Button>
      </div>
    </nav>
  );
};

export const RestoreVersionVariant = () => {
  return (
    <nav className="px-[17px] h-[70px] flex border-b bg-white border-gray-200 items-center justify-between">
      <div>
        <h1 className="text-base text-gray-900 leading-5 font-medium">
          New Team Version
        </h1>
        <p className="text-sm leading-6 text-gray-500">
          Jun 19, 2023 at 11:48 AM
        </p>
      </div>

      <div className="flex items-center gap-x-3">
        <Button>Restore this version</Button>
        <Button variant="outlined" visual="gray">
          Go Back to Current Version
        </Button>
      </div>
    </nav>
  );
};
