import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Shipments } from './components/shipments/shipments';
import { Navbar } from './components/navbar/navbar';
import { FormsModule } from '@angular/forms';

import { Shipment } from './Shipments';
import { shipments } from './mock-shipments';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Shipments, Navbar, FormsModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  ngOnInit() {
    this.updateGroupedShipments();
  }
  title: string = 'almananra-test';
  groupedShipments: { date: string; shipments: Shipment[] }[] = [];
  shipments: Shipment[] = shipments;
  filteredShipments: Shipment[] = shipments;
  searchTerm: string = '';

  // search
  onSearch() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredShipments = this.shipments;
    } else {
      this.filteredShipments = this.shipments.filter(
        (shipment) =>
          shipment.orderId.toLowerCase().includes(term) ||
          shipment.deliveredTime.toDateString().toLowerCase().includes(term),
      );
    }
    this.currentPage = 1;
    this.updateGroupedShipments();
  }

  // pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;

  get paginatedShipments(): Shipment[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredShipments.slice(start, end);
  }
  get totalPages(): number {
    return Math.ceil(this.filteredShipments.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updateGroupedShipments();
  }
  goToPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateGroupedShipments();
    }
  }
  goToNext() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateGroupedShipments();
    }
  }
  updateGroupedShipments() {
    const grouped: { [key: string]: Shipment[] } = {};

    this.paginatedShipments.forEach((shipment) => {
      const dateKey = shipment.shipmentDate.toISOString().split('T')[0];

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(shipment);
    });

    this.groupedShipments = Object.keys(grouped).map((date) => ({
      date,
      shipments: grouped[date],
    }));
  }
}
