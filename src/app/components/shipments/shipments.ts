import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shipment } from '../../Shipments';
// import { shipments } from '../../mock-shipments';
import { ShipmentCard } from '../shipment-card/shipment-card';

@Component({
  selector: 'app-shipments',
  imports: [CommonModule, ShipmentCard],
  templateUrl: './shipments.html',
  styleUrl: './shipments.css',
})
export class Shipments {
  // shipments: Shipment[] = shipments;
  @Input() shipments!: Shipment[] ;
}
