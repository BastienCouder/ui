import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
  ComponentRef,
  Type,
  OnDestroy,
  AfterViewInit,
  Component,
} from "@angular/core";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { LoaderIconComponent } from "../lib/icons/icons";

export const buttonVariants = tv(
  {
    base: "inline-flex gap-2 cursor-pointer items-center justify-center whitespace-nowrap rounded-md leading-normal text-sm shrink-0 font-medium ring-offset-background transition-colors disabled:cursor-default disabled:bg-background-disabled disabled:text-fg-disabled",
    variants: {
      variant: {
        default:
          "bg-background-neutral hover:bg-background-neutral-hover pressed:bg-background-neutral-active text-fg-onNeutral",
        primary:
          "bg-background-primary hover:bg-background-primary-hover pressed:bg-background-primary-active text-fg-onPrimary",
        secondary:
          "bg-background-secondary hover:bg-background-secondary-hover pressed:bg-background-secondary-active text-fg-onSecondary",
        quiet:
          "bg-transparent hover:bg-background-inverse/10 pressed:bg-background-inverse/20 text-fg",
        outline:
          "border border-border-field bg-transparent hover:bg-background-inverse/10 pressed:bg-background-inverse/20 text-fg disabled:border-border-disabled disabled:bg-transparent",
        accent:
          "bg-background-accent hover:bg-background-accent-hover pressed:bg-background-accent-active text-fg-onAccent",
        success:
          "bg-background-success hover:bg-background-success-hover pressed:bg-background-success-active text-fg-onSuccess",
        warning:
          "bg-background-warning hover:bg-background-warning-hover pressed:bg-background-warning-active text-fg-onWarning",
        danger:
          "bg-background-danger hover:bg-background-danger-hover pressed:bg-background-danger-active text-fg-onDanger",
      },
      size: {
        sm: "h-8 px-3 [&_svg]:size-4",
        md: "h-9 px-4 [&_svg]:size-4",
        lg: "h-10 px-5 [&_svg]:size-5",
      },
      shape: {
        rectangle: "",
        square: "",
        circle: "rounded-full",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        shape: ["square", "circle"],
        className: "w-8 px-0",
      },
      {
        size: "md",
        shape: ["square", "circle"],
        className: "w-9 px-0",
      },
      {
        size: "lg",
        shape: ["square", "circle"],
        className: "w-10 px-0",
      },
    ],
  },
  {
    responsiveVariants: ["sm", "lg"],
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: "[hlmBtn]",
})
export class HlmButtonDirective implements OnChanges, OnDestroy, AfterViewInit {
  @Input() variant: ButtonVariants["variant"] = "default";
  @Input() size: ButtonVariants["size"] = "md";
  @Input() shape: ButtonVariants["shape"] = "rectangle";
  @Input() isLoading = false;
  @Input() isDisabled = false;
  @Input() prefix?: string | Type<any>;
  @Input() suffix?: string | Type<any>;
  @Input() loaderComponent?: Type<any> = LoaderIconComponent;
  @Input() href?: string;
  @Input() target?: string;

  private prefixComponentRef?: ComponentRef<any>;
  private suffixComponentRef?: ComponentRef<any>;
  private loaderComponentRef?: ComponentRef<any>;
  private originalElement: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
  ) {
    this.originalElement = el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes["variant"] ||
      changes["size"] ||
      changes["shape"] ||
      changes["isLoading"] ||
      changes["isDisabled"] ||
      changes["href"]
    ) {
      this.updateClasses();
    }

    if (changes["prefix"] || changes["suffix"] || changes["isLoading"]) {
      this.updateContent();
    }
  }

  ngAfterViewInit(): void {
    if (this.href) {
      this.wrapWithAnchor();
    }
  }

  ngOnDestroy(): void {
    this.destroyComponentRef(this.prefixComponentRef);
    this.destroyComponentRef(this.suffixComponentRef);
    this.destroyComponentRef(this.loaderComponentRef);
  }

  private updateClasses(): void {
    const buttonClasses = cn(
      buttonVariants({
        variant: this.variant,
        size: this.size,
        shape: this.shape,
      }),
      {
        "cursor-default bg-background-disabled text-fg-disabled":
          this.isDisabled || this.isLoading,
      },
    );

    this.renderer.setAttribute(this.originalElement, "class", buttonClasses);
  }

  private updateContent(): void {
    const button = this.originalElement;
    const buttonText = button.innerText.trim();
    button.innerHTML = "";

    if (this.isLoading) {
      this.hideComponentRef(this.prefixComponentRef);
      this.renderLoader();
    } else {
      this.showComponentRef(this.prefixComponentRef);
      this.destroyComponentRef(this.loaderComponentRef);
    }

    const textNode = this.renderer.createText(buttonText);
    this.renderer.appendChild(button, textNode);

    if (this.suffix) {
      this.renderContent(this.suffix, false);
    }

    if (!this.isLoading && this.prefix) {
      this.renderContent(this.prefix, true);
    }
  }

  private renderLoader(): void {
    if (this.loaderComponent) {
      this.loaderComponentRef = this.createComponentRef(this.loaderComponent);
      if (this.loaderComponentRef) {
        const contentElement = this.loaderComponentRef.location.nativeElement;
        this.renderer.insertBefore(
          this.originalElement,
          contentElement,
          this.originalElement.firstChild,
        );
      }
    }
  }

  private renderContent(content: string | Type<any>, isPrefix: boolean): void {
    const contentRef = this.createComponentRef(content);

    if (contentRef) {
      const contentElement = contentRef.location.nativeElement;
      if (isPrefix) {
        this.prefixComponentRef = contentRef;
        this.renderer.insertBefore(
          this.originalElement,
          contentElement,
          this.originalElement.firstChild,
        );
      } else {
        this.suffixComponentRef = contentRef;
        this.renderer.appendChild(this.originalElement, contentElement);
      }
    }
  }

  private createComponentRef(
    content: string | Type<any>,
  ): ComponentRef<any> | undefined {
    if (typeof content === "string") {
      const componentRef = this.vcr.createComponent(TextComponent);
      componentRef.instance.text = content;
      return componentRef;
    } else if (typeof content === "function") {
      const componentRef = this.vcr.createComponent(content);
      return componentRef;
    }
    return undefined;
  }

  private destroyComponentRef(componentRef?: ComponentRef<any>): void {
    if (componentRef) {
      componentRef.destroy();
    }
  }

  private hideComponentRef(componentRef?: ComponentRef<any>): void {
    if (componentRef) {
      this.renderer.setStyle(
        componentRef.location.nativeElement,
        "display",
        "none",
      );
    }
  }

  private showComponentRef(componentRef?: ComponentRef<any>): void {
    if (componentRef) {
      this.renderer.setStyle(
        componentRef.location.nativeElement,
        "display",
        "block",
      );
    }
  }

  private wrapWithAnchor(): void {
    const parent = this.renderer.parentNode(this.originalElement);
    const anchor = this.renderer.createElement("a");
    this.renderer.setAttribute(anchor, "href", this.href!);
    if (this.target) {
      this.renderer.setAttribute(anchor, "target", this.target);
    }

    this.renderer.insertBefore(parent, anchor, this.originalElement);
    this.renderer.removeChild(parent, this.originalElement);
    this.renderer.appendChild(anchor, this.originalElement);
  }
}

@Component({
  selector: "app-text-component",
  template: "{{ text }}",
})
export class TextComponent {
  @Input() text: string = "";
}
