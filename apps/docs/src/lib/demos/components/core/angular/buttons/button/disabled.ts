import { Component } from "@angular/core";
import { HlmButtonModule } from "@/lib/components/core/default/angular/button/hlm-button.module";

@Component({
  selector: "button-preview",
  standalone: true,
  imports: [HlmButtonModule],
  template: `<Button hlmBtn [isDisabled]="true">Button</Button>`,
})
export class ButtonPreviewComponent {}
