import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shipment } from '../../Shipments';
import { ShipmentCard } from '../shipment-card/shipment-card';

@Component({
  selector: 'app-shipments',
  imports: [CommonModule, ShipmentCard],
  templateUrl: './shipments.html',
  styleUrl: './shipments.css',
})
export class Shipments {
  @Input() groupedShipments!: { date: string; shipments: Shipment[] }[];
}
