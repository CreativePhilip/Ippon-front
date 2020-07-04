import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-preview',
  templateUrl: './place-preview.component.html',
  styleUrls: ['./place-preview.component.scss']
})
export class PlacePreviewComponent implements OnInit {
  @Input() placeObject;

  constructor() { }

  ngOnInit(): void {
  }

}
