import { Component, Input } from '@angular/core';
import { Shipment } from '../../Shipments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipment-card',
  imports: [CommonModule],
  templateUrl: './shipment-card.html',
  styleUrl: './shipment-card.css',
})
export class ShipmentCard {
  @Input() shipment!: Shipment;
  get isTransit(): boolean {
    return this.shipment?.status === 'Transit, Kuwait';
  }

  get isPreparation(): boolean {
    return this.shipment?.status === 'In-Preparation';
  }

  get isPaymentRequired(): boolean {
    return this.shipment?.status === 'Payment Required';
  }

  isExpanded = false;

  toggleExpand() {
    console.log(this.isExpanded + "1");
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded + "2");
  }

  shipmentTrackingWithTimestamp: any[] = [];
  latestStageTimestamp!: number;

  ngOnInit() {
    this.prepareTracking();
  }

  prepareTracking() {
    if (!this.shipment?.tracking?.length) return;

    this.shipmentTrackingWithTimestamp = this.shipment.tracking.map((stage) => ({
      ...stage,
      timestamp: new Date(stage.stageDateTime).getTime(),
    }));

    this.latestStageTimestamp = Math.max(
      ...this.shipmentTrackingWithTimestamp.map((s) => s.timestamp),
    );
  }
}
