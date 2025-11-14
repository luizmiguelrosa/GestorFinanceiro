import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[zStringTemplateOutlet]',
  standalone: true,
  exportAs: 'zStringTemplateOutlet'
})
export class ZardStringTemplateOutletDirective implements OnChanges {
  @Input() zStringTemplateOutlet: string | TemplateRef<unknown> | null | undefined = null;
  @Input() zStringTemplateOutletContext: unknown | null = null;

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<unknown>) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { zStringTemplateOutlet } = changes;
    if (zStringTemplateOutlet) {
      this.recreateView();
    }
  }

  private recreateView(): void {
    this.viewContainer.clear();
    const isTemplateRef = this.zStringTemplateOutlet instanceof TemplateRef;
    const template = isTemplateRef ? this.zStringTemplateOutlet : this.templateRef;
    this.viewContainer.createEmbeddedView(
        template as TemplateRef<unknown>,
        isTemplateRef ? this.zStringTemplateOutletContext : { $implicit: this.zStringTemplateOutlet }
    );
  }
}
