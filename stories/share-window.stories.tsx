import React, { useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  ArrowLeft,
  ChevronDown,
  Code,
  Link01,
  Minus,
  Plus,
  Settings,
  X2
} from "@blend-metrics/icons";
import { Combobox } from "@headlessui/react";
import { Meta } from "@storybook/react";
import { normalizeProps, useMachine } from "@zag-js/react";
import * as tagsInput from "@zag-js/tags-input";
import { flushSync } from "react-dom";
import { z } from "zod";
import { callAll, cn, isNotEmpty } from "@/lib/functions";
import { useToggle } from "@/lib/hooks";
import {
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioCheckItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  HelperText,
  Input,
  Label,
  ScrollArea,
  ScrollBar,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  inputVariants
} from "@/components/ui";

const meta: Meta = {
  title: "Share Window"
};

export default meta;

interface Invitee {
  avatar?: string;
  username?: string;
  email: string;
}

type Invitees = Invitee[];

const options = [
  {
    avatar: "/man.jpg",
    username: "Thomas",
    email: "tranthuy.nute@gmail.com"
  },
  {
    avatar: "/woman.jpg",
    username: "Tiffany Steiner",
    email: "tiff.steinter@gmail.com"
  }
];

const isEmail = (value: string) => z.string().email().safeParse(value).success;

