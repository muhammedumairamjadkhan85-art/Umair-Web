import React from 'react';
import {
  Building2,
  Target,
  ShoppingBag,
  Code2,
  Layers,
  Compass,
  RefreshCw,
  Smartphone,
  Sparkles,
  Eye,
  MessageSquare,
  ShieldCheck,
  Cpu,
  Globe,
  TrendingUp,
  ArrowRight,
  Check,
  ExternalLink,
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  X,
  Menu,
  ChevronRight,
  Share2,
  Sliders,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Building2':
      return <Building2 className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'Code2':
      return <Code2 className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'RefreshCw':
      return <RefreshCw className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'MessageSquare':
      return <MessageSquare className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    case 'Check':
      return <Check className={className} />;
    case 'ExternalLink':
      return <ExternalLink className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Send':
      return <Send className={className} />;
    case 'X':
      return <X className={className} />;
    case 'Menu':
      return <Menu className={className} />;
    case 'ChevronRight':
      return <ChevronRight className={className} />;
    case 'Share2':
      return <Share2 className={className} />;
    case 'Sliders':
      return <Sliders className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    case 'AlertCircle':
      return <AlertCircle className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};
