import { Component } from "@angular/core";
import { HlmButtonModule } from "@/lib/components/angular/button/hlm-button.module";

@Component({
  selector: "button-preview",
  standalone: true,
  imports: [HlmButtonModule],
  template: `<Button hlmBtn href="/" [target]="'_blank'">Button</Button>`,
})
export class ButtonPreviewComponent {}
