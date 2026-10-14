import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { createDirectWhatsAppLink } from '../../lib/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: 'whatsapp' | 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  label = 'Chat on WhatsApp',
  variant = 'whatsapp',
  size = 'md',
  fullWidth = false,
  className = '',
}) => {
  const handleClick = () => {
    const link = createDirectWhatsAppLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      onClick={handleClick}
      icon={<MessageSquare className="w-4 h-4 fill-current" />}
      aria-label={`${label} (+1 281-780-6153)`}
    >
      {label}
    </Button>
  );
};
