
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
          )}
          {item.href ? (
            <Link
              to={item.href}
              className="text-gray-600 hover:text-primary transition-colors text-[12px]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium text-[12px]">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
