import Image from "next/image";
import NextLink from "next/link";
import {
  ArrowLeft,
  BarChartSquare02,
  Check,
  ChevronDown,
  ClockRewind,
  CoinStack,
  Copy02,
  CreditCard02,
  Download02,
  Edit03,
  Edit05,
  EyeOff,
  Folder,
  HelpCircle,
  HomeLine,
  LayersThree01,
  LifeBuoy01,
  Link03,
  Lock01,
  LogOut,
  Mail01,
  MoreHorizontal,
  NotificationMessage,
  Plus,
  SearchMd,
  Settings01,
  Settings02,
  ShieldZap,
  Star,
  Trash01,
  User,
  UserPlus,
  Users,
  Zap
} from "@blend-metrics/icons";
import { BlendMetrics } from "@blend-metrics/icons/special";
import { Meta } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  Checkbox,
  DisclosureContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  ScrollArea,
  SearchField,
  SearchFieldButton,
  SearchFieldInput,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui";

const meta: Meta = {
  title: "Settings",
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export const Default = () => {
  return (
    <div className="relative">
      <Sidebar className="fixed inset-y-0 z-30 left-0">
        <SidebarHeader>
          <BlendMetrics className="h-[26px] w-[26px]" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <HomeLine />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <BarChartSquare02 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Stats
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LayersThree01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Projects
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Users />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Users
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarGroup>

          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LifeBuoy01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Settings01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/man.jpg" alt="Man" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[278px]">
                <DropdownMenuLabel className="font-normal" size="md">
                  <div className="inline-flex items-center gap-x-3">
                    <Avatar size="md">
                      <AvatarImage src="/man.jpg" alt="Man" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-700">
                        Christopher Torres
                      </span>
                      <span className="text-sm text-gray-500">
                        chris@blendmetrics.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <User className="h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings01 className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus className="h-4 w-4" />
                  Invite Team members
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CoinStack className="h-4 w-4" />
                  Belling
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="h-4 w-4" />
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <nav className="flex h-[70px] z-30 fixed left-[70px] top-0 right-0 items-center justify-between border-b border-gray-200 bg-white px-[17px]">
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
            <Mail01 className="h-[15px] w-[15px]" />
            Invite Users
          </Button>
        </div>
      </nav>

      <div className="pl-[70px] relative pt-[70px]">
        <div className="fixed bottom-0 left-[70px] z-20 px-[15px] pt-[15px] top-[70px] w-[224px] border-r border-gray-200 bg-gray-50">
          <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
            Personal
          </span>

          <ul className="list-none space-y-1 mt-2">
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <User className="flex-none text-gray-400 group-hover:text-primary-500" />
                Account
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <Lock01 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Security
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <EyeOff className="flex-none text-gray-400 group-hover:text-primary-500" />
                Privacy
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <CreditCard02 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Billing
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <NotificationMessage className="flex-none text-gray-400 group-hover:text-primary-500" />
                Notifications
              </NextLink>
            </li>
          </ul>

          <div className="mt-6">
            <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
              Team Management
            </span>

            <ul className="list-none space-y-1 mt-2">
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <Users className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Users
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <ShieldZap className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Roles
                </NextLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-[256px] min-h-[calc(theme(height.screen)-70px)] bg-gray-50 p-8">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h1 className="text-base leading-6 font-semibold text-gray-600">
                5 Users
              </h1>
              <p className="text-sm leading-5 text-gray-500">
                View and manage users of your team
              </p>
            </div>

            <SearchField className="w-[248px]">
              <SearchFieldInput size="lg" visual="gray" />
              <SearchFieldButton size="lg">
                <SearchMd className="h-5 w-5" />
              </SearchFieldButton>
            </SearchField>
          </div>

          <div className="mt-6 space-y-2.5">
            <Card className="px-6 py-[18px]">
              <div className="inline-flex items-center gap-x-3">
                <Avatar size="md">
                  <AvatarImage alt="Man" src="/man.jpg" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">
                    Test Name
                  </span>
                  <span className="text-sm text-gray-500">test@gmail.com</span>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                Administrator
              </span>
              <Badge>Default</Badge>
              <div className="flex flex-col gap-y-1">
                <span className="text-sm font-medium text-gray-900">
                  Accepted Team Invite
                </span>
                <span className="text-sm text-gray-500">3 days ago</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    className="h-8 px-1.5 py-1 text-gray-500"
                    variant="ghost"
                    visual="gray"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[182px]">
                  <DropdownMenuItem>
                    <Edit03 className="h-4 w-4" />
                    Option 1
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy02 className="h-4 w-4" />
                    Option 2
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link03 className="h-4 w-4" />
                    Option 3
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserPlus className="h-4 w-4" />
                    Option 3
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Zap />
                    Option 4
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit05 className="h-4 w-4" />
                    Option 5
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Star className="h-4 w-4" />
                    Option 6
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Folder className="h-4 w-4" />
                    Option 6
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ClockRewind className="h-4 w-4" />
                    Option 7
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download02 className="h-4 w-4" />
                    Option 8
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem visual="destructive">
                    <Trash01 className="h-4 w-4" />
                    Delete item
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Card>
            <Card className="px-6 py-[18px]">
              <div className="inline-flex items-center gap-x-3">
                <Avatar size="md">
                  <AvatarImage alt="Woman" src="/woman.jpg" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">
                    Test Name
                  </span>
                  <span className="text-sm text-gray-500">test@gmail.com</span>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                Administrator
              </span>
              <Badge visual="primary">Custom</Badge>
              <div className="flex flex-col gap-y-1">
                <span className="text-sm font-medium text-gray-900">
                  Accepted Team Invite
                </span>
                <span className="text-sm text-gray-500">3 days ago</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    className="h-8 px-1.5 py-1 text-gray-500"
                    variant="ghost"
                    visual="gray"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[182px]">
                  <DropdownMenuItem>
                    <Edit03 className="h-4 w-4" />
                    Option 1
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy02 className="h-4 w-4" />
                    Option 2
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link03 className="h-4 w-4" />
                    Option 3
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserPlus className="h-4 w-4" />
                    Option 3
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Zap />
                    Option 4
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit05 className="h-4 w-4" />
                    Option 5
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Star className="h-4 w-4" />
                    Option 6
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Folder className="h-4 w-4" />
                    Option 6
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ClockRewind className="h-4 w-4" />
                    Option 7
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download02 className="h-4 w-4" />
                    Option 8
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem visual="destructive">
                    <Trash01 className="h-4 w-4" />
                    Delete item
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Roles = () => {
  return (
    <div className="relative">
      <Sidebar className="fixed inset-y-0 z-30 left-0">
        <SidebarHeader>
          <BlendMetrics className="h-[26px] w-[26px]" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <HomeLine />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <BarChartSquare02 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Stats
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LayersThree01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Projects
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Users />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Users
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarGroup>

          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LifeBuoy01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Settings01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/man.jpg" alt="Man" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[278px]">
                <DropdownMenuLabel className="font-normal" size="md">
                  <div className="inline-flex items-center gap-x-3">
                    <Avatar size="md">
                      <AvatarImage src="/man.jpg" alt="Man" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-700">
                        Christopher Torres
                      </span>
                      <span className="text-sm text-gray-500">
                        chris@blendmetrics.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <User className="h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings01 className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus className="h-4 w-4" />
                  Invite Team members
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CoinStack className="h-4 w-4" />
                  Belling
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="h-4 w-4" />
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <nav className="flex h-[70px] z-30 fixed left-[70px] top-0 right-0 items-center justify-between border-b border-gray-200 bg-white px-[17px]">
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

      <div className="pl-[70px] relative pt-[70px]">
        <div className="fixed bottom-0 left-[70px] z-20 px-[15px] pt-[15px] top-[70px] w-[224px] border-r border-gray-200 bg-gray-50">
          <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
            Personal
          </span>

          <ul className="list-none space-y-1 mt-2">
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <User className="flex-none text-gray-400 group-hover:text-primary-500" />
                Account
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <Lock01 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Security
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <EyeOff className="flex-none text-gray-400 group-hover:text-primary-500" />
                Privacy
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <CreditCard02 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Billing
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <NotificationMessage className="flex-none text-gray-400 group-hover:text-primary-500" />
                Notifications
              </NextLink>
            </li>
          </ul>

          <div className="mt-6">
            <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
              Team Management
            </span>

            <ul className="list-none space-y-1 mt-2">
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <Users className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Users
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <ShieldZap className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Roles
                </NextLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-[256px] min-h-[calc(theme(height.screen)-70px)] bg-gray-50 p-8">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h1 className="text-base leading-6 font-semibold text-gray-600">
                5 Roles
              </h1>
              <p className="text-sm leading-5 text-gray-500">
                View and manage user roles
              </p>
            </div>

            <SearchField className="w-[248px]">
              <SearchFieldInput size="lg" visual="gray" />
              <SearchFieldButton size="lg">
                <SearchMd className="h-5 w-5" />
              </SearchFieldButton>
            </SearchField>
          </div>

          <div className="mt-6 space-y-2.5">
            <Card className="px-6 py-[17px]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-x-2">
                  <div className="text-sm font-medium text-gray-800">
                    Administrator
                  </div>
                  <Badge>Default</Badge>
                </div>
                <div className="text-sm text-gray-500">
                  Can manage the content they have created
                </div>
              </div>
              <div className="inline-flex items-center gap-x-8">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AvatarGroup
                        className="min-w-[110px] justify-start"
                        excess
                        max={3}
                        size="sm"
                      >
                        <Avatar
                          className="border-2 border-white hover:ring-0"
                          size="sm"
                        >
                          <AvatarImage alt="Woman" src="/woman.jpg" />
                          <AvatarFallback>W</AvatarFallback>
                        </Avatar>
                        <Avatar
                          className="border-2 border-white hover:ring-0"
                          size="sm"
                        >
                          <AvatarImage alt="Woman" src="/woman.jpg" />
                          <AvatarFallback>W</AvatarFallback>
                        </Avatar>
                        <Avatar
                          className="border-2 border-white hover:ring-0"
                          size="sm"
                        >
                          <AvatarImage alt="Woman" src="/woman.jpg" />
                          <AvatarFallback>W</AvatarFallback>
                        </Avatar>
                        <Avatar
                          className="border-2 border-white hover:ring-0"
                          size="sm"
                        >
                          <AvatarImage alt="Woman" src="/woman.jpg" />
                          <AvatarFallback>W</AvatarFallback>
                        </Avatar>
                        <Avatar
                          className="border-2 border-white hover:ring-0"
                          size="sm"
                        >
                          <AvatarImage alt="Woman" src="/woman.jpg" />
                          <AvatarFallback>W</AvatarFallback>
                        </Avatar>
                        <Avatar
                          className="border-2 border-white hover:ring-0"
                          size="sm"
                        >
                          <AvatarImage alt="Woman" src="/woman.jpg" />
                          <AvatarFallback>W</AvatarFallback>
                        </Avatar>
                      </AvatarGroup>
                    </TooltipTrigger>
                    <TooltipContent className="p-0" size="md">
                      <ScrollArea className="h-[192px] p-3">
                        <div className="space-y-3">
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                        </div>
                      </ScrollArea>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      className="h-8 px-1.5 py-1 text-gray-500"
                      variant="ghost"
                      visual="gray"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[182px]">
                    <DropdownMenuItem>
                      <Edit03 className="h-4 w-4" />
                      Option 1
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy02 className="h-4 w-4" />
                      Option 2
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link03 className="h-4 w-4" />
                      Option 3
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserPlus className="h-4 w-4" />
                      Option 3
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Zap />
                      Option 4
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit05 className="h-4 w-4" />
                      Option 5
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Star className="h-4 w-4" />
                      Option 6
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Folder className="h-4 w-4" />
                      Option 6
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ClockRewind className="h-4 w-4" />
                      Option 7
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download02 className="h-4 w-4" />
                      Option 8
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem visual="destructive">
                      <Trash01 className="h-4 w-4" />
                      Delete item
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
            <Card className="px-6 py-[17px]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-x-2">
                  <div className="text-sm font-medium text-gray-800">
                    Administrator
                  </div>
                  <Badge>Default</Badge>
                </div>
                <div className="text-sm text-gray-500">
                  Can manage the content they have created
                </div>
              </div>
              <div className="inline-flex items-center gap-x-8">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AvatarGroup
                        className="min-w-[110px] justify-start"
                        excess
                        size="sm"
                      >
                        <Avatar
                          className="border-2 border-white hover:ring-0"
                          size="sm"
                        >
                          <AvatarImage alt="Woman" src="/woman.jpg" />
                          <AvatarFallback>W</AvatarFallback>
                        </Avatar>
                      </AvatarGroup>
                    </TooltipTrigger>
                    <TooltipContent className="p-0" size="md">
                      <ScrollArea className="h-[192px] p-3">
                        <div className="space-y-3">
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage alt="Woman" src="/woman.jpg" />
                              <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium leading-5">
                              Woman
                            </span>
                          </div>
                        </div>
                      </ScrollArea>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      className="h-8 px-1.5 py-1 text-gray-500"
                      variant="ghost"
                      visual="gray"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[182px]">
                    <DropdownMenuItem>
                      <Edit03 className="h-4 w-4" />
                      Option 1
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy02 className="h-4 w-4" />
                      Option 2
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link03 className="h-4 w-4" />
                      Option 3
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserPlus className="h-4 w-4" />
                      Option 3
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Zap />
                      Option 4
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit05 className="h-4 w-4" />
                      Option 5
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Star className="h-4 w-4" />
                      Option 6
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Folder className="h-4 w-4" />
                      Option 6
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ClockRewind className="h-4 w-4" />
                      Option 7
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download02 className="h-4 w-4" />
                      Option 8
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem visual="destructive">
                      <Trash01 className="h-4 w-4" />
                      Delete item
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditDefaultRole = () => {
  return (
    <div className="relative">
      <Sidebar className="fixed inset-y-0 z-30 left-0">
        <SidebarHeader>
          <BlendMetrics className="h-[26px] w-[26px]" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <HomeLine />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <BarChartSquare02 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Stats
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LayersThree01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Projects
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Users />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Users
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarGroup>

          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LifeBuoy01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Settings01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/man.jpg" alt="Man" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[278px]">
                <DropdownMenuLabel className="font-normal" size="md">
                  <div className="inline-flex items-center gap-x-3">
                    <Avatar size="md">
                      <AvatarImage src="/man.jpg" alt="Man" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-700">
                        Christopher Torres
                      </span>
                      <span className="text-sm text-gray-500">
                        chris@blendmetrics.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <User className="h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings01 className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus className="h-4 w-4" />
                  Invite Team members
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CoinStack className="h-4 w-4" />
                  Belling
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="h-4 w-4" />
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <nav className="flex h-[70px] items-center fixed z-30 left-[70px] top-0 right-0 justify-between border-b border-gray-200 bg-white px-[17px]">
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
              <BreadcrumbLink href="/">Add Custom Role</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </nav>

      <div className="pl-[70px] relative pt-[70px]">
        <div className="fixed bottom-0 left-[70px] z-20 px-[15px] pt-[15px] top-[70px] w-[224px] border-r border-gray-200 bg-gray-50">
          <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
            Personal
          </span>

          <ul className="list-none space-y-1 mt-2">
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <User className="flex-none text-gray-400 group-hover:text-primary-500" />
                Account
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <Lock01 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Security
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <EyeOff className="flex-none text-gray-400 group-hover:text-primary-500" />
                Privacy
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <CreditCard02 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Billing
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <NotificationMessage className="flex-none text-gray-400 group-hover:text-primary-500" />
                Notifications
              </NextLink>
            </li>
          </ul>

          <div className="mt-6">
            <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
              Team Management
            </span>

            <ul className="list-none space-y-1 mt-2">
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <Users className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Users
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <ShieldZap className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Roles
                </NextLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-[256px] min-h-[calc(theme(height.screen)-70px)] bg-gray-50 p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-base leading-6 font-semibold text-gray-600">
              Add Custom Role
            </h1>

            <Button disabled>
              <Check className="h-[15px] w-[15px]" />
              Save
            </Button>
          </div>

          <form className="mt-6 grid grid-cols-3 gap-x-6 rounded-lg border border-gray-200 drop-shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] bg-white p-6">
            <div className="flex flex-col gap-y-1.5">
              <Label className="text-gray-700" size="sm">
                Role Name
              </Label>
              <Input type="text" />
            </div>
            <div className="col-span-2 flex flex-col gap-y-1.5">
              <Label className="text-gray-700" size="sm">
                Description
              </Label>
              <Input type="text" />
            </div>
          </form>

          <div className="mt-6">
            <h1 className="text-base font-semibold text-gray-600">
              Permissions
            </h1>
            <p className="text-sm mt-1 text-gray-500">
              Define the rights given to this role
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            <Accordion type="single" collapsible>
              <AccordionItem
                className="border border-gray-200 hover:ring-1 data-[state=open]:hover:ring-0 bg-white data-[state=open]:hover:border-gray-200 hover:ring-gray-300 hover:border-gray-300 rounded-lg"
                value="item-1"
              >
                <AccordionTrigger asChild>
                  <div className="flex justify-between w-full items-center p-3">
                    <div className="flex items-center gap-x-3">
                      <div className="h-11 w-11 rounded-lg border-[1.5px] inline-flex items-center justify-center border-gray-200 flex-none">
                        <Settings02 className="h-5 text-primary-500 w-5" />
                      </div>
                      <span className="text-sm leading-[16.94px] text-gray-900 font-medium">
                        Administrative
                      </span>
                    </div>

                    <button className="h-8 w-8 rounded-[5px] focus-visible:outline-none inline-flex items-center justify-center">
                      <ChevronDown className="h-5 w-5 flex-none text-gray-500 transition duration-300 group-data-[state=open]/trigger:-rotate-180" />
                    </button>
                  </div>
                </AccordionTrigger>
                <DisclosureContent className="overflow-x-auto">
                  {/* head */}
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Select All
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Save
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Read
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Write
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                  </div>
                  {/* body */}
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                </DisclosureContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                className="border border-gray-200 hover:ring-1 data-[state=open]:hover:ring-0 bg-white data-[state=open]:hover:border-gray-200 hover:ring-gray-300 hover:border-gray-300 rounded-lg"
                value="item-1"
              >
                <AccordionTrigger asChild>
                  <div className="flex justify-between w-full items-center p-3">
                    <div className="flex items-center gap-x-3">
                      <div className="h-11 w-11 rounded-lg border-[1.5px] inline-flex items-center justify-center border-gray-200 flex-none">
                        <Settings02 className="h-5 text-primary-500 w-5" />
                      </div>
                      <span className="text-sm leading-[16.94px] text-gray-900 font-medium">
                        Administrative
                      </span>
                    </div>

                    <button className="h-8 w-8 rounded-[5px] focus-visible:outline-none inline-flex items-center justify-center">
                      <ChevronDown className="h-5 w-5 flex-none text-gray-500 transition duration-300 group-data-[state=open]/trigger:-rotate-180" />
                    </button>
                  </div>
                </AccordionTrigger>
                <DisclosureContent className="overflow-x-auto">
                  {/* head */}
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Select All
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Save
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Read
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Write
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                  </div>
                  {/* body */}
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                </DisclosureContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RolesEditDefaultRole = () => {
  return (
    <div className="relative">
      <Sidebar className="fixed inset-y-0 z-30 left-0">
        <SidebarHeader>
          <BlendMetrics className="h-[26px] w-[26px]" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <HomeLine />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <BarChartSquare02 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Stats
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LayersThree01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Projects
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Users />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Users
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarGroup>

          <SidebarGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <LifeBuoy01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarItem>
                    <Settings01 />
                  </SidebarItem>
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/man.jpg" alt="Man" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[278px]">
                <DropdownMenuLabel className="font-normal" size="md">
                  <div className="inline-flex items-center gap-x-3">
                    <Avatar size="md">
                      <AvatarImage src="/man.jpg" alt="Man" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-700">
                        Christopher Torres
                      </span>
                      <span className="text-sm text-gray-500">
                        chris@blendmetrics.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <User className="h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings01 className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus className="h-4 w-4" />
                  Invite Team members
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CoinStack className="h-4 w-4" />
                  Belling
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="h-4 w-4" />
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <nav className="flex h-[70px] items-center fixed z-30 left-[70px] top-0 right-0 justify-between border-b border-gray-200 bg-white px-[17px]">
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
              <BreadcrumbLink href="/">Add Custom Role</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </nav>

      <div className="pl-[70px] relative pt-[70px]">
        <div className="fixed bottom-0 left-[70px] z-20 px-[15px] pt-[15px] top-[70px] w-[224px] border-r border-gray-200 bg-gray-50">
          <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
            Personal
          </span>

          <ul className="list-none space-y-1 mt-2">
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <User className="flex-none text-gray-400 group-hover:text-primary-500" />
                Account
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <Lock01 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Security
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <EyeOff className="flex-none text-gray-400 group-hover:text-primary-500" />
                Privacy
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <CreditCard02 className="flex-none text-gray-400 group-hover:text-primary-500" />
                Billing
              </NextLink>
            </li>
            <li>
              <NextLink
                className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                href="/"
              >
                <NotificationMessage className="flex-none text-gray-400 group-hover:text-primary-500" />
                Notifications
              </NextLink>
            </li>
          </ul>

          <div className="mt-6">
            <span className="text-xs leading-5 tracking-[.24px] font-bold uppercase text-gray-500">
              Team Management
            </span>

            <ul className="list-none space-y-1 mt-2">
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <Users className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Users
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="group h-10 px-3 gap-x-3 flex items-center hover:bg-primary-50 hover:text-primary-500 rounded-[6px] focus-visible:outline-none font-semibold text-sm leading-6 text-gray-500"
                  href="/"
                >
                  <ShieldZap className="flex-none text-gray-400 group-hover:text-primary-500" />
                  Roles
                </NextLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-[256px] min-h-[calc(theme(height.screen)-70px)] bg-gray-50 p-8">
          <h1 className="text-base font-semibold text-gray-600">Edit User</h1>

          <div className="mt-6">
            <div className="p-6 border flex gap-x-5 border-gray-200 bg-white rounded-lg drop-shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
              <div className="h-20 w-20 flex-none relative rounded-full overflow-hidden">
                <Image
                  className="object-cover"
                  src="/man.jpg"
                  alt="Man"
                  sizes="100vw"
                  fill
                />
              </div>

              <div className="space-y-1">
                <h2 className="text-lg leading-6 font-semibold text-gray-900">
                  John Doe
                </h2>

                <p className="text-sm leading-6 text-gray-500">
                  john.doe@gmail.com
                </p>

                <div className="flex items-center gap-x-1">
                  <span className="text-sm leading-6 text-gray-500">
                    Analyst
                  </span>
                  <Badge visual="purple">Individual</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-base font-semibold text-gray-600">
              Custom User Permissions
            </h1>
            <p className="text-sm mt-1 text-gray-500">
              Permissions are determined by assigned role and any individual
              permissions they have been granted.
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            <Accordion type="single" collapsible>
              <AccordionItem
                className="border border-gray-200 hover:ring-1 data-[state=open]:hover:ring-0 bg-white data-[state=open]:hover:border-gray-200 hover:ring-gray-300 hover:border-gray-300 rounded-lg"
                value="item-1"
              >
                <AccordionTrigger asChild>
                  <div className="flex justify-between w-full items-center p-3">
                    <div className="flex items-center gap-x-3">
                      <div className="h-11 w-11 rounded-lg border-[1.5px] inline-flex items-center justify-center border-gray-200 flex-none">
                        <Settings02 className="h-5 text-primary-500 w-5" />
                      </div>
                      <span className="text-sm leading-[16.94px] text-gray-900 font-medium">
                        Administrative
                      </span>
                    </div>

                    <button className="h-8 w-8 rounded-[5px] focus-visible:outline-none inline-flex items-center justify-center">
                      <ChevronDown className="h-5 w-5 flex-none text-gray-500 transition duration-300 group-data-[state=open]/trigger:-rotate-180" />
                    </button>
                  </div>
                </AccordionTrigger>
                <DisclosureContent className="overflow-x-auto">
                  {/* head */}
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Select All
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Save
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Read
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Write
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                  </div>
                  {/* body */}
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                </DisclosureContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem
                className="border border-gray-200 hover:ring-1 data-[state=open]:hover:ring-0 bg-white data-[state=open]:hover:border-gray-200 hover:ring-gray-300 hover:border-gray-300 rounded-lg"
                value="item-1"
              >
                <AccordionTrigger asChild>
                  <div className="flex justify-between w-full items-center p-3">
                    <div className="flex items-center gap-x-3">
                      <div className="h-11 w-11 rounded-lg border-[1.5px] inline-flex items-center justify-center border-gray-200 flex-none">
                        <Settings02 className="h-5 text-primary-500 w-5" />
                      </div>
                      <span className="text-sm leading-[16.94px] text-gray-900 font-medium">
                        Administrative
                      </span>
                    </div>

                    <button className="h-8 w-8 rounded-[5px] focus-visible:outline-none inline-flex items-center justify-center">
                      <ChevronDown className="h-5 w-5 flex-none text-gray-500 transition duration-300 group-data-[state=open]/trigger:-rotate-180" />
                    </button>
                  </div>
                </AccordionTrigger>
                <DisclosureContent className="overflow-x-auto">
                  {/* head */}
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Select All
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Save
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Read
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Write
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col gap-y-2 items-center justify-center border-gray-200">
                      <span className="text-sm leading-[18px] font-medium text-gray-700">
                        Delete
                      </span>
                      <Checkbox size="md" />
                    </div>
                  </div>
                  {/* body */}
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                  <div className="grid grid-cols-8 last:rounded-lg bg-gray-50">
                    <div className="col-span-3 px-6 h-[78px] whitespace-nowrap border-t flex items-center gap-x-2 border-gray-200">
                      <Checkbox size="md" />
                      <span className="text-sm leading-5 font-medium text-gray-700">
                        Feature Name
                      </span>
                    </div>

                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                    <div className="h-[78px] px-6 border-t whitespace-nowrap flex flex-col items-center justify-center border-gray-200">
                      <Checkbox size="md" />
                    </div>
                  </div>
                </DisclosureContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