export function Default() {
  const [selected, setSelected] = React.useState<Invitees>();
  const [inputValue, setInputValue] = React.useState("");

  const value = React.useMemo(
    () => selected?.map((value) => value.email),
    [selected]
  );
  const [state, send] = useMachine(
    tagsInput.machine({
      id: React.useId(),
      allowEditTag: false,
      validate: (details) => {
        const exists = details.value.includes(details.inputValue);
        return exists ? false : isEmail(details.inputValue);
      }
    }),
    {
      context: {
        value,
        onValueChange: (details) => {
          const endItem = details.value[details.value.length - 1];
          flushSync(() =>
            setSelected((prev) =>
              prev ? [...prev, { email: endItem }] : [{ email: endItem }]
            )
          );
        },
        inputValue
      }
    }
  );
  const id = React.useId();
  const [isOpen, { toggle }] = useToggle();
  const [message, setMessage] = useState("");

  const getIsValid = () => {
    return value?.includes(inputValue) ? false : isEmail(inputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && getIsValid()) {
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    flushSync(() => setInputValue(value));
  };

  const handleAddTag = () => {
    if (getIsValid()) {
      api.addValue(inputValue);
      setInputValue("");
    }
  };

  const onMessageChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleRemove = (email: string) => {
    const filtered = selected?.filter((value) => value.email !== email);
    setSelected(filtered);
  };

  const api = tagsInput.connect(state, send, normalizeProps);

  const filteredOptions =
    inputValue === ""
      ? options
      : options.filter((option) => {
          return option.username
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        });

  const props = { multiple: true } as unknown as { multiple: false };

  return (
    <div className="max-w-[690px] bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg leading-7 font-semibold text-gray-800">
          Share “File/Folder name”
        </h2>

        <div className="inline-flex items-center gap-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-gray-500 hover:text-gray-900">
                <AlertCircle className="h-6 w-6" />
              </TooltipTrigger>
              <TooltipContent side="bottom">Support</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-gray-500 hover:text-gray-900">
                <Settings className="h-6 w-6" />
              </TooltipTrigger>
              <TooltipContent side="bottom">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="space-y-2 mt-8">
        <Label className="text-gray-700" size="md" htmlFor={id}>
          Share “File/Folder name”
        </Label>
        <div className="flex items center gap-x-3">
          <Combobox
            className="flex-auto relative"
            as="div"
            value={selected}
            onChange={setSelected}
            {...props}
          >
            <div
              {...api.rootProps}
              className={cn(
                inputVariants({
                  className:
                    "min-h-[44px] h-auto flex flex-wrap gap-2 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-50"
                })
              )}
              tabIndex={0}
            >
              {api.value.map((value, index) => (
                <Badge
                  {...api.getItemProps({ index, value })}
                  key={index}
                  visual="primary"
                >
                  {value}
                  <button
                    {...api.getItemDeleteTriggerProps({ index, value })}
                    onClick={callAll(
                      api.getItemDeleteTriggerProps({ index, value }).onClick,
                      () => handleRemove(value)
                    )}
                    className="focus-visible:outline-none flex-none"
                  >
                    <X2 className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              <Combobox.Input
                {...api.inputProps}
                className="text-base min-w-[132px] flex-auto text-gray-700 p-0 focus:ring-0 border-none placeholder:text-gray-500"
                placeholder="Add emails or find contacts"
                id={id}
                value={inputValue}
                onKeyDown={callAll(api.inputProps.onKeyDown, handleKeyDown)}
                onChange={callAll(api.inputProps.onChange, handleChange)}
              />
            </div>

            <Combobox.Options className="absolute w-full z-50 rounded-lg bg-white border border-gray-100 shadow-lg mt-2">
              {filteredOptions.map((option) => (
                <Combobox.Option
                  key={option.email}
                  className="flex cursor-pointer items-center gap-x-3 py-2.5 h-16 px-3.5"
                  value={option}
                >
                  <div className="h-10 flex-none relative rounded-full overflow-hidden w-10">
                    <Image
                      className="object-cover"
                      src={option.avatar}
                      alt="man.jpg"
                      sizes="100vh"
                      fill
                    />
                  </div>
                  <div className="flex-auto">
                    <h2 className="text-sm leading-6 font-medium text-gray-800">
                      {option.username}
                    </h2>
                    <p className="text-sm leading-5 text-gray-500">
                      {option.email}
                    </p>
                  </div>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
          <Button
            variant="light"
            size="lg"
            type="button"
            onClick={handleAddTag}
          >
            Add
          </Button>
        </div>
      </div>

      <button
        className="inline-flex focus-visible:outline-none gap-x-2 mt-6 text-base font-semibold text-gray-700 items-center"
        onClick={toggle}
      >
        Add a Message{" "}
        {isOpen ? (
          <Minus className="h-6 w-6 flex-none" />
        ) : (
          <Plus className="h-6 w-6 flex-none" />
        )}
      </button>

      {isOpen && (
        <Textarea
          className="h-20 mt-3"
          value={message}
          onChange={onMessageChanged}
          placeholder="Write message here..."
        />
      )}

      {selected && isNotEmpty(selected) && (
        <div className="mt-6 space-y-3">
          <span className="text-base leading-5 font-medium text-gray-700">
            Invites
          </span>
          {selected.map(({ email, avatar, username }) => (
            <div className="space-y-3 mt-3" key={email}>
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center gap-x-3">
                  {avatar ? (
                    <div className="h-8 w-8 rounded-full overflow-hidden relative">
                      <Image
                        className="object-cover"
                        src={avatar}
                        alt="Man"
                        sizes="100vh"
                        fill
                      />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-300 border-dashed bg-gray-50 relative" />
                  )}
                  <span className="font-medium text-sm leading-5 text-gray-800">
                    {username ? username : email}
                  </span>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-900">
                    Viewer
                    <ChevronDown className="text-gray-500 h-5 w-5 flex-none" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuRadioGroup>
                      <DropdownMenuRadioCheckItem value="Viewer">
                        Viewer
                      </DropdownMenuRadioCheckItem>
                      <DropdownMenuRadioCheckItem value="Editor">
                        Editor
                      </DropdownMenuRadioCheckItem>
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Resend Invite</DropdownMenuItem>
                    <DropdownMenuItem>Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex mt-8 justify-between">
        <button className="inline-flex gap-x-2 focus-visible:outline-none text-primary-500 font-semibold items-center">
          <Link01 className="h-[15px] w-[15px]" />
          Copy Link
        </button>
        <div className="inline-flex items-center gap-x-3">
          <Button visual="gray" variant="outlined">
            Cancel
          </Button>
          <Button>Send Invite</Button>
        </div>
      </div>
    </div>
  );
}

export const ManageSharingSettings = () => {
  return (
    <div className="shadow-xl bg-white rounded-xl py-6 max-w-[690px] h-[716px]">
      <div className="h-7 flex justify-between px-6">
        <Button className="gap-x-2" variant="link">
          <ArrowLeft className="h-4 w-4 text-primary-500" />
          Back
        </Button>

        <span className="text-lg font-semibold text-gray-800">
          Manage Sharing Settings
        </span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-gray-500 hover:text-gray-900">
              <AlertCircle className="h-6 w-6" />
            </TooltipTrigger>
            <TooltipContent side="bottom">Support</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="mt-8">
        <ScrollArea
          className="h-[608px]"
          scrollBar={<ScrollBar className="w-4 p-1" />}
        >
          <div className="px-6">
            <div className="rounded-t-lg border-t border-x border-gray-200 bg-gray-100 py-3 px-4">
              <span className="text-base leading-[19.36px] font-semibold text-gray-500">
                General Sharing
              </span>
            </div>

            <div className="border border-gray-200 p-4 rounded-b-lg">
              <div className="flex items-baseline gap-x-3 pb-4 border-b border-gray-200">
                <Checkbox id="tracking" />
                <div className="space-y-1">
                  <Label className="text-gray-700" size="md" htmlFor="tracking">
                    Enable User Tracking
                  </Label>
                  <HelperText size="sm">
                    Track the usage of the shared content, such as views, or
                    edits
                  </HelperText>
                </div>
              </div>

              <div className="flex items-baseline gap-x-3 py-4 border-b border-gray-200">
                <Checkbox id="embed" />
                <div>
                  <Label className="text-gray-700" size="md" htmlFor="embed">
                    Enable Embed Code
                  </Label>
                  <HelperText className="mt-1" size="sm">
                    Copy the embed code to share the content on a website or in
                    an application.
                  </HelperText>

                  <Button className="mt-3" visual="gray" variant="outlined">
                    <Code className="h-[15px] w-[15px]" />
                    Copy Embed Code
                  </Button>
                </div>
              </div>

              <div className="flex items-baseline gap-x-3 py-4 border-b border-gray-200">
                <Checkbox id="sharing" />
                <div className="space-y-1">
                  <Label className="text-gray-700" size="md" htmlFor="sharing">
                    Guest Sharing
                  </Label>
                  <HelperText size="sm">
                    Allow guests to make requests to admin to share content.
                  </HelperText>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="rounded-t-lg border-t border-x border-gray-200 bg-gray-100 py-3 px-4">
                <span className="text-base leading-[19.36px] font-semibold text-gray-500">
                  Link Settings
                </span>
              </div>

              <div className="border border-gray-200 p-4 rounded-b-lg">
                <div className="flex items-baseline gap-x-3 pb-4 border-b border-gray-200">
                  <Checkbox id="access" />
                  <div>
                    <Label className="text-gray-700" size="md" htmlFor="access">
                      Who Has Access
                    </Label>
                    <HelperText className="mt-1" size="sm">
                      Determine which users can access the shared content.
                    </HelperText>

                    <div className="mt-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            className="gap-x-2 font-normal"
                            size="lg"
                            visual="gray"
                            variant="outlined"
                          >
                            Anyone with the link
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuRadioGroup>
                            <DropdownMenuRadioCheckItem value="Anyone with the link">
                              Anyone with the link
                            </DropdownMenuRadioCheckItem>
                            <DropdownMenuRadioCheckItem value="Only invited guests">
                              Only invited guests
                            </DropdownMenuRadioCheckItem>
                            <DropdownMenuRadioCheckItem value="Only invited guests">
                              Owner Only
                            </DropdownMenuRadioCheckItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline gap-x-3 py-4 border-b border-gray-200">
                  <Checkbox id="expiration" />
                  <div>
                    <Label
                      className="text-gray-700"
                      size="md"
                      htmlFor="expiration"
                    >
                      Enable Link Password
                    </Label>
                    <HelperText className="mt-1" size="sm">
                      Set a password that users need to enter to access the
                      shared content.
                    </HelperText>

                    <Input className="max-w-[206px] mt-3" />
                  </div>
                </div>

                <div className="flex items-baseline gap-x-3 py-4 border-b border-gray-200">
                  <Checkbox id="sharing" />
                  <div className="space-y-1">
                    <Label
                      className="text-gray-700"
                      size="md"
                      htmlFor="sharing"
                    >
                      Allow Notification Alerts
                    </Label>
                    <HelperText size="sm">
                      Notify users when the content has been shared with them.
                    </HelperText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
