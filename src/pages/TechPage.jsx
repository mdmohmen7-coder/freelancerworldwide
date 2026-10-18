import React from 'react';
import TechStack from '../components/TechStack';
import ContactForm from '../components/ContactForm';

export default function TechPage() {
  return (
    <div className="pt-28 bg-[#06080F]">
      <TechStack />
      <ContactForm />
    </div>
  );
}