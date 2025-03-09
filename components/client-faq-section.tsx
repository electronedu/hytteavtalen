"use client";

import { FaqSection } from "@/components/ui/faq-section";

interface ClientFaqSectionProps {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
    category?: string;
  }[];
  contactTitle: string;
  contactDescription?: string;
  contactButtonText: string;
}

export function ClientFaqSection({
  title,
  description,
  items,
  contactTitle,
  contactDescription,
  contactButtonText,
}: ClientFaqSectionProps) {
  const handleContact = () => {
    console.log("Contact support clicked");
  };

  return (
    <FaqSection
      title={title}
      description={description}
      items={items}
      contactInfo={{
        title: contactTitle,
        description: contactDescription,
        buttonText: contactButtonText,
        onContact: handleContact,
      }}
    />
  );
}
