export interface TrackingStage {
  stageName: 'Doha Port' | 'Turkish Port' | 'Al-Manara Depo';
  stageDateTime: Date;
}

export interface Shipment {
  image: string;
  orderId: string;
  noOfOrders: number;
  weight: number; // بالكيلوغرام مثلاً
  deliveredTime: Date;
  notes: string[];
  status: 'Transit, Kuwait' | 'In-Preparation' | 'Payment Required';
  dimensions: { L: number; W: number; H: number }; // بالأمتار أو سنتيمتر حسب احتياجك
  company: string;
  issueDate: Date;
  receiver: {
    name: string;
    phone: string;
    city: string;
    address: string;
  };
  shipmentDate: Date; // للتحكم بعرض الكرت حسب التاريخ
  tracking: TrackingStage[];
}
