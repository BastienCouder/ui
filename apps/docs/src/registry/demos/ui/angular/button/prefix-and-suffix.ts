import { Component } from "@angular/core";
import { HlmButtonModule } from "@/lib/components/angular/button/hlm-button.module";
import { UploadIconComponent } from "@/lib/components/angular/lib/icons/icons";

@Component({
  selector: "button-preview",
  standalone: true,
  imports: [HlmButtonModule],
  template: `
    <div className="flex items-center gap-2">
      <Button hlmBtn [prefix]="UploadIconComponent"> Button </Button>
      <Button hlmBtn [suffix]="UploadIconComponent"> Button </Button>
    </div>
  `,
})
export class ButtonPreviewComponent {
  UploadIconComponent = UploadIconComponent;
}
