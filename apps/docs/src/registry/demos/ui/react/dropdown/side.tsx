"use client";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/registry/ui/react/button";
import {
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownSeparator,
  DropdownShortcut,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
} from "@/registry/ui/react/dropdown";

const sides = ["top", "right", "left", "bottom"] as const;

export default function TooltipDemo(): JSX.Element {
  const Content = () => (
    <>
      <DropdownLabel>My Account</DropdownLabel>
      <DropdownSeparator />
      <DropdownGroup>
        <DropdownItem>
          <User className="mr-2 size-4" />
          <span>Profile</span>
          <DropdownShortcut>⇧⌘P</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <CreditCard className="mr-2 size-4" />
          <span>Billing</span>
          <DropdownShortcut>⌘B</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <Settings className="mr-2 size-4" />
          <span>Settings</span>
          <DropdownShortcut>⌘S</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <Keyboard className="mr-2 size-4" />
          <span>Keyboard shortcuts</span>
          <DropdownShortcut>⌘K</DropdownShortcut>
        </DropdownItem>
      </DropdownGroup>
      <DropdownSeparator />
      <DropdownGroup>
        <DropdownItem>
          <Users className="mr-2 size-4" />
          <span>Team</span>
        </DropdownItem>
        <DropdownSub>
          <DropdownSubTrigger>
            <UserPlus className="mr-2 size-4" />
            <span>Invite users</span>
          </DropdownSubTrigger>
          <DropdownPortal>
            <DropdownSubContent>
              <DropdownItem>
                <Mail className="mr-2 size-4" />
                <span>Email</span>
              </DropdownItem>
              <DropdownItem>
                <MessageSquare className="mr-2 size-4" />
                <span>Message</span>
              </DropdownItem>
              <DropdownSeparator />
              <DropdownItem>
                <PlusCircle className="mr-2 size-4" />
                <span>More...</span>
              </DropdownItem>
            </DropdownSubContent>
          </DropdownPortal>
        </DropdownSub>
        <DropdownItem>
          <Plus className="mr-2 size-4" />
          <span>New Team</span>
          <DropdownShortcut>⌘+T</DropdownShortcut>
        </DropdownItem>
      </DropdownGroup>
      <DropdownSeparator />
      <DropdownItem>
        <Github className="mr-2 size-4" />
        <span>GitHub</span>
      </DropdownItem>
      <DropdownItem>
        <LifeBuoy className="mr-2 size-4" />
        <span>Support</span>
      </DropdownItem>
      <DropdownItem disabled>
        <Cloud className="mr-2 size-4" />
        <span>API</span>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <LogOut className="mr-2 size-4" />
        <span>Log out</span>
        <DropdownShortcut>⇧⌘Q</DropdownShortcut>
      </DropdownItem>
    </>
  );

  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <Dropdown key={side} content={<Content />} side={side} className="w-56">
          <Button>{side}</Button>
        </Dropdown>
      ))}
    </div>
  );
}
