export interface VideoChapter {
  id: string;
  title: string;
  titleFr: string;
  timestamp: string;
  seconds: number;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'client' | 'bot';
  text: string;
  time: string;
  meta?: {
    budget?: string;
    city?: string;
    status?: string;
    visitDate?: string;
  };
}

export interface AgencyBooking {
  agencyName: string;
  contactName: string;
  phone: string;
  email: string;
  city: string;
  teamSize: string;
  currentMonthlyLeads: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  agencyName: string;
  directorName: string;
  city: string;
  quote: string;
  metric: string;
  metricLabel: string;
  dealGrowth: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'technical' | 'whatsapp' | 'setup';
}
