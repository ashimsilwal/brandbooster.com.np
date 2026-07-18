import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447537127655?text=Hi%20Brand%20Booster%20Nepal!%20I%20want%20to%20buy%20SMM%20services.%20Can%20you%20help?"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Brand Booster Nepal on WhatsApp"
      title="Chat with us on WhatsApp"
      id="whatsapp-float"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">
        💬 Chat with us on WhatsApp
      </span>
    </a>
  );
}
