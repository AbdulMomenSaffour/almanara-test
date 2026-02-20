import { Component } from '@angular/core';
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
  imports: [RouterOutlet, CommonModule, Shipments, Navbar, FormsModule , Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'almananra-test';

  shipments: Shipment[] = shipments; // البيانات الأصلية
  filteredShipments: Shipment[] = shipments; // المعروضة حالياً
  searchTerm: string = '';

  // onSearch() {
  //   const term = this.searchTerm.toLowerCase().trim();

  //   if (!term) {
  //     this.filteredShipments = this.shipments;
  //     return;
  //   }

  //   this.filteredShipments = this.shipments.filter(
  //     (shipment) =>
  //       shipment.orderId.toLowerCase().includes(term) ||
  //       shipment.deliveredTime.toDateString().toLowerCase().includes(term),
  //   );
  // }

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
  }
  goToPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  goToNext() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
