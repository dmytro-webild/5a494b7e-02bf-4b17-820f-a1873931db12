import React from 'react';
import ContactSplitFormParallax from '@/components/sections/contact/ContactSplitFormParallax';

export default function EstimateFormSection() {
  return (
    <div data-webild-section="estimate-form" id="estimate-form">
      <ContactSplitFormParallax
        tag="Get a Quote"
        title="Receive an Estimate (Or a Callback)"
        description="Fill out the form below with your project details, and our team will get back to you promptly."
        inputs={[
          { name: "firstName", type: "text", placeholder: "First Name", required: true },
          { name: "lastName", type: "text", placeholder: "Last Name", required: true },
          { name: "cellNumber", type: "tel", placeholder: "Cell Number", required: true },
          { name: "email", type: "email", placeholder: "Email", required: true },
          { name: "area", type: "text", placeholder: "Area", required: true },
          { name: "address", type: "text", placeholder: "Address", required: true }
        ]}
        textarea={{ name: "projectDescription", placeholder: "Project Description", rows: 4, required: true }}
        buttonText="Submit"
        imageSrc="http://img.b2bpic.net/free-photo/smiling-businessman-manager-suit-looking-camera-meeting_1163-4799.jpg"
        textAnimation="slide-up"
      />
    </div>
  );
}