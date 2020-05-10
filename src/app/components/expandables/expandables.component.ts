import { Component, AfterViewInit, Input, ViewChild,  ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-expandables",
  templateUrl: "./expandables.component.html",
  styleUrls: ["./expandables.component.scss"]
})
export class ExpandablesComponent implements AfterViewInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";

  constructor(public renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }
}