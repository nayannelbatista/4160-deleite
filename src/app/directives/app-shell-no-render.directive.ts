import { isPlatformServer } from "@angular/common";
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appShellNoRender]",
  standalone: true
})
export class AppShellNoRenderDirective implements OnInit{

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if(isPlatformServer(this.platformId)) {
      this.viewContainer.clear()
    }
    else {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }
}