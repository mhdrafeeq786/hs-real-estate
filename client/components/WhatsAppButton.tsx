import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+971507379111";
  const message = "Hello, I would like to inquire about your available properties. Please let me know the details. Thank you!.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="font-medium">Talk Agent</span>
    </a>
  );
}
