"use client";

import { cn } from '@/lib/utils';
import * as React from 'react'

interface TableOfContentsListProps
   extends React.ComponentPropsWithoutRef<'ul'> {
   indent?: boolean
}

const TableOfContentsList = React.forwardRef<
   React.ElementRef<'ul'>,
   TableOfContentsListProps
>(({ className, indent, ...props }, ref) => (
   <ul
      ref={ref}
      className={cn('m-0 list-none', indent && 'pl-4', className)}
      {...props}
   />
))
TableOfContentsList.displayName = 'TableOfContentsList'

interface TableOfContentsTitleProps
   extends React.ComponentPropsWithoutRef<'li'> {}

const TableOfContentsTitle = React.forwardRef<
   React.ElementRef<'li'>,
   TableOfContentsTitleProps
>(({ className, ...props }, ref) => (
   <li
      ref={ref}
      className={cn('mb-2 text-sm font-medium', className)}
      {...props}
   />
))
TableOfContentsTitle.displayName = 'TableOfContentsTitle'

interface TableOfContentsItemProps
   extends React.ComponentPropsWithoutRef<'li'> {
   indent?: boolean
}

const TableOfContentsItem = React.forwardRef<
   React.ElementRef<'li'>,
   TableOfContentsItemProps
>(({ className, indent, ...props }, ref) => (
   <li
      ref={ref}
      className={cn('mt-0 pt-2', indent && 'ml-4', className)}
      {...props}
   />
))
TableOfContentsItem.displayName = 'TableOfContentsItem'

interface TableOfContentsLinkProps extends React.ComponentPropsWithoutRef<'a'> {
   isActive?: boolean
}

const TableOfContentsLink = React.forwardRef<
   React.ElementRef<'a'>,
   TableOfContentsLinkProps
>(({ className, isActive, ...props }, ref) => (
   <a
      ref={ref}
      className={cn(
         'text-fg hover:text-primary text-sm font-medium transition-colors',
         isActive ? 'text-fg font-medium' : 'text-muted-fg',
         className,
      )}
      {...props}
   />
))
TableOfContentsLink.displayName = 'TableOfContentsLink'

export {
   TableOfContentsList,
   TableOfContentsTitle,
   TableOfContentsItem,
   TableOfContentsLink,
}
