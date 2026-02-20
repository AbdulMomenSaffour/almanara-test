import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentCard } from './shipment-card';

describe('ShipmentCard', () => {
  let component: ShipmentCard;
  let fixture: ComponentFixture<ShipmentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
